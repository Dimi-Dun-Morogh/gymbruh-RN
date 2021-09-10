import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {startWorkOut, finishWorkOut} from '../../redux/workout/workout.actions';
import {TextBlock, WorkOutExercises, Button} from '../../components';
import {useAppSelector} from '../../hooks/storeHooks';
import {Routine} from '../../redux/routines/routine.types';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {NavProp} from '../../types/routingTypes';
import {addHistory} from '../../redux/history/history.actions';

const WorkOutScreen = () => {
  const routines = useAppSelector(state => state.routinesState.routines);
  const [selectedRoutine, setSelectedRoutine] = useState<null | Routine>(null);
  const [selectedExercises, setSelectedExercises] = useState<string[] | []>([]);
  const workOutState = useAppSelector(state => state.workOutState);

  const dispatch = useDispatch();
  const navigation = useNavigation<NavProp>();

  const {sets: workOutSets, routineId} = workOutState;

  const handlePick = (routine: Routine | null) => {
    setSelectedRoutine(routine);
    if (routine) {
      setSelectedExercises(routine.exercises);
      dispatch(startWorkOut(routine.id));
    } else {
      setSelectedExercises([]);
      dispatch(startWorkOut(''));
    }
  };

  const handleFinish = () => {
    dispatch(finishWorkOut());
    dispatch(
      addHistory(
        routineId,
        workOutSets,
        selectedRoutine ? selectedRoutine.name : '',
      ),
    );
    navigation.goBack();
  };

  const renderRoutines = () => {
    const data = Object.values(routines);
    if (!data.length) {
      return <TextBlock>Программ еще не создали</TextBlock>;
    }
    return (
      <View style={styles.pickerWrap}>
        <Picker
          style={styles.pickerStyle}
          mode="dropdown"
          dropdownIconColor="#fff"
          selectedValue={selectedRoutine}
          onValueChange={value => handlePick(value)}>
          <Picker.Item value={null} label="не выбрано" />
          {data.map(routine => (
            <Picker.Item
              label={routine.name}
              value={routine}
              key={routine.id}
            />
          ))}
        </Picker>
      </View>
    );
  };

  return (
    <View style={{flex: 1, paddingBottom: 5}}>
      <TextBlock>Workout</TextBlock>
      {renderRoutines()}
      <WorkOutExercises exercises={selectedExercises} />
      {workOutSets.length ? (
        <Button onPress={handleFinish}>Завершить тренировку</Button>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  pickerWrap: {
    marginBottom: 26,
    marginTop: 10,
    borderRadius: 20,
    borderColor: 'green',
    borderWidth: 3,
    backgroundColor: '#000',
    height: 75,
    width: 375,
    padding: 10,
    alignSelf: 'center',
  },
  pickerStyle: {
    height: 50,
    width: 350,
    backgroundColor: '#000',
    color: '#fff',
  },
});

export {WorkOutScreen};

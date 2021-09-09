import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {Input, Button, ExerciseListItem, TextBlock} from '../../components';
import {useAppSelector} from '../../hooks/storeHooks';
import {Exercise} from '../../redux/exercises/exercise.types';
import {createRoutine} from '../../redux/routines/routine.actions';
import {routineCreateScreenProp, NavProp} from '../../types/routingTypes';
import {useNavigation} from '@react-navigation/native';

const CreateRoutineScreen = ({route}: routineCreateScreenProp) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [selectedExerc, setSelectedExerc] = useState<Set<string>>(new Set());

  const dispatch = useDispatch();
  const navigation = useNavigation<NavProp>();
  const exercises = useAppSelector(state => state.exercisesState.exercises);

  const onSubmit = () => {
    if (id) {
      //updating
      dispatch(createRoutine(name, [...selectedExerc], id));
    } else {
      dispatch(createRoutine(name, [...selectedExerc]));
    }
    navigation.goBack();
  };

  useEffect(() => {
    if (route.params) {
      const {
        id: oldId,
        name: oldName,
        exercises: oldExercises,
      } = route.params.routine;

      setName(oldName);
      setId(oldId);
      setSelectedExerc(new Set(oldExercises));
    }
  }, [route.params]);

  const renderExercises = () => {
    if (!exercises) {
      return <TextBlock>упражнений нет, нажмите + наверху</TextBlock>;
    }
    const data = Object.values(exercises);
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item}: {item: Exercise}) => (
            <ExerciseListItem
              name={item.name}
              date={item.lastDate}
              selected={selectedExerc.has(item.id)}
              onPress={() => {
                if (selectedExerc.has(item.id)) {
                  setSelectedExerc(
                    prev => new Set([...prev].filter(n => n !== item.id)),
                  );
                } else {
                  setSelectedExerc(prev => new Set(prev.add(item.id)));
                }
              }}
            />
          )}
        />
      </View>
    );
  };

  return (
    <View style={{flex:1}}>
      <Input
        label="enter name"
        value={name}
        placeholder="dips"
        onChangeText={setName}
      />
      {renderExercises()}
      <Button onPress={onSubmit}>OK</Button>
    </View>
  );
};

export {CreateRoutineScreen};

import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {startWorkOut, finishWorkOut} from '../../redux/workout/workout.actions';
import {
  TextBlock,
  WorkOutExercises,
  Button,
  Modal,
  WorkOutAddExercise,
} from '../../components';
import {useAppSelector} from '../../hooks/storeHooks';
import {Routine} from '../../redux/routines/routine.types';
import {useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/core';
import {NavProp} from '../../types/routingTypes';
import {addHistory} from '../../redux/history/history.actions';
import {updateRoutine} from '../../redux/routines/routine.actions';
import {useTheme} from '../../hooks/useTheme';
import {Theme} from '../../themes/';
import {useTranslation} from 'react-i18next';
import {playASound} from '../../helpers';
import {updateExercises} from '../../redux/exercises/exercise.actions';

type Props = {
  navigation: NavProp;
};

const WorkOutScreen = ({navigation}: Props) => {
  const routines = useAppSelector(state => state.routinesState.routines);
  const [modal, setModal] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState<null | Routine>(null);
  const [selectedExercises, setSelectedExercises] = useState<string[]>([]);
  const {sets: workOutSets, routineId} = useAppSelector(
    state => state.workOutState,
  );

  const dispatch = useDispatch();

  const addExercise = (id: string) => {
    setSelectedExercises([...selectedExercises, id]);
  };

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
    dispatch(
      addHistory(
        routineId,
        workOutSets,
        selectedRoutine ? selectedRoutine.name : '',
      ),
    );
    if (selectedRoutine) {
      dispatch(updateRoutine(selectedRoutine));
    }
    dispatch(updateExercises(workOutSets));
    dispatch(finishWorkOut());

    playASound.onWorkOutSubmit();
    navigation.navigate('home');
  };

  const [theme] = useTheme();
  const styles = style(theme);
  const {t} = useTranslation();

  const renderRoutines = () => {
    const data = Object.values(routines);
    if (!data.length) {
      return <TextBlock>{t('No routines created')}</TextBlock>;
    }
    return (
      <View style={styles.pickerWrap}>
        <Picker
          style={styles.pickerStyle}
          mode="dropdown"
          dropdownIconColor={styles.pickerStyle.color}
          selectedValue={selectedRoutine}
          onValueChange={value => handlePick(value)}>
          <Picker.Item value={null} label={t('not chosen')} />
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

  useFocusEffect(
    React.useCallback(() => {
      navigation.addListener('beforeRemove', e => {
        if (workOutSets.length) {
          e.preventDefault();
          setModal(true);
          return;
        }

        playASound.resetScore();
      });
    }, [navigation, workOutSets.length]),
  );

  return (
    <ScrollView style={{flex: 1, paddingBottom: 15}}>
      <Text style={styles.textStyle}> {t('Chose routine')}:</Text>
      {renderRoutines()}
      <Text style={styles.textStyle}> {t('or add exercise')}:</Text>
      <WorkOutAddExercise onSelect={addExercise} />
      <WorkOutExercises exercises={selectedExercises} />
      {workOutSets.length ? (
        <View style={{marginTop: 24}}>
          <Button onPress={handleFinish}>{t('End workout')}</Button>
        </View>
      ) : null}
      <Modal
        text="You did not finish your workout, all progress will be lost, you sure  to leave?"
        visible={modal}
        onDecline={() => setModal(!modal)}
        onSuccess={() => {
          dispatch(finishWorkOut());
          navigation.navigate('home');
        }}
      />
    </ScrollView>
  );
};

const style = (theme: Theme) =>
  StyleSheet.create({
    pickerWrap: {
      marginBottom: 26,
      marginTop: 10,
      marginHorizontal: 20,
      borderRadius: 20,
      borderColor: 'green',
      borderWidth: 3,
      backgroundColor: theme.bgcSecondary,
      height: 75,
      width: '90%',
      paddingVertical: 10,
      alignSelf: 'center',
      overflow: 'hidden',
    },
    pickerStyle: {
      height: 50,
      width: '100%',
      backgroundColor: theme.bgcSecondary,
      color: theme.textColorMain,
    },
    textStyle: {
      color: theme.textColorMain,
      textAlign: 'center',
      fontSize: 20,
    },
  });

export {WorkOutScreen};

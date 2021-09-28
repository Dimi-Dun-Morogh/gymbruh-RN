import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {WorkOutSet, WorkOutSetHistoryItem} from '..';
import {generateId} from '../../helpers';
import {useAppSelector} from '../../hooks/storeHooks';
import {useTheme} from '../../hooks/useTheme';

import {Exercise} from '../../redux/exercises/exercise.types';
import {addNewSet, deleteSet} from '../../redux/workout/workout.actions';
import {Theme} from '../../themes';
import {format} from 'date-fns';
import {playASound} from '../../helpers';

type Props = {
  exercise: Exercise;
};

const WorkOutExerciseItem = ({exercise}: Props) => {
  const allSets = useAppSelector(state => state.workOutState.sets);
  const doneSets = allSets.filter(set => set.exerciseId === exercise.id);
  const dispatch = useDispatch();

  const [theme] = useTheme();
  const styles = style(theme);

  const onSetSubmit = (reps: string, weight: string) => {
    const newSet = {
      reps: Number(reps),
      weight: Number(weight),
      id: generateId.id(),
      exerciseId: exercise.id,
      exerciseName: exercise.name,
      date: format(new Date(), 'dd/MM/yyyy H:mm '),
    };
    dispatch(addNewSet(newSet));

    playASound.onSetSubmit();
  };

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>{exercise.name}</Text>
      <View style={styles.crossLine} />
      <View>
        <View>
          {doneSets.map((item, index) => (
            <WorkOutSetHistoryItem
              key={item.id}
              set={item}
              number={index + 1}
              onDelete={id => dispatch(deleteSet(id))}
            />
          ))}
        </View>
        <View style={styles.crossLine} />
        <WorkOutSet onSetSubmit={(reps, weight) => onSetSubmit(reps, weight)} />
      </View>
    </View>
  );
};

const style = (theme: Theme) =>
  StyleSheet.create({
    containerStyle: {
      backgroundColor: theme.bgcSecondary,
      borderColor: 'green',
      borderStyle: 'solid',
      borderWidth: 2,
      borderRadius: 10,
      margin: 5,
      paddingVertical: 5,
    },
    textStyle: {
      color: theme.textColorMain,
      fontSize: 16,
      paddingHorizontal: 20,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
    },

    crossLine: {
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderColor: 'green',
      paddingTop: 5,
    },
  });

export {WorkOutExerciseItem};

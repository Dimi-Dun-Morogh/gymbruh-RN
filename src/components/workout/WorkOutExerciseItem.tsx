import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {WorkOutSet, WorkOutSetHistoryItem} from '..';
import {generateId} from '../../helpers';
import {useAppSelector} from '../../hooks/storeHooks';
import {Exercise} from '../../redux/exercises/exercise.types';
import {addNewSet, deleteSet} from '../../redux/workout/workout.actions';

type Props = {
  exercise: Exercise;
};

const WorkOutExerciseItem = ({exercise}: Props) => {
  const allSets = useAppSelector(state => state.workOutState.sets);
  const doneSets = allSets.filter(set => set.exerciseId === exercise.id);
  const dispatch = useDispatch();

  const onSetSubmit = (reps: string, weight: string) => {
    dispatch(
      addNewSet({
        reps,
        weight,
        id: generateId.id(),
        exerciseId: exercise.id,
        date: Number(new Date()),
      }),
    );
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

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'black',
    borderColor: 'green',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    paddingVertical: 5,
  },
  textStyle: {
    color: '#fff',
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

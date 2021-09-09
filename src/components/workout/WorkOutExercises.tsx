import React from 'react';
import {View, ScrollView} from 'react-native';
import {TextBlock, WorkOutExerciseItem} from '..';
import {useAppSelector} from '../../hooks/storeHooks';

type Props = {
  exercises: string[] | [];
};

const WorkOutExercises = ({exercises}: Props) => {
  const allExercises = useAppSelector(state => state.exercisesState.exercises);
  if (!exercises.length) {
    console.log('hi');
    return null;
  }
  const selectedExercises = exercises.map(id => allExercises[id]);
  return (
    <ScrollView style={{flex: 1}}>
      {selectedExercises.map(item => (
        <WorkOutExerciseItem key={item.id} exercise={item} />
      ))}
    </ScrollView>
  );
};

export {WorkOutExercises};

import React from 'react';
import {ScrollView} from 'react-native';
import {WorkOutExerciseItem} from '..';
import {useAppSelector} from '../../hooks/storeHooks';

type Props = {
  exercises: string[] | [];
};

const WorkOutExercises = ({exercises}: Props) => {
  const allExercises = useAppSelector(state => state.exercisesState.exercises);
  if (!exercises.length) {
    return null;
  }
  const selectedExercises = exercises.map(id => allExercises[id]);
  return (
    <ScrollView style={{}}>
      {selectedExercises.map(item => (
        <WorkOutExerciseItem key={item.id} exercise={item} />
      ))}
    </ScrollView>
  );
};

export {WorkOutExercises};

import React from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from '../../hooks/storeHooks';

const ExercisesScreen = () => {
  const state1 = useAppSelector(state => state.exercisesState);
  console.log(state1, 'exerciseScreen');
  return (
    <View>
      <Text>Exercises</Text>
    </View>
  );
};

export {ExercisesScreen};

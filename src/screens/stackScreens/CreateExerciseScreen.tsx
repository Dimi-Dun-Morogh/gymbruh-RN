import React from 'react';
import {View} from 'react-native';
import {ExerciseCreateForm} from '../../components';

const CreateExerciseScreen = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        marginBottom: 40,
        flex: 1,
      }}>
      <ExerciseCreateForm />
    </View>
  );
};

export {CreateExerciseScreen};

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ExerciseCreateForm} from '../../components';

const CreateExerciseScreen = () => {
  return (
    <View style={styles.containerStyle}>
      <ExerciseCreateForm />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    marginBottom: 40,
    flex: 1,
  },
});

export {CreateExerciseScreen};

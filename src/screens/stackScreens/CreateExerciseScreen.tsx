import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {ExerciseCreateForm} from '../../components';
import {Exercise} from '../../redux/exercises/exercise.types';
import {exercCreateScreenProp} from '../../types/routingTypes';

const CreateExerciseScreen = ({route}: exercCreateScreenProp) => {
  const [exercise, setExercise] = useState<null | Exercise>(null);

  useEffect(() => {
    if (route.params?.exercise) {
      setExercise(route.params?.exercise);
    }
  }, [route.params?.exercise]);
  return (
    <View style={styles.containerStyle}>
      <ExerciseCreateForm exercise={exercise} />
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

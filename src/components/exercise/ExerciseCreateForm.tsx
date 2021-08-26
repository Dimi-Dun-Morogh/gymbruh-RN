import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {createExercise} from '../../redux/exercises/exercise.actions';

import {Button, Input} from '../index';

const ExerciseCreateForm = () => {
  const [exerName, setExercName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onSubmit = () => {
    dispatch(createExercise(exerName));
    navigation.goBack();
  };

  return (
    <View style={styles.containerStyle}>
      <Input
        value={exerName}
        onChangeText={text => setExercName(text)}
        placeholder="жим лёжа"
        label="название упражнения"
      />
      <Button onPress={onSubmit}>создать</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {},
});

export {ExerciseCreateForm};

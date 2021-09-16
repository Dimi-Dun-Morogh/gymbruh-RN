import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  createExercise,
  editExercise,
  deleteExercise,
} from '../../redux/exercises/exercise.actions';
import {Exercise} from '../../redux/exercises/exercise.types';
import {NavProp} from '../../types/routingTypes';
import {Button, Input, IconButton as HeaderButton, Modal} from '../index';

type Props = {
  exercise: Exercise | null;
};

const ExerciseCreateForm = ({exercise}: Props) => {
  const [exerName, setExercName] = useState('');
  const [editing, setEditing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation<NavProp>();

  useEffect(() => {
    if (exercise) {
      setExercName(exercise.name);
      setEditing(true);
      navigation.setOptions({
        title: exercise.name,
        headerRight: () => {
          return (
            <HeaderButton
              size={35}
              iconName="delete-forever"
              color="red"
              onPress={() => setModalVisible(true)}
            />
          );
        },
      });
    }
  }, [exercise, navigation]);

  const onSubmit = () => {
    if (editing) {
      const newExerc = {
        ...exercise!,
        name: exerName,
      };
      dispatch(editExercise(newExerc));
    } else {
      dispatch(createExercise(exerName));
    }
    navigation.goBack();
  };

  const handleDeletion = () => {
    dispatch(deleteExercise(exercise?.id!));
    navigation.navigate('exercises');
  };

  return (
    <View style={styles.containerStyle}>
      <Modal
        visible={modalVisible}
        onDecline={() => setModalVisible(false)}
        onSuccess={() => handleDeletion()}
      />
      <Input
        value={exerName}
        onChangeText={text => setExercName(text)}
        placeholder="жим лёжа"
        label="название упражнения"
      />
      <Button onPress={onSubmit}>
        {exercise ? 'редактировать' : 'создать'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {},
});

export {ExerciseCreateForm};

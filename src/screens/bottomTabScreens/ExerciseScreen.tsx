import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import {ExerciseListItem, TextBlock} from '../../components';
import {useAppSelector} from '../../hooks/storeHooks';
import {Exercise} from '../../redux/exercises/exercise.types';
import {NavProp} from '../../types/routingTypes';

const ExercisesScreen = () => {
  const navigation = useNavigation<NavProp>();
  const exercises = useAppSelector(state => state.exercisesState.exercises);

  const renderExercises = () => {
    const data = Object.values(exercises);
    if (!data.length) {
      return <TextBlock>упражнений нет, нажмите + наверху</TextBlock>;
    }
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({item}: {item: Exercise}) => (
            <ExerciseListItem
              name={item.name}
              date={item.lastDate}
              onPress={() =>
                navigation.navigate('exercDetail', {exerciseId: item.id})
              }
            />
          )}
        />
      </View>
    );
  };

  return <View style={styles.containerStyle}>{renderExercises()}</View>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#ffff',
    fontSize: 28,
    textAlign: 'center',
  },
  containerStyle: {
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 5,
  },
});

export {ExercisesScreen};

import React from 'react';
import {FlatList, View} from 'react-native';
import {ExerciseListItem, TextBlock} from '../../components';
import {routineCreateScreenProp, NavProp} from '../../types/routingTypes';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {Exercise} from '../../redux/exercises/exercise.types';
import {useAppSelector} from '../../hooks/storeHooks';

const RoutineDetailsScreen = ({route}: routineCreateScreenProp) => {
  const {id} = route.params!.routine;
  const exerciseState = useAppSelector(state => state.exercisesState.exercises);
  const {name, exercises, allCount, lastDate} = useAppSelector(
    state => state.routinesState.routines[id],
  );
  const navigation = useNavigation<NavProp>();

  const renderExercises = () => {
    if (!exerciseState || !exercises.length) {
      return null;
    }
    const data = exercises.map(nId => {
      return exerciseState[nId];
    });

    return (
      <FlatList
        data={data}
        renderItem={({item}: {item: Exercise}) => (
          <ExerciseListItem
            name={item.name}
            date={item?.lastDate}
            onPress={() =>
              navigation.navigate('exercDetail', {exerciseId: item.id})
            }
          />
        )}
      />
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        navigation.setOptions({title: name});
      });

      return () => unsubscribe();
    }, [name, navigation]),
  );

  return (
    <View>
      <TextBlock>{name}</TextBlock>
      <TextBlock>Выполнено раз - {allCount}</TextBlock>
      <TextBlock>
        Дата последнего выполнения -{' '}
        {lastDate ? new Date().toLocaleDateString() : '-'}
      </TextBlock>
      {renderExercises()}
    </View>
  );
};

export {RoutineDetailsScreen};

import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextBlock, IconButton as HeaderButton} from '../../components/';
import {useAppSelector} from '../../hooks/storeHooks';
import {exercDetailScreenProp} from '../../types/routingTypes';

const ExerciseDetailScreen = ({route, navigation}: exercDetailScreenProp) => {
  const id = route.params!.exerciseId;
  const exercise = useAppSelector(state => state.exercisesState.exercises[id]);
  const {
    allSets,
    lastDate,
    lastReps,
    lastWeight,
    name,
    recordReps,
    recordWeight,
  } = exercise;

  useEffect(() => {
    navigation.setOptions({
      title: name,
      headerRight: ({tintColor}) => {
        return (
          <HeaderButton
            size={35}
            iconName="edit"
            color={tintColor}
            onPress={() =>
              navigation.navigate('exercCreate', {
                exercise: exercise,
              })
            }
          />
        );
      },
    });
  }, [navigation, name, exercise]);

  return (
    <View style={styles.container}>
      <TextBlock>{name}</TextBlock>
      <TextBlock>количество всех подходов: {allSets || '-'}</TextBlock>
      <TextBlock>последнее выполнение: {lastDate || '-'} </TextBlock>
      <TextBlock>
        последний подход:{'\n'} повторений - {lastReps} вес -{' '}
        {lastWeight || '-'}
      </TextBlock>
      <TextBlock>
        рекорд повторений:{'\n'} повторений - {recordReps.reps} вес -
        {recordReps.weight || '-'} {'\n'}дата - {recordReps.date || '-'}
      </TextBlock>
      <TextBlock>
        рекорд веса:{'\n'} вес - {recordWeight.weight} повторений -{' '}
        {recordWeight.reps} {'\n'}дата - {recordWeight.date || '-'}
      </TextBlock>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export {ExerciseDetailScreen};

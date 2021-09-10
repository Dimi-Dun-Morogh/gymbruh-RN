import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextBlock} from '../../components/';
import {exercDetailScreenProp} from '../../types/routingTypes';

const ExerciseDetailScreen = ({route}: exercDetailScreenProp) => {
  const {
    allSets,
    lastDate,
    lastReps,
    lastWeight,
    name,
    recordReps,
    recordWeight,
  } = route.params!.exercise;

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

import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {WorkOutSet} from '../../redux/workout/workout.types';

type Props = {
  set: WorkOutSet;
  number: number;
};

const HistoryListItem = ({set, number}: Props) => {
  const {exerciseName, date, reps, weight} = set;

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>
        #{number + 1}
        {'    '}
        {new Date(date).toLocaleString()}
      </Text>
      <View style={styles.crossLine} />
      <Text style={styles.textNameStyle}>{exerciseName}</Text>
      <View style={styles.crossLine} />
      <Text style={styles.textStyleReps}>
        повторений - {reps}
        {'    '} {weight ? `вес - ${weight}кг` : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#000',
    padding: 15,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
  },
  textStyle: {
    color: 'yellow',
    fontSize: 25,
  },
  textStyleReps: {
    color: '#01F814',
    fontSize: 25,
  },
  textNameStyle: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  crossLine: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'green',
    paddingTop: 10,
  },
});

export {HistoryListItem};

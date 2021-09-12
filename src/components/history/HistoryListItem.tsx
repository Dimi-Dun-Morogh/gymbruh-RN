import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {WorkOutSet} from '../../redux/workout/workout.types';

type Props = {
  set: WorkOutSet;
  number: number;
  preview?: boolean;
};

const HistoryListItem = ({set, number, preview}: Props) => {
  const {exerciseName, date, reps, weight} = set;

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
      fontSize: preview ? 15 : 25,
    },
    textStyleReps: {
      color: '#01F814',
      fontSize: preview ? 15 : 25,
    },
    textNameStyle: {
      textTransform: 'uppercase',
      color: '#fff',
      fontSize: preview ? 15 : 25,
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

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>
        #{number}
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

export {HistoryListItem};

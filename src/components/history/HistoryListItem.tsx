import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {WorkOutSet} from '../../redux/workout/workout.types';
import {Theme} from '../../themes/';

type Props = {
  set: WorkOutSet;
  number: number;
  preview?: boolean;
};

const HistoryListItem = ({set, number, preview}: Props) => {
  const {exerciseName, date, reps, weight} = set;

  const [theme] = useTheme();
  const styles = style(theme, preview);

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

const style = (theme: Theme, preview: boolean = false) =>
  StyleSheet.create({
    containerStyle: {
      backgroundColor: theme.bgcSecondary,
      padding: 15,
      borderColor: 'green',
      borderWidth: 1,
      borderRadius: 15,
      marginBottom: 10,
    },
    textStyle: {
      color: theme.textColorSecond,
      fontSize: preview ? 15 : 25,
    },
    textStyleReps: {
      color: theme.textColorThird,
      fontSize: preview ? 15 : 25,
    },
    textNameStyle: {
      textTransform: 'uppercase',
      color: theme.textColorMain,
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

export {HistoryListItem};

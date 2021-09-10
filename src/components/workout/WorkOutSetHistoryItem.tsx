import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IconButton} from '..';
import {WorkOutSet} from '../../redux/workout/workout.types';

type Props = {
  set: WorkOutSet;
  onDelete: (id: string) => void;
  number: number;
};

const WorkOutSetHistoryItem = ({
  set: {reps, weight, id, date},
  onDelete,
  number,
}: Props) => {
  return (
    <View style={styles.containerStyle}>
      <IconButton
        color="red"
        iconName="delete-forever"
        onPress={() => onDelete(id)}
        size={33}
      />

      <Text style={styles.textStyle}>
        {' '}
        {number})повторений - {reps} вес - {weight}
      </Text>
      <Text style={styles.dateStyle}>
        {new Date(date).toLocaleTimeString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  dateStyle: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 15,
  },
});

export {WorkOutSetHistoryItem};

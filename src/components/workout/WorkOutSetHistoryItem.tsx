import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IconButton} from '..';

type Props = {
  reps: string;
  weight: string;
  number: number;
};

const WorkOutSetHistoryItem = ({reps, weight, number}: Props) => {
  return (
    <View style={styles.containerStyle}>
      <IconButton
        color="red"
        iconName="delete-forever"
        onPress={() => null}
        size={33}
      />

      <Text style={styles.textStyle}>
        {' '}
        {number})повторений - {reps} вес - {weight}
      </Text>
      <Text style={styles.dateStyle}>-{new Date().toLocaleTimeString()}</Text>
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

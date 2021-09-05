import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

type Props = {
  name: string;
  date: string | null;
  onPress: () => void;
};

const ExerciseListItem = ({name, date, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.containerStyle} onPress={onPress}>
      <Text style={styles.textName}>{name}</Text>
      <View style={styles.crossLine} />
      <Text style={styles.textDate}>
        последний раз - {date ? date : 'еще не делал'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'black',
    borderColor: 'green',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    paddingVertical: 5,
  },
  textName: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  textDate: {
    color: '#fff',
    paddingHorizontal: 20,
  },
  crossLine: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'green',
    paddingTop: 5,
  },
});

export {ExerciseListItem};

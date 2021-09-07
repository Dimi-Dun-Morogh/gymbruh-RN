import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

type Props = {
  name: string;
  date: string | null;
  onPress: () => void;
  selected?: boolean;
};

const ExerciseListItem = ({name, date, onPress, selected}: Props) => {
  const isSelected = () => {
    if (selected) {
      return {...styles, ...selectedStyles};
    } else {
      return styles;
    }
  };

  return (
    <TouchableOpacity style={isSelected().containerStyle} onPress={onPress}>
      <Text style={isSelected().textName}>{name}</Text>
      <View style={isSelected().crossLine} />
      <Text style={isSelected().textDate}>
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

const selectedStyles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'green',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    paddingVertical: 5,
  },
  crossLine: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'red',
    paddingTop: 5,
  },
});

export {ExerciseListItem};

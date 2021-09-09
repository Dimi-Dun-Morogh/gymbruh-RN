import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

type Props = {
  label: string;
  value: string | number;
  onValueChange: (text: string) => void;
};

const WorkOutSetInput = ({label, value, onValueChange}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.textStyle}>{label}: </Text>
      <TextInput
        style={styles.inputStyle}
        value={'' + value}
        onChangeText={onValueChange}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#fff',
    fontSize: 24,
  },
  inputStyle: {
    height: 50,
    width: 55,
    fontSize: 28,
    paddingVertical: 1,
    backgroundColor: '#fff',
    borderColor: 'green',
    borderWidth: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 7,
  },
});

export {WorkOutSetInput};

import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

type Prop = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  password?: boolean;
};
const Input = ({label, value, onChangeText, placeholder, password}: Prop) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        style={styles.inputStyle}
        value={value}
        autoCorrect={false}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={password}
        placeholderTextColor="gray"
        autoCapitalize={'none'}
      />
    </View>
  );
};

export {Input};

const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    color: '#fff',
    padding: 10,
    borderColor: '#8a63f2',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 24,
    backgroundColor: '#1f222b',
  },
  labelStyle: {
    fontSize: 20,
    color: '#fff',
    paddingBottom: 10,
  },
  containerStyle: {
    marginBottom: 10,
    marginHorizontal: 20,
  },
});

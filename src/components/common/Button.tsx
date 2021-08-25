import React, {ReactChild} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type ButtonProps = {
  children: ReactChild;
  onPress: () => void;
};

const Button = ({children, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#8a63f2',
    borderRadius: 10,
    marginHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  textStyle: {
    color: '#ffff',
    fontSize: 19,
    fontWeight: 'bold',
    letterSpacing: 1,
    padding: 10,
    textAlign: 'center',
  },
});

export {Button};

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  children: React.ReactChild | React.ReactChild[];
};

const TextBlock = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 7,
    paddingBottom: 22,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'green',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TextBlock;

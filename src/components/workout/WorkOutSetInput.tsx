import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {Theme} from '../../themes';

type Props = {
  label: string;
  value: string | number;
  onValueChange: (text: string) => void;
};

const WorkOutSetInput = ({label, value, onValueChange}: Props) => {
  const [theme] = useTheme();
  const styles = style(theme);

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

const style = (theme: Theme) =>
  StyleSheet.create({
    textStyle: {
      color: theme.textColorMain,
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

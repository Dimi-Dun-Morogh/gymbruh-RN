import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';

import {useTheme} from '../../hooks/useTheme';
import {Theme} from '../../themes';

type Prop = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  password?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  password,
  containerStyle,
}: Prop) => {
  const [theme] = useTheme();
  const styles = style(theme);

  return (
    <View style={[styles.containerStyle, containerStyle]}>
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
        accessibilityLabel={'enter ' + label}
        accessibilityValue={{text: value}}
      />
    </View>
  );
};

export {Input};

const style = (theme: Theme) =>
  StyleSheet.create({
    inputStyle: {
      width: '100%',
      color: theme.textColorMain,
      padding: 10,
      borderColor: theme.borderColorInput,
      borderStyle: 'solid',
      borderRadius: 10,
      borderWidth: 3,
      fontSize: 24,
      backgroundColor: theme.bgcInput,
    },
    labelStyle: {
      fontSize: 20,
      color: theme.textColorMain,
      paddingBottom: 10,
    },
    containerStyle: {
      marginBottom: 10,
      marginHorizontal: 20,
    },
  });

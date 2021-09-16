import React, {ReactChild} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useAppSelector} from '../../hooks/storeHooks';
import {Theme, themePicker} from '../../themes/';

type ButtonProps = {
  children: ReactChild;
  onPress: () => void;
};

const Button = ({children, onPress}: ButtonProps) => {
  const darkTheme = useAppSelector(state => state.appSettingsState.darkTheme);
  const theme = themePicker(darkTheme);
  const styles = style(theme);
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const style = (theme: Theme) =>
  StyleSheet.create({
    buttonStyle: {
      backgroundColor: theme.bgcMain,
      borderRadius: 10,
      marginHorizontal: 20,
      borderColor: 'black',
      borderWidth: 1,
      borderStyle: 'solid',
    },
    textStyle: {
      color: theme.textColorMain,
      fontSize: 19,
      fontWeight: 'bold',
      letterSpacing: 1,
      padding: 10,
      textAlign: 'center',
    },
  });

export {Button};

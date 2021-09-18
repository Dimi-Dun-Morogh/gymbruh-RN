import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {Theme} from '../../themes';

type Props = {
  children: React.ReactNode;
};

const TextBlock = ({children}: Props) => {
  const [theme] = useTheme();
  const styles = style(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const style = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.bgcSecondary,
      padding: 7,
      paddingBottom: 22,
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderColor: 'green',
    },
    text: {
      color: theme.textColorMain,
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export {TextBlock};

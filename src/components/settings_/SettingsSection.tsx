import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {Theme} from '../../themes';

type Props = {
  children: React.ReactNode;
  label?: string;
};

const SettingsSection = ({children, label}: Props) => {
  const [theme] = useTheme();
  const styles = style(theme);
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.textStyle}>{label}</Text>
      {children}
    </View>
  );
};

const style = (theme: Theme) =>
  StyleSheet.create({
    settingsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 15,
      paddingBottom: 14,
      paddingHorizontal: 15,
      borderBottomWidth: 2,
      borderColor: 'orange',
    },
    textStyle: {
      color: theme.textColorMain,
      fontWeight: 'bold',
      fontSize: 20,
    },
  });

export {SettingsSection};

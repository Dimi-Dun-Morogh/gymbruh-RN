import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Theme} from '../../themes';
import {useTheme} from '../../hooks/useTheme';

type Props = {
  data: readonly string[] | string[];
  selectedValue: string;
  onValueChange: (val: string) => void;
};

const SettingsPicker = ({data, selectedValue, onValueChange}: Props) => {
  const [theme] = useTheme();
  const styles = style(theme);
  return (
    <View style={styles.pickerContainer}>
      <Picker
        style={styles.pickerStyle}
        mode="dropdown"
        dropdownIconColor={theme.textColorMain}
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        {data.map(item => (
          <Picker.Item
            label={item}
            value={item}
            key={item}
            style={styles.pickerItemStyle}
          />
        ))}
      </Picker>
    </View>
  );
};

const style = (theme: Theme) =>
  StyleSheet.create({
    pickerContainer: {
      borderColor: 'green',
      borderWidth: 2,
      borderRadius: 15,
      overflow: 'hidden',
    },
    pickerStyle: {
      width: 110,
      backgroundColor: theme.bgcSecondary,
      color: theme.textColorMain,
    },
    pickerItemStyle: {
      fontSize: 25,
    },
  });

export {SettingsPicker};

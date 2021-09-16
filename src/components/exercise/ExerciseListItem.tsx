import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {useAppSelector} from '../../hooks/storeHooks';
import {themePicker, Theme} from '../../themes';

type Props = {
  name: string;
  date: string | null;
  onPress: () => void;
  selected?: boolean;
};

const ExerciseListItem = ({name, date, onPress, selected}: Props) => {
  const isDarkTheme = useAppSelector(state => state.appSettingsState.darkTheme);
  const theme = themePicker(isDarkTheme);
  const styles = style(theme);
  const selectedStyles = selectedStyle(theme);

  const isSelected = () => {
    if (selected) {
      return {...styles, ...selectedStyles};
    } else {
      return styles;
    }
  };

  return (
    <TouchableOpacity style={isSelected().containerStyle} onPress={onPress}>
      <Text style={isSelected().textName}>{name}</Text>
      <View style={isSelected().crossLine} />
      <Text style={isSelected().textDate}>
        последний раз - {date ? date : 'еще не делал'}
      </Text>
    </TouchableOpacity>
  );
};

const style = (theme: Theme) =>
  StyleSheet.create({
    containerStyle: {
      backgroundColor: theme.bgcSecondary,
      borderColor: 'green',
      borderStyle: 'solid',
      borderWidth: 2,
      borderRadius: 10,
      margin: 5,
      paddingVertical: 5,
    },
    textName: {
      color: theme.textColorMain,
      fontSize: 16,
      paddingHorizontal: 20,
    },
    textDate: {
      color: theme.textColorMain,
      paddingHorizontal: 20,
    },
    crossLine: {
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderColor: 'green',
      paddingTop: 5,
    },
  });

const selectedStyle = (theme: Theme) =>
  StyleSheet.create({
    containerStyle: {
      backgroundColor: 'green',
      borderColor: theme.selectedBorderColor,
      borderStyle: 'solid',
      borderWidth: 2,
      borderRadius: 10,
      margin: 5,
      paddingVertical: 5,
    },
    crossLine: {
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderColor: 'red',
      paddingTop: 5,
    },
    textName: {
      color: theme.selectedTextColor,
      fontSize: 16,
      paddingHorizontal: 20,
    },
    textDate: {
      color: theme.selectedTextColor,
      paddingHorizontal: 20,
    },
  });

export {ExerciseListItem};

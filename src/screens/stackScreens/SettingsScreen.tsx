import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useAppSelector} from '../../hooks/storeHooks';
import {useDispatch} from 'react-redux';
import {
  setDarkTheme,
  setLanguage,
  setWeight,
} from '../../redux/appSettings/appSettings.actions';
import {useTheme} from '../../hooks/useTheme';
import {Theme} from '../../themes';
import {useTranslation} from 'react-i18next';

const SettingsScreen = () => {
  const {
    languages,
    currentLanguage,
    weightPoints,
    currentWeightPoint,
    darkTheme,
  } = useAppSelector(state => state.appSettingsState);

  const dispatch = useDispatch();
  const {t} = useTranslation();
  const [theme] = useTheme();
  const styles = style(theme);

  const {
    containerStyle,
    textStyle,
    settingsContainer,
    pickerContainer,
    pickerItemStyle,
    pickerStyle,
  } = styles;

  return (
    <View style={containerStyle}>
      <View style={settingsContainer}>
        <Text style={textStyle}>{t('dark theme')}</Text>
        <Switch
          trackColor={{false: '#767577', true: 'green'}}
          thumbColor={darkTheme ? 'orange' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => {
            dispatch(setDarkTheme(!darkTheme));
          }}
          value={darkTheme}
        />
      </View>
      <View style={settingsContainer}>
        <Text style={textStyle}>{t('language')}</Text>
        <View style={pickerContainer}>
          <Picker
            style={pickerStyle}
            mode="dropdown"
            dropdownIconColor={theme.textColorMain}
            selectedValue={currentLanguage}
            onValueChange={value => dispatch(setLanguage(value))}>
            {languages.map(lang => (
              <Picker.Item
                label={lang}
                value={lang}
                style={styles.pickerItemStyle}
                key={lang}
              />
            ))}
          </Picker>
        </View>
      </View>
      <View style={settingsContainer}>
        <Text style={textStyle}>{t('units of measurement')}:</Text>
        <View style={pickerContainer}>
          <Picker
            style={pickerStyle}
            mode="dropdown"
            dropdownIconColor={theme.textColorMain}
            selectedValue={currentWeightPoint}
            onValueChange={value => dispatch(setWeight(value))}>
            {weightPoints.map(weight => (
              <Picker.Item
                label={weight}
                value={weight}
                key={weight}
                style={pickerItemStyle}
              />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
};

const style = (theme: Theme) =>
  StyleSheet.create({
    containerStyle: {
      backgroundColor: theme.bgcSecondary,
      paddingTop: 40,
      flex: 1,
    },
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

export {SettingsScreen};

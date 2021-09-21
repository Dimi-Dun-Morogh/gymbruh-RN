import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useAppSelector} from '../../hooks/storeHooks';
import {useDispatch} from 'react-redux';
import {
  setDarkTheme,
  setLanguage,
  setWeight,
  setSound,
} from '../../redux/appSettings/appSettings.actions';
import {useTheme} from '../../hooks/useTheme';
import {Theme} from '../../themes';
import {useTranslation} from 'react-i18next';
import {
  SettingsPicker,
  SettingsSection,
  SettingsSwitch,
} from '../../components';

const SettingsScreen = () => {
  const {
    languages,
    currentLanguage,
    weightPoints,
    currentWeightPoint,
    darkTheme,
    soundOn,
  } = useAppSelector(state => state.appSettingsState);

  const dispatch = useDispatch();
  const {t} = useTranslation();
  const [theme] = useTheme();
  const styles = style(theme);

  return (
    <View style={styles.containerStyle}>
      <SettingsSection label={t('dark theme')}>
        <SettingsSwitch
          value={darkTheme}
          onValueChange={() => {
            dispatch(setDarkTheme(!darkTheme));
          }}
        />
      </SettingsSection>
      <SettingsSection label={t('language')}>
        <SettingsPicker
          data={languages}
          selectedValue={currentLanguage}
          onValueChange={value => dispatch(setLanguage(value))}
        />
      </SettingsSection>
      <SettingsSection label={t('units of measurement')}>
        <SettingsPicker
          data={weightPoints}
          selectedValue={currentWeightPoint}
          onValueChange={value => dispatch(setWeight(value))}
        />
      </SettingsSection>
      <SettingsSection label={t('sound')}>
        <SettingsSwitch
          value={soundOn}
          onValueChange={() => {
            dispatch(setSound(!soundOn));
          }}
        />
      </SettingsSection>
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
  });

export {SettingsScreen};

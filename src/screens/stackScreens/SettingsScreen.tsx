import React, {useState} from 'react';
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
  Button,
  Modal,
} from '../../components';
import backUpper from '../../helpers/backUpper';

const SettingsScreen = () => {
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState('');

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

  const createBackUp = async () => {
    const success = await backUpper.backUpToDownloads();
    if (success) {
      setModalText(backUpper.getInfoText().BACKUP_CREATE_SUCCESS);
      setModal(true);
    }
  };

  const pickFileBackUp = async () => {
    const success = await backUpper.pickFile();
    if (success) {
      backUpper.setBackUp(success);
    }
  };

  return (
    <View style={styles.containerStyle}>
      <Modal
        topClose
        visible={modal}
        onDecline={() => setModal(false)}
        text={t(modalText) + ' file backUp.gymbruh'}
      />
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
      <SettingsSection label={t('create data backup')}>
        <Button
          onPress={createBackUp}
          icon="add"
          iconSize={45}
          ButtonStyle={{marginHorizontal: 0}}
          TextStyles={{padding: 0}}
        />
      </SettingsSection>
      <SettingsSection label={t('download data backup from device')}>
        <Button
          onPress={pickFileBackUp}
          icon="file-upload"
          iconSize={45}
          ButtonStyle={{marginHorizontal: 0}}
          TextStyles={{padding: 0}}
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

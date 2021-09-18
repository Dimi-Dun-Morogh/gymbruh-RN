import {useNavigation} from '@react-navigation/native';

import React, {useEffect} from 'react';
import {View} from 'react-native';

import {Button, HistoryPreview} from '../../components';
import {useAppSelector} from '../../hooks/storeHooks';
import {NavProp} from '../../types/routingTypes';

import i18n from '../../locales/';
import {useTranslation} from 'react-i18next';

const HomeScreen = () => {
  const navigation = useNavigation<NavProp>();
  const language = useAppSelector(
    state => state.appSettingsState.currentLanguage,
  );

  const {t} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{marginBottom: 65, marginTop: 20}}>
        <HistoryPreview />
        <Button onPress={() => navigation.navigate('history')}>
          {t('history')}
        </Button>
      </View>
      <Button onPress={() => navigation.navigate('workOut')}>
        {t('start workout')}
      </Button>
    </View>
  );
};

export {HomeScreen};

import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {View} from 'react-native';

import {Button, HistoryPreview} from '../../components';

import {NavProp} from '../../types/routingTypes';

import {useTranslation} from 'react-i18next';

const HomeScreen = () => {
  const navigation = useNavigation<NavProp>();

  const {t} = useTranslation();

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

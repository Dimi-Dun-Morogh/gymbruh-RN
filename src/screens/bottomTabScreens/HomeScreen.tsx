import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {View} from 'react-native';

import {Button, HistoryPreview} from '../../components';
import {NavProp} from '../../types/routingTypes';

const HomeScreen = () => {
  const navigation = useNavigation<NavProp>();
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
      }}>
      <View style={{marginBottom: 65, marginTop: 20}}>
        <HistoryPreview />
        <Button onPress={() => navigation.navigate('history')}>История</Button>
      </View>
      <Button onPress={() => navigation.navigate('workOut')}>
        Начать тренировку
      </Button>
    </View>
  );
};

export {HomeScreen};

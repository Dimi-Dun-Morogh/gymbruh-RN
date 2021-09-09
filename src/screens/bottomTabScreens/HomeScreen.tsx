import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {View} from 'react-native';

import {Button} from '../../components';
import {NavProp} from '../../types/routingTypes';

const HomeScreen = () => {
  const navigation = useNavigation<NavProp>();
  return (
    <View>
      <Button onPress={() => navigation.navigate('history')}>История</Button>
      <Button onPress={() => navigation.navigate('workOut')}>
        Начать тренировку
      </Button>
    </View>
  );
};

export {HomeScreen};

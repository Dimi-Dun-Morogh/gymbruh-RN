import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {View, Text} from 'react-native';

import {Button} from '../../components';
import {NavProp} from '../../types/routingTypes';

const HomeScreen = () => {
  const navigation = useNavigation<NavProp>();
  return (
    <View>
      <Text>main</Text>
      <Button onPress={() => navigation.navigate('history')}>История</Button>
    </View>
  );
};

export {HomeScreen};

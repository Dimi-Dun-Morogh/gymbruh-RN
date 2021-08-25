import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackScreenList} from '..';
import {Button} from '../../components/common';

type Prop = NativeStackNavigationProp<RootStackScreenList, 'history'>;

const HomeScreen = () => {
  const navigation = useNavigation<Prop>();
  return (
    <View>
      <Text>main</Text>
      <Button onPress={() => navigation.navigate('history')}>История</Button>
    </View>
  );
};

export {HomeScreen};

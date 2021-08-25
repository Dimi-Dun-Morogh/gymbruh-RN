import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HistoryScreen = () => {
  return (
    <View>
      <Text>История</Text>
      <Icon name="home" size={30} color="#900" />
    </View>
  );
};

export {HistoryScreen};

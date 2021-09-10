import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HistoryList} from '../../components';
import {useAppSelector} from '../../hooks/storeHooks';
import {WorkOutSet} from '../../redux/workout/workout.types';

const HistoryScreen = () => {
  const history = useAppSelector(state => state.historyState.items);
  const historyExerc = history.reduce((acc, item) => {
    return [...acc, ...item.sets];
  }, [] as WorkOutSet[]);

  return (
    <View>
      <Text>История</Text>
      <HistoryList historyItems={historyExerc} />
    </View>
  );
};

const styles = StyleSheet.create({});

export {HistoryScreen};

import React from 'react';
import {View} from 'react-native';
import {HistoryList} from '../../components';
import {useAppSelector} from '../../hooks/storeHooks';
import {WorkOutSet} from '../../redux/workout/workout.types';

const HistoryScreen = () => {
  const history = useAppSelector(state => state.historyState.items);
  const historyExerc = history
    .reduce((acc, item) => {
      return [...acc, ...item.sets];
    }, [] as WorkOutSet[])
    .reverse();
  console.log(history.length);

  return (
    <View style={{flex: 1}}>
      <HistoryList historyItems={historyExerc} />
    </View>
  );
};

export {HistoryScreen};

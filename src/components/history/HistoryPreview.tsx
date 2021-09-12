import React from 'react';
import {View} from 'react-native';
import {HistoryList} from '..';
import {useAppSelector} from '../../hooks/storeHooks';
import {WorkOutSet} from '../../redux/workout/workout.types';
const HistoryPreview = () => {
  const history = useAppSelector(state => state.historyState.items);
  const historyExerc = history
    .reduce((acc, item) => {
      return [...acc, ...item.sets];
    }, [] as WorkOutSet[])
    .reverse();
  return (
    <View>
      <HistoryList preview historyItems={historyExerc} />
    </View>
  );
};

export {HistoryPreview};

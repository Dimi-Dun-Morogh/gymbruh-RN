import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {HistoryListItem, HistoryPieChart} from '..';
import {useAppSelector} from '../../hooks/storeHooks';
import {WorkOutSet} from '../../redux/workout/workout.types';

type Props = {
  historyItems: WorkOutSet[];
  preview?: boolean;
};

const HistoryList = ({historyItems, preview}: Props) => {
  const exercises = useAppSelector(state => state.exercisesState.exercises);
  const data = (() => {
    const validIds = historyItems.filter(set => exercises[set.exerciseId]);
    return validIds;
  })();

  if (!historyItems.length || !data.length) {
    return null;
  }

  return (
    <FlatList
      ListHeaderComponent={preview ? null : HistoryPieChart}
      data={data}
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={({item, index}) => {
        if (preview && index < 2) {
          return (
            <HistoryListItem set={item} number={data.length - index} preview />
          );
        } else if (!preview) {
          return <HistoryListItem set={item} number={data.length - index} />;
        } else {
          return null;
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    // flexDirection: 'column-reverse',
  },
});

export {HistoryList};

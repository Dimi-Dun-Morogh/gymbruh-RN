import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {HistoryListItem} from '..';
import {WorkOutSet} from '../../redux/workout/workout.types';

type Props = {
  historyItems: WorkOutSet[];
  preview?: boolean;
};

const HistoryList = ({historyItems, preview}: Props) => {
  if (!historyItems.length) {
    return null;
  }
  return (
    <FlatList
      data={historyItems}
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={({item, index}) => {
        if (preview && index < 2) {
          return (
            <HistoryListItem
              set={item}
              number={historyItems.length - index}
              preview
            />
          );
        } else if (!preview) {
          return (
            <HistoryListItem set={item} number={historyItems.length - index} />
          );
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

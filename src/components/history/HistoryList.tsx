import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {HistoryListItem} from '..';
import {WorkOutSet} from '../../redux/workout/workout.types';

type Props = {
  historyItems: WorkOutSet[];
};

const HistoryList = ({historyItems}: Props) => {
  if (!historyItems.length) {
    return null;
  }
  return (
    <FlatList
      data={historyItems}
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={({item, index}) => (
        <HistoryListItem set={item} number={index} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexDirection: 'column-reverse',
    paddingBottom: 10,
  },
});

export {HistoryList};

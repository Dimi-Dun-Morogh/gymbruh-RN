import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {useAppSelector} from '../../hooks/storeHooks';

import {pieUtils} from '../../helpers';
import {useTheme} from '../../hooks/useTheme';
import {useTranslation} from 'react-i18next';

const HistoryPieChart = () => {
  const exercises = useAppSelector(state => state.exercisesState.exercises);
  const data = Object.values(exercises);
  const [theme] = useTheme();
  const {t} = useTranslation();
  if (!data.length) {
    return null;
  }

  const PieData = (() => {
    const colors = pieUtils.getColors(data.length);
    return {
      series: data.map(item => item.allSets),
      colors,
      itemsWithColors: data.reduce((acc, exercise, index) => {
        return [
          ...acc,
          {
            id: exercise.id,
            name: exercise.name,
            allSets: exercise.allSets,
            color: colors[index],
          },
        ];
      }, [] as {id: string; name: string; allSets: number; color: string}[]),
    };
  })();

  const renderCartItems = () => {
    return PieData.itemsWithColors.map(item => (
      <View style={{...styles.chartWrap, backgroundColor: item.color}}>
        <Text style={styles.chartText}>{item.name}</Text>
        <Text style={styles.chartText}>
          {t('amount of all sets')} : {item.allSets}
        </Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <PieChart
        coverFill={theme.bgcContent}
        doughnut
        widthAndHeight={250}
        series={PieData.series}
        sliceColor={PieData.colors}
        style={{marginBottom: 15}}
      />
      {renderCartItems()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 35,
  },
  chartText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  chartWrap: {
    alignSelf: 'flex-start',
    width: '100%',
    borderRadius: 10,
    marginBottom: 5,
  },
});

export {HistoryPieChart};

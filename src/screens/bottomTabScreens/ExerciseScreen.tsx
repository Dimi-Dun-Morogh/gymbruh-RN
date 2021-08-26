import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ExerciseListItem} from '../../components';
import {useAppSelector} from '../../hooks/storeHooks';

const ExercisesScreen = () => {
  const exercises = useAppSelector(state => state.exercisesState);

  const renderExercises = () => {
    const data = Object.values(exercises);
    if (!data.length) {
      return (
        <Text style={styles.textStyle}>упражнений нет, нажмите + наверху</Text>
      );
    }
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ExerciseListItem
              name={item.name}
              date={item.lastDate}
              onPress={() => null}
            />
          )}
        />
      </View>
    );
  };

  return <View style={styles.containerStyle}>{renderExercises()}</View>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#ffff',
    fontSize: 28,
    textAlign: 'center',
  },
  containerStyle: {
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 5,
  },
});

export {ExercisesScreen};

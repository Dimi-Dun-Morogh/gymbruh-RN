import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WorkOutSet, WorkOutSetHistoryItem} from '..';
import {generateId} from '../../helpers';
import {Exercise} from '../../redux/exercises/exercise.types';

type Props = {
  exercise: Exercise;
};

type SetItem = {
  reps: string;
  weight: string;
  id: string;
};

const WorkOutExerciseItem = ({exercise}: Props) => {
  const [doneSets, setDoneSet] = useState<SetItem[] | []>([]);

  const onSetSubmit = (reps: string, weight: string) => {
    setDoneSet([
      ...doneSets,
      {
        reps,
        weight,
        id: generateId.id(),
      },
    ]);
  };

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>{exercise.name}</Text>
      <View style={styles.crossLine} />
      <View>
        <View>
          {doneSets.map((item, index) => (
            <WorkOutSetHistoryItem
              key={item.id}
              weight={item.weight}
              reps={item.reps}
              number={index + 1}
            />
          ))}
        </View>
        <View style={styles.crossLine} />
        <WorkOutSet onSetSubmit={(reps, weight) => onSetSubmit(reps, weight)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'black',
    borderColor: 'green',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    paddingVertical: 5,
  },
  textStyle: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  crossLine: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'green',
    paddingTop: 5,
  },
});

export {WorkOutExerciseItem};

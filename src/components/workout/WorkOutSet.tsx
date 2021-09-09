import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, WorkOutSetInput} from '../';

type Props = {
  onSetSubmit: (reps: string, weight: string) => void;
};

const WorkOutSet = ({onSetSubmit}: Props) => {
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  return (
    <View style={styles.containerStyle}>
      <WorkOutSetInput
        label="Повторений"
        value={reps}
        onValueChange={setReps}
      />
      <WorkOutSetInput label="Вес" value={weight} onValueChange={setWeight} />

      <IconButton
        iconName="check-circle"
        color="#8a63f2"
        size={33}
        onPress={() => {
          onSetSubmit(reps, weight);
          setReps('');
          setWeight('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
    fontSize: 24,
  },
});

export {WorkOutSet};

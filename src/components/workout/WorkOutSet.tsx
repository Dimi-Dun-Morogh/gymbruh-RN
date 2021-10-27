import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet} from 'react-native';
import {WorkOutSetInput, Button} from '../';

type Props = {
  onSetSubmit: (reps: string, weight: string) => void;
};

const WorkOutSet = ({onSetSubmit}: Props) => {
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const {t} = useTranslation();

  return (
    <View style={styles.containerStyle}>
      <WorkOutSetInput label={t('reps')} value={reps} onValueChange={setReps} />
      <WorkOutSetInput
        label={t('weight')}
        value={weight}
        onValueChange={setWeight}
      />

      <Button
        onPress={() => {
          onSetSubmit(reps, weight);
          setReps('');
          setWeight('');
        }}
        icon="check-circle"
        iconSize={38}
        ButtonStyle={{
          marginHorizontal: 0,
          height: 48,
          width: 48,
          backgroundColor: 'green',
        }}
        TextStyles={{padding: 0}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    //flexWrap: 'wrap',
    width: '100%',
  },
  textStyle: {
    color: '#fff',
    fontSize: 24,
  },
});

export {WorkOutSet};

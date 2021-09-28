import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, View} from 'react-native';
import {Modal, Button, ExerciseListItem} from '..';
import {useAppSelector} from '../../hooks/storeHooks';

type Props = {
  onSelect: (id: string) => void;
};

const WorkOutAddExercise = ({onSelect}: Props) => {
  const [modal, setModal] = useState(false);
  const {t} = useTranslation();
  const exercises = useAppSelector(state => state.exercisesState.exercises);
  const handleSelect = (id: string) => {
    onSelect(id);
    setModal(false);
  };
  return (
    <View style={{marginVertical: 10}}>
      <Button onPress={() => setModal(true)}>{t('Add exercise')}</Button>
      <Modal
        topClose
        onSuccess={() => null}
        onDecline={() => setModal(false)}
        visible={modal}
        text="Tap on exercise to select">
        <FlatList
          data={Object.values(exercises)}
          renderItem={({item}) => (
            <ExerciseListItem
              key={item.id}
              name={item.name}
              date={item.lastDate}
              onPress={() => handleSelect(item.id)}
            />
          )}
        />
      </Modal>
    </View>
  );
};

export {WorkOutAddExercise};

import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet} from 'react-native';
import {TextBlock, IconButton as HeaderButton} from '../../components/';
import {useAppSelector} from '../../hooks/storeHooks';
import {exercDetailScreenProp} from '../../types/routingTypes';

const ExerciseDetailScreen = ({route, navigation}: exercDetailScreenProp) => {
  const id = route.params!.exerciseId;
  const exercise = useAppSelector(state => state.exercisesState.exercises[id]);
  const {
    allSets,
    lastDate,
    lastReps,
    lastWeight,
    name,
    recordReps,
    recordWeight,
  } = exercise;
  const {t} = useTranslation();

  useEffect(() => {
    navigation.setOptions({
      title: name,
      headerRight: ({tintColor}) => {
        return (
          <HeaderButton
            size={35}
            iconName="edit"
            color={tintColor}
            onPress={() =>
              navigation.navigate('exercCreate', {
                exercise: exercise,
              })
            }
          />
        );
      },
    });
  }, [navigation, name, exercise]);

  return (
    <View style={styles.container}>
      <TextBlock>{name}</TextBlock>
      <TextBlock>
        {t('amount of all sets')}: {allSets || ''}
      </TextBlock>
      <TextBlock>
        {t('last time done')}: {lastDate || ''}{' '}
      </TextBlock>
      <TextBlock>
        {t('last set')}:{'\n'} {t('reps')} - {lastReps} {t('weight')} -{' '}
        {lastWeight || ''}
      </TextBlock>
      <TextBlock>
        {t('record reps')}:{'\n'} {t('reps')} - {recordReps.reps} {t('weight')}{' '}
        -{recordReps.weight || ''} {'\n'}
        {t('date')} - {recordReps.date || ''}
      </TextBlock>
      <TextBlock>
        {t('record weight')}:{'\n'} {t('weight')} - {recordWeight.weight}{' '}
        {t('reps')} - {recordWeight.reps} {'\n'}
        {t('date')} - {recordWeight.date || ''}
      </TextBlock>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export {ExerciseDetailScreen};

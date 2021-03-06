import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Input,
  Button,
  ExerciseListItem,
  TextBlock,
  IconButton as HeaderButton,
  Modal,
  ErrorsInput,
} from '../../components';
import {useAppSelector} from '../../hooks/storeHooks';
import {Exercise} from '../../redux/exercises/exercise.types';
import {
  createRoutine,
  deleteRoutine,
  editRoutine,
} from '../../redux/routines/routine.actions';
import {routineCreateScreenProp, NavPropsTabs} from '../../types/routingTypes';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import Validator from '../../helpers/validator';

const CreateRoutineScreen = ({route}: routineCreateScreenProp) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedExerc, setSelectedExerc] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState<string[]>([]);

  const dispatch = useDispatch();
  const navigation = useNavigation<NavPropsTabs>();
  const exercises = useAppSelector(state => state.exercisesState.exercises);
  const {t} = useTranslation();

  const onSubmit = () => {
    const validate = Validator('routine', name);
    if (validate.length) {
      setErrors(validate);
      return;
    }
    if (id) {
      //updating
      dispatch(
        editRoutine({
          ...route.params?.routine!,
          name,
          exercises: [...selectedExerc],
        }),
      );
    } else {
      dispatch(createRoutine(name, [...selectedExerc]));
    }
    navigation.goBack();
  };

  const handleDeletion = () => {
    setModalVisible(false);
    navigation.navigate('routine');
    dispatch(deleteRoutine(id));
  };

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        if (route.params) {
          const {
            id: oldId,
            name: oldName,
            exercises: oldExercises,
          } = route.params.routine;

          setName(oldName);
          setId(oldId);
          setSelectedExerc(new Set(oldExercises));

          navigation.setOptions({
            headerRight: () => {
              return (
                <HeaderButton
                  size={35}
                  iconName="delete-forever"
                  color="red"
                  onPress={() => setModalVisible(true)}
                />
              );
            },
          });
        }
      });

      return () => unsubscribe();
    }, [route.params, navigation]),
  );

  const renderExercises = () => {
    const data = Object.values(exercises);
    if (!data.length) {
      return <TextBlock>{t('no exercises, press + on top')}</TextBlock>;
    }

    return (
      <FlatList
        data={data}
        renderItem={({item}: {item: Exercise}) => (
          <ExerciseListItem
            name={item.name}
            date={item.lastDate}
            selected={selectedExerc.has(item.id)}
            onPress={() => {
              if (selectedExerc.has(item.id)) {
                setSelectedExerc(
                  prev => new Set([...prev].filter(n => n !== item.id)),
                );
              } else {
                setSelectedExerc(prev => new Set(prev.add(item.id)));
              }
            }}
          />
        )}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        text="'Are you sure to delete?"
        visible={modalVisible}
        onDecline={() => setModalVisible(false)}
        onSuccess={() => handleDeletion()}
      />
      <Input
        containerStyle={{paddingTop: 15, marginBottom: 0}}
        label={t('enter name')}
        value={name}
        placeholder={t('legs day')}
        onChangeText={newName => {
          setErrors([]);
          setName(newName);
        }}
      />
      <ErrorsInput errors={errors} />
      {renderExercises()}
      <Button onPress={onSubmit} ButtonStyle={{marginBottom: 10}}>
        OK
      </Button>
    </View>
  );
};

export {CreateRoutineScreen};

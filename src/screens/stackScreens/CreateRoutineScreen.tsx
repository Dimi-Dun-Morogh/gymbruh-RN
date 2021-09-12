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

const CreateRoutineScreen = ({route}: routineCreateScreenProp) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedExerc, setSelectedExerc] = useState<Set<string>>(new Set());

  const dispatch = useDispatch();
  const navigation = useNavigation<NavPropsTabs>();
  const exercises = useAppSelector(state => state.exercisesState.exercises);

  const onSubmit = () => {
    if (id) {
      //updating
      dispatch(
        editRoutine({
          ...route.params?.routine!,
          name,
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
    if (!exercises) {
      return <TextBlock>упражнений нет, нажмите + наверху</TextBlock>;
    }
    const data = Object.values(exercises);
    return (
      <View style={{marginBottom: 25}}>
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
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Modal
        visible={modalVisible}
        onDecline={() => setModalVisible(false)}
        onSuccess={() => handleDeletion()}
      />
      <Input
        label="enter name"
        value={name}
        placeholder="dips"
        onChangeText={setName}
      />
      {renderExercises()}
      <Button onPress={onSubmit}>OK</Button>
    </View>
  );
};

export {CreateRoutineScreen};

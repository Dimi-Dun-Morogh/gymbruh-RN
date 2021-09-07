import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Exercise} from '../redux/exercises/exercise.types';
import {Routine} from '../redux/routines/routine.types';

export type BottomTabScreenList = {
  home: undefined;
  routine: undefined;
  exercises: undefined;
};

export type RootStackScreenList = {
  tabs: BottomTabScreenList;
  history: undefined;
  exercCreate: undefined;
  exercDetail: {exercise: Exercise};
  routineCreate: {routine: Routine} | undefined;
  routineDetails: {routine: Routine};
};

export type NavProp = NativeStackNavigationProp<RootStackScreenList>;

export type exercDetailScreenProp = NativeStackScreenProps<
  RootStackScreenList,
  'exercDetail'
>;

export type routineCreateScreenProp = NativeStackScreenProps<
  RootStackScreenList,
  'routineCreate'
>;

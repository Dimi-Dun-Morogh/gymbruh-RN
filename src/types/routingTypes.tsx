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
  home: undefined;
  routine: undefined;
  exercises: undefined;
  tabs: BottomTabScreenList;
  //!end of tabs
  history: undefined;
  exercCreate: {exercise: Exercise} | undefined;
  exercDetail: {exerciseId: string};
  routineCreate: {routine: Routine} | undefined;
  routineDetails: {routine: Routine};
  workOut: undefined;
};

export type NavProp = NativeStackNavigationProp<RootStackScreenList>;
export type NavPropsTabs = NativeStackNavigationProp<BottomTabScreenList>;

export type exercDetailScreenProp = NativeStackScreenProps<
  RootStackScreenList,
  'exercDetail'
>;

export type exercCreateScreenProp = NativeStackScreenProps<
  RootStackScreenList,
  'exercCreate'
>;

export type routineCreateScreenProp = NativeStackScreenProps<
  RootStackScreenList,
  'routineCreate'
>;

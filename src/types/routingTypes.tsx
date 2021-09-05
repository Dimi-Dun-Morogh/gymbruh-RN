import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Exercise} from '../redux/exercises/exercise.types';

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
};

export type NavProp = NativeStackNavigationProp<RootStackScreenList>;

export type NavScreenProp = NativeStackScreenProps<
  RootStackScreenList,
  'exercDetail' | 'exercCreate' | 'history'
>;

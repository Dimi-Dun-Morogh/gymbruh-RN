export * from './bottomTabScreens/HomeScreen';
export * from './stackScreens/HistoryScreen';
export * from './bottomTabScreens/ExerciseScreen';
export * from './bottomTabScreens/RoutineScreen';

export type BottomTabScreenList = {
  home: undefined;
  routine: undefined;
  exercises: undefined;
};

export type RootStackScreenList = {
  tabs: undefined;
  history: undefined;
};

export * from './bottomTabScreens/HomeScreen';
export * from './stackScreens/HistoryScreen';
export * from './bottomTabScreens/ExerciseScreen';
export * from './bottomTabScreens/RoutineScreen';
export * from './stackScreens/CreateExerciseScreen';

export type BottomTabScreenList = {
  home: undefined;
  routine: undefined;
  exercises: undefined;
};

export type RootStackScreenList = {
  tabs: undefined;
  history: undefined;
  exercCreate: undefined;
};

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HistoryScreen,
  HomeScreen,
  ExercisesScreen,
  RoutineScreen,
  BottomTabScreenList,
  RootStackScreenList,
} from './screens';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator<RootStackScreenList>();

const Tab = createBottomTabNavigator<BottomTabScreenList>();
const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{...styles, ...plusStyles}}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Домой',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="routine"
        component={RoutineScreen}
        options={{
          tabBarLabel: 'Программы',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="repeat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="exercises"
        component={ExercisesScreen}
        options={{
          tabBarLabel: 'Упражнения',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="fitness-center" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="history" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'black',
  },
  tabBarLabelStyle: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabBarIconStyle: {
    color: '#fff',
  },
});

const plusStyles = {
  tabBarActiveTintColor: '#fff',
  tabBarActiveBackgroundColor: '#8a63f2',
};
// #8a63f2
export default Router;

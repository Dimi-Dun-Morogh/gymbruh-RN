import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HistoryScreen,
  HomeScreen,
  ExercisesScreen,
  RoutineScreen,
  CreateExerciseScreen,
} from './screens';
import {
  RootStackScreenList,
  BottomTabScreenList,
  NavProp,
} from './types/routingTypes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {HeaderButton} from './components';

import ExerciseDetailScreen from './screens/stackScreens/ExerciseDetailScreen';

const Stack = createNativeStackNavigator<RootStackScreenList>();

const Tab = createBottomTabNavigator<BottomTabScreenList>();

const Tabs = () => {
  const navigation = useNavigation<NavProp>();

  return (
    <Tab.Navigator
      screenOptions={{...styles, ...tabsAdditional}}
      sceneContainerStyle={{backgroundColor: '#2c1338'}}>
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
          title: 'упражнения',
          headerStyle: headerStyle,
          headerTitleStyle: headerTitle,
          tabBarLabel: 'Упражнения',
          headerRight: () => {
            return (
              <HeaderButton
                iconName="add"
                onPress={() => navigation.navigate('exercCreate')}
              />
            );
          },
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
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: '#2c1338',
          },
          headerTintColor: 'white',
          headerStyle: headerStyle,
          headerTitleStyle: headerTitle,
        }}>
        <Stack.Screen
          name="tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="history"
          options={{title: 'история'}}
          component={HistoryScreen}
        />
        <Stack.Screen
          name="exercCreate"
          component={CreateExerciseScreen}
          options={{
            title: 'создать упражнение',
          }}
        />
        <Stack.Screen
          name="exercDetail"
          component={ExerciseDetailScreen}
          options={({route}) => ({title: route.params.exercise.name})}
        />
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
  tabsAdditional: {
    tabBarActiveTintColor: '#fff',
    tabBarActiveBackgroundColor: '#8a63f2',
    // tabBarContentContainerStyle: {
    //   backgroundColor: 'black',
    // },
  },
  headerAdditional: {
    headerStyle: {
      backgroundColor: '#8a63f2',
    },
    headerTitle: {
      color: '#ffff',
    },
  },
};
// #8a63f2
const {
  headerAdditional: {headerStyle, headerTitle},
  tabsAdditional,
} = plusStyles;
export default Router;

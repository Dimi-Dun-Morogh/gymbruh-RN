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
  CreateRoutineScreen,
  ExerciseDetailScreen,
  RoutineDetailsScreen,
  WorkOutScreen,
  SettingsScreen,
} from './screens';
import {
  RootStackScreenList,
  BottomTabScreenList,
  NavProp,
} from './types/routingTypes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconButton as HeaderButton} from './components';

const Stack = createNativeStackNavigator<RootStackScreenList>();

const Tab = createBottomTabNavigator<BottomTabScreenList>();

const Tabs = () => {
  const navigation = useNavigation<NavProp>();

  return (
    <Tab.Navigator
      screenOptions={{
        ...styles,
        ...tabsAdditional,
      }}
      sceneContainerStyle={{backgroundColor: '#2c1338'}}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerRight: () => {
            return (
              <HeaderButton
                iconName="settings"
                size={35}
                onPress={() => navigation.navigate('settings')}
              />
            );
          },
          tabBarLabel: 'Домой',
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
          headerRight: () => {
            return (
              <HeaderButton
                iconName="add"
                size={35}
                onPress={() => navigation.navigate('routineCreate')}
              />
            );
          },
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
          tabBarLabel: 'Упражнения',
          headerRight: () => {
            return (
              <HeaderButton
                size={35}
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

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: '#2c1338',
        },
        headerTintColor: 'white',
        ...styles,
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
      <Stack.Screen name="exercDetail" component={ExerciseDetailScreen} />
      <Stack.Screen
        name="routineCreate"
        component={CreateRoutineScreen}
        options={({route}) => ({
          title: route.params?.routine.name || 'создать программу',
        })}
      />
      <Stack.Screen
        name="routineDetails"
        component={RoutineDetailsScreen}
        options={({route, navigation}) => ({
          headerRight: () => {
            return (
              <HeaderButton
                size={35}
                iconName="edit"
                onPress={() =>
                  navigation.navigate('routineCreate', {
                    routine: route.params.routine,
                  })
                }
              />
            );
          },
        })}
      />
      <Stack.Screen name="workOut" component={WorkOutScreen} />
      <Stack.Screen name="settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <StackNav />
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
  headerStyle: {
    backgroundColor: '#8a63f2',
  },
  headerTitleStyle: {
    color: '#ffff',
  },
});

const plusStyles = {
  tabsAdditional: {
    tabBarActiveTintColor: '#fff',
    tabBarActiveBackgroundColor: '#8a63f2',
  },
};
const {tabsAdditional} = plusStyles;
export default Router;

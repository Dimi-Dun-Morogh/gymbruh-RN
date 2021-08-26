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
  BottomTabScreenList,
  RootStackScreenList,
  CreateExerciseScreen,
} from './screens';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {HeaderButton} from './components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackScreenList>();

const Tab = createBottomTabNavigator<BottomTabScreenList>();

type Prop = NativeStackNavigationProp<RootStackScreenList, 'history'>;

const Tabs = () => {
  const {
    headerAdditional: {headerStyle, headerTitle},
    tabsAdditional,
  } = plusStyles;

  const navigation = useNavigation<Prop>();

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
        }}>
        <Stack.Screen
          name="tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="history" component={HistoryScreen} />
        <Stack.Screen
          name="exercCreate"
          component={CreateExerciseScreen}
          options={{
            title: 'создать упражнение',
          }}
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
export default Router;

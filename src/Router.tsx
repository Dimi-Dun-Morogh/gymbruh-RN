import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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
import {Theme} from './themes/';
import {useTheme} from './hooks/useTheme';
import {useTranslation} from 'react-i18next';
import i18n, {defineLanguage} from './locales/';
import {useAppSelector} from './hooks/storeHooks';
import {playASound} from './helpers';
const initi18n = i18n;

const Stack = createStackNavigator<RootStackScreenList>();

const Tab = createBottomTabNavigator<BottomTabScreenList>();

const Tabs = () => {
  const navigation = useNavigation<NavProp>();
  const [theme] = useTheme();

  const tabsAdditional = {
    tabBarActiveTintColor: '#fff',
    tabBarActiveBackgroundColor: '#8a63f2',
    tabBarInactiveTintColor: theme.textColorMain,
  };
  const soundOn = useAppSelector(state => state.appSettingsState.soundOn);
  const {t} = useTranslation();
  React.useEffect(() => {
    playASound.switchSound(soundOn);
    i18n.changeLanguage(defineLanguage());
  }, [soundOn]);

  return (
    <Tab.Navigator
      screenOptions={{
        ...styles(theme),
        ...tabsAdditional,
      }}
      sceneContainerStyle={{backgroundColor: theme.bgcContent}}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'gymbruh',
          headerRight: () => {
            return (
              <HeaderButton
                iconName="settings"
                size={35}
                color={theme.textColorMain}
                onPress={() => navigation.navigate('settings')}
              />
            );
          },
          tabBarLabel: t('home'),
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="routine"
        component={RoutineScreen}
        options={{
          title: t('routines'),
          tabBarLabel: t('routines'),
          headerRight: () => {
            return (
              <HeaderButton
                iconName="add"
                size={35}
                color={theme.textColorMain}
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
          title: t('exercises'),
          tabBarLabel: t('exercises'),
          headerRight: () => {
            return (
              <HeaderButton
                size={35}
                color={theme.textColorMain}
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
  const [theme] = useTheme();
  const {t} = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.bgcContent,
        },

        headerTintColor: styles(theme).headerTitleStyle.color,
        ...styles(theme),
      }}>
      <Stack.Screen
        name="tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="history"
        options={{title: t('history')}}
        component={HistoryScreen}
      />
      <Stack.Screen
        name="exercCreate"
        component={CreateExerciseScreen}
        options={{
          title: t('create exercise'),
        }}
      />
      <Stack.Screen name="exercDetail" component={ExerciseDetailScreen} />
      <Stack.Screen
        name="routineCreate"
        component={CreateRoutineScreen}
        options={({route}) => ({
          title: route.params?.routine.name || t('create routine'),
        })}
      />
      <Stack.Screen
        name="routineDetails"
        component={RoutineDetailsScreen}
        options={({route, navigation}) => ({
          headerRight: ({tintColor}) => {
            return (
              <HeaderButton
                size={35}
                iconName="edit"
                color={tintColor}
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
      <Stack.Screen
        name="workOut"
        options={{
          title: t('workout'),
        }}
        component={WorkOutScreen}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: t('settings'),
        }}
        component={SettingsScreen}
      />
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

const styles = (theme: Theme) => {
  return StyleSheet.create({
    tabBarStyle: {
      backgroundColor: theme.bgcTabs,
      borderTopWidth: 0,
    },
    tabBarLabelStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    tabBarIconStyle: {
      color: theme.textColorMain,
    },
    headerStyle: {
      backgroundColor: theme.bgcMain,
    },
    headerTitleStyle: {
      color: theme.textColorMain,
    },
  });
};

export default Router;

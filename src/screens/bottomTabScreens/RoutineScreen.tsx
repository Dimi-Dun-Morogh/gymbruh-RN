import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';
import {View} from 'react-native';
import {RoutineListItem, TextBlock} from '../../components';

import {useAppSelector} from '../../hooks/storeHooks';
import {NavProp} from '../../types/routingTypes';

const RoutineScreen = () => {
  const routines = useAppSelector(state => state.routinesState.routines);
  const navigation = useNavigation<NavProp>();

  const renderRoutines = () => {
    const data = Object.values(routines);

    if (!data.length) {
      return <TextBlock>создайте программу..</TextBlock>;
    }
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <RoutineListItem
              onPress={() =>
                navigation.navigate('routineDetails', {routine: item})
              }>
              {item.name}
            </RoutineListItem>
          )}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>{renderRoutines()}</View>
  );
};

export {RoutineScreen};

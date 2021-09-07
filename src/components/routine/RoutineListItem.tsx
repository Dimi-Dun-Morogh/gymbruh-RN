import React from 'react';

import {TouchableOpacity} from 'react-native';
import {TextBlock} from '..';

type Props = {
  onPress: () => void;
  children: React.ReactChild | React.ReactChild[];
};

const RoutineListItem = ({children, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <TextBlock>{children}</TextBlock>
    </TouchableOpacity>
  );
};

export {RoutineListItem};

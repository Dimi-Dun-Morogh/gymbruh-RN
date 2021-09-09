import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  onPress: () => void;
  iconName: string;
  size?: number;
  color?: string;
};

const IconButton = ({onPress, iconName, size, color}: Props) => {
  return (
    <Icon.Button
      name={iconName}
      backgroundColor="transparent"
      onPress={onPress}
      borderRadius={30}
      size={size}
      iconStyle={{
        marginRight: 0,
      }}
      color={color || 'white'}
      underlayColor="transparent"
    />
  );
};

export {IconButton};

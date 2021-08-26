import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  onPress: () => void;
  iconName: string;
};

const HeaderButton = ({onPress, iconName}: Props) => {
  return (
    <Icon.Button
      name={iconName}
      backgroundColor="transparent"
      onPress={onPress}
      borderRadius={0}
      size={35}
      iconStyle={{
        marginRight: 0,
      }}
      underlayColor="transparent"
    />
  );
};

export {HeaderButton};

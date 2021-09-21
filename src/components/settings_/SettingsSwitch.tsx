import React from 'react';
import {Switch} from 'react-native';
import {useTheme} from '../../hooks/useTheme';

type Props = {
  onValueChange: () => void;
  value: boolean;
};

const SettingsSwitch = ({value, onValueChange}: Props) => {
  const [theme] = useTheme();
  return (
    <Switch
      trackColor={{false: '#767577', true: 'green'}}
      thumbColor={theme.switchThumb}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onValueChange}
      value={value}
    />
  );
};

export {SettingsSwitch};

import React from 'react';
import {Switch} from 'react-native';
import {useTheme} from '../../hooks/useTheme';

type Props = {
  onValueChange: () => void;
  value: boolean;
  accesibilityText?: string;
};

const SettingsSwitch = ({value, onValueChange, accesibilityText}: Props) => {
  const [theme] = useTheme();
  return (
    <Switch
      trackColor={{false: '#767577', true: 'green'}}
      thumbColor={theme.switchThumb}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onValueChange}
      value={value}
      style={{height: 48, width: 48}}
      accessibilityLabel={'switch ' + accesibilityText}
    />
  );
};

export {SettingsSwitch};

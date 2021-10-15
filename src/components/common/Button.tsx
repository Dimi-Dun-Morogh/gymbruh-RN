import React, {ReactNode} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '../../hooks/useTheme';
import {Theme} from '../../themes/';

type ButtonProps = {
  children?: ReactNode;
  onPress: () => void;
  color?: string;
  bgColor?: string;
  icon?: string;
  iconSize?: number;
  ButtonStyle?: StyleProp<ViewStyle>;
};

const Button = ({
  children,
  onPress,
  color,
  bgColor,
  icon,
  iconSize,
  ButtonStyle,
}: ButtonProps) => {
  const [theme] = useTheme();
  const styles = style(theme, bgColor, color);

  return (
    <TouchableOpacity
      style={[styles.buttonStyle, ButtonStyle]}
      onPress={onPress}>
      <Text style={styles.textStyle}>
        {children}
        {icon ? (
          <Icon
            name={icon}
            style={
              iconSize
                ? [styles.textStyle, {fontSize: iconSize}]
                : styles.textStyle
            }
          />
        ) : null}
      </Text>
    </TouchableOpacity>
  );
};

const style = (theme: Theme, bgColor?: string, color?: string) =>
  StyleSheet.create({
    buttonStyle: {
      backgroundColor: bgColor || theme.bgcMain,
      borderRadius: 10,
      marginHorizontal: 20,
      borderColor: 'black',
      borderWidth: 1,
      borderStyle: 'solid',
    },
    textStyle: {
      color: color || theme.textColorMain,
      fontSize: 19,
      fontWeight: 'bold',
      letterSpacing: 1,
      padding: 10,
      textAlign: 'center',
    },
  });

export {Button};

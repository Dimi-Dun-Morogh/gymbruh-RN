import React, {ReactNode} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
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
  TextStyles?: StyleProp<TextStyle>;
};

const Button = ({
  children,
  onPress,
  color,
  bgColor,
  icon,
  iconSize,
  ButtonStyle,
  TextStyles,
}: ButtonProps) => {
  const [theme] = useTheme();
  const styles = style(theme, bgColor, color);

  return (
    <TouchableOpacity
      style={[styles.buttonStyle, ButtonStyle]}
      onPress={onPress}>
      <Text style={[styles.textStyle, TextStyles]}>{children}</Text>
      {icon ? (
        <Icon
          name={icon}
          style={
            iconSize
              ? [
                  styles.textStyle,
                  {fontSize: iconSize, alignSelf: 'center'},
                  TextStyles,
                ]
              : [styles.textStyle, TextStyles, {alignSelf: 'center'}]
          }
        />
      ) : null}
    </TouchableOpacity>
  );
};

const style = (theme: Theme, bgColor?: string, color?: string) =>
  StyleSheet.create({
    buttonStyle: {
      backgroundColor: bgColor || theme.bgcMain,
      borderRadius: 10,
      marginHorizontal: 20,
      borderColor: theme.textColorMain,
      borderWidth: 1,
      borderStyle: 'solid',
      flexDirection: 'row',
      justifyContent: 'center',
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

import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, StyleSheet} from 'react-native';
import {IconButton} from '..';
import {useTheme} from '../../hooks/useTheme';
import {WorkOutSet} from '../../redux/workout/workout.types';
import {Theme} from '../../themes';

type Props = {
  set: WorkOutSet;
  onDelete: (id: string) => void;
  number: number;
};

const WorkOutSetHistoryItem = ({
  set: {reps, weight, id, date},
  onDelete,
  number,
}: Props) => {
  const [theme] = useTheme();
  const styles = style(theme);
  const {t} = useTranslation();
  return (
    <View style={styles.containerStyle}>
      <IconButton
        color="red"
        iconName="delete-forever"
        onPress={() => onDelete(id)}
        size={33}
      />

      <Text style={styles.textStyle}>
        {' '}
        {number}){t('reps')} - {reps} {t('weight')} - {weight}
      </Text>
      <Text style={styles.dateStyle}>{date}</Text>
    </View>
  );
};

const style = (theme: Theme) =>
  StyleSheet.create({
    containerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textStyle: {
      color: theme.textColorMain,
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    dateStyle: {
      color: theme.textColorMain,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      marginLeft: 'auto',
      marginRight: 15,
    },
  });

export {WorkOutSetHistoryItem};

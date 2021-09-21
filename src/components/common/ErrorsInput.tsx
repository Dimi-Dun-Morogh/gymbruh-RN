import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  errors: string[];
};

const ErrorsInput = ({errors}: Props) => {
  const {t} = useTranslation();
  return (
    <View style={styles.containerStyle}>
      {errors.map(item => (
        <Text style={styles.textStyle} key={item}>
          {t(item)}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 35,
    textTransform: 'uppercase',
    borderBottomWidth: 2,
  },
  containerStyle: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingHorizontal: 15,
    marginBottom: 25,
  },
});

export {ErrorsInput};

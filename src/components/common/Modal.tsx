import React, { ReactNode } from 'react';
import {Modal as RnModal, StyleSheet, View, Text} from 'react-native';
import {Button} from '../';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';

type Props = {
  visible: boolean;
  onSuccess: () => void;
  onDecline: () => void;
  text: string;
  children?: ReactNode;
};

const Modal = ({visible, onSuccess, onDecline, text, children}: Props) => {
  const {t} = useTranslation();
  return (
    <RnModal visible={visible} animationType="slide" transparent>
      <View style={styles.containerStyle}>
        <View style={styles.contentContainerStyle}>
          <Text style={styles.textStyle}> {t(text)}</Text>
          {children}
          <View style={styles.buttonsContainerStyle}>
            <Button onPress={onDecline} bgColor="red" color="#fff">
              <Icon name="close" size={33} />
            </Button>
            <Button onPress={onSuccess} bgColor="green" color="#fff">
              <Icon name="check" size={33} />
            </Button>
          </View>
        </View>
      </View>
    </RnModal>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainerStyle: {
    backgroundColor: 'black',
    paddingVertical: 60,
  },
  textStyle: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export {Modal};

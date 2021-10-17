import React, {ReactNode} from 'react';
import {Modal as RnModal, StyleSheet, View, Text} from 'react-native';
import {Button} from '../';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';

type Props = {
  visible: boolean;
  onSuccess?: () => void;
  onDecline: () => void;
  text: string;
  children?: ReactNode;
  topClose?: boolean;
};

const Modal = ({
  visible,
  onSuccess = () => null,
  onDecline,
  text,
  children,
  topClose,
}: Props) => {
  const {t} = useTranslation();
  return (
    <RnModal visible={visible} animationType="slide" transparent>
      <View style={styles.containerStyle}>
        <View style={styles.contentContainerStyle}>
          {topClose ? (
            <View style={styles.topButtonContainer}>
              <Button
                onPress={onDecline}
                bgColor="red"
                color="#fff"
                TextStyles={{padding: 0}}
                ButtonStyle={{padding: 0, borderColor: '#fff'}}>
                <Icon name="close" size={30} />
              </Button>
            </View>
          ) : null}
          <Text style={styles.textStyle}> {t(text)}</Text>
          {children}
          {!topClose ? (
            <View style={styles.buttonsContainerStyle}>
              <Button
                onPress={onDecline}
                ButtonStyle={{borderColor: '#fff'}}
                bgColor="red"
                color="#fff">
                <Icon name="close" size={33} />
              </Button>
              <Button
                onPress={onSuccess}
                ButtonStyle={{borderColor: '#fff'}}
                bgColor="green"
                color="#fff">
                <Icon name="check" size={33} />
              </Button>
            </View>
          ) : null}
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
    paddingVertical: 30,
  },
  textStyle: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30,
    //paddingRight: 50,
    paddingTop: 19,
  },
  buttonsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topButtonContainer: {
    position: 'absolute',
    width: 90,
    height: 90,
    right: 0,
    top: 10,
    // zIndex: 500,
  },
});

export {Modal};

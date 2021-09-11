import React from 'react';
import {Modal as RnModal, StyleSheet, View, Text} from 'react-native';
import {Button} from '../';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  visible: boolean;
  onSuccess: () => void;
  onDecline: () => void;
};

const Modal = ({visible, onSuccess, onDecline}: Props) => {
  return (
    <RnModal visible={visible} animationType="slide" transparent>
      <View style={styles.containerStyle}>
        <View style={styles.contentContainerStyle}>
          <Text style={styles.textStyle}> Are you sure to delete ? </Text>
          <View style={styles.buttonsContainerStyle}>
            <Button onPress={onDecline}>
              <Icon name="close" size={33} />
            </Button>
            <Button onPress={onSuccess}>
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

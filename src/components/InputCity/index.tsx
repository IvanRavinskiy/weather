import React, {FC, useState} from 'react';
import {Button, Modal, ModalProps, TextInput, View} from 'react-native';
import {inputCityStyles} from './styles';
import {GET_WEATHER} from '../../state/reducers/weather';
import {useAppDispatch} from '../../state';

type InputCityProps = {
  modalVisible: ModalProps['visible'];
  setModalVisible: (isOpen: boolean) => void;
};

export const InputCity: FC<InputCityProps> = props => {
  const {modalVisible, setModalVisible} = props;
  const [inputCity, setInputCity] = useState('');
  const dispatch = useAppDispatch();

  const selectCityOnPress = () => {
    dispatch(GET_WEATHER(inputCity));
    setModalVisible(false);
    setInputCity('');
  };

  const cityInputOnChange = (text: string) => {
    setInputCity(text);
  };
  return (
    <Modal animationType={'fade'} transparent={true} visible={modalVisible}>
      <View style={inputCityStyles.modalContainer}>
        <TextInput
          value={inputCity}
          onChangeText={cityInputOnChange}
          autoFocus={true}
        />
        <Button onPress={selectCityOnPress} title={'OK'} />
      </View>
    </Modal>
  );
};

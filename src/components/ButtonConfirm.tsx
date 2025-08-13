import React from 'react';
import {Text, View, StyleSheet, TextStyle, ViewStyle, TouchableOpacity} from 'react-native';

type ButtonConfirmProps = {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export default function ButtonConfirm({title, onPress, buttonStyle, textStyle,}: ButtonConfirmProps) {

  const stylesButtonConfirm = StyleSheet.create({
    container: {
      backgroundColor: '#18da31ff',
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 30,
      margin: 10,
      borderRadius: 10,
    },
    text: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      borderRadius: 10,
    },
  });
  
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={[stylesButtonConfirm.container, buttonStyle]}>

            <Text style={[stylesButtonConfirm.text, textStyle]}>{title}</Text>

        </TouchableOpacity>
    );
}
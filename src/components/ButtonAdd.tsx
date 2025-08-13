import React from 'react';
import {Text, View, StyleSheet, TextStyle, ViewStyle, TouchableOpacity} from 'react-native';

type ButtonAddProps = {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export default function ButtonAdd({title, onPress, buttonStyle, textStyle,}: ButtonAddProps) {

  const stylesButtonConfirm = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 70,
      height: 50,
      margin: 5,
    },
    text: {
      color: 'black',
      fontSize: 50,
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
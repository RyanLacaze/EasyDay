import React from 'react';
import {Text, View, StyleSheet, TextStyle, ViewStyle, TouchableOpacity} from 'react-native';

type ButtonDeleteProps = {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export default function ButtonDelete({title, onPress, buttonStyle, textStyle,}: ButtonDeleteProps) {

  const stylesButtonDelete = StyleSheet.create({
    container: {
      backgroundColor: '#ff1616ff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 20,
      margin: 5,
      borderRadius: 10,
    },
    text: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    },
  });
  
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={[stylesButtonDelete.container, buttonStyle]}>

          <Text style={[stylesButtonDelete.text, textStyle]}>{title}</Text>

        </TouchableOpacity>
    );
}
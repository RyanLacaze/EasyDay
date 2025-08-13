import React from 'react';
import {Text, View, StyleSheet, TextStyle, ViewStyle, TouchableOpacity} from 'react-native';

type ButtonEditProps = {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export default function ButtonEdit({title, onPress, buttonStyle, textStyle,}: ButtonEditProps) {

  const stylesButtonEdit = StyleSheet.create({
    container: {
      backgroundColor: '#3b2b55ff',
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
        style={[stylesButtonEdit.container, buttonStyle]}>

            <Text style={[stylesButtonEdit.text, textStyle]}>{title}</Text>

        </TouchableOpacity>
    );
}
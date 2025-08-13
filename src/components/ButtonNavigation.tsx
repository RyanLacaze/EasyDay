import React from 'react';
import {Text, View, StyleSheet, TextStyle, ViewStyle, TouchableOpacity} from 'react-native';

type ButtonNavigationProps = {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export default function ButtonNavigation({title, onPress, buttonStyle, textStyle,}: ButtonNavigationProps) {

  const stylesButtonNavigation = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 70,
      height: 50,
      margin: 5,
    },
    text: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });
  
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={[stylesButtonNavigation.container, buttonStyle]}>

            <Text style={[stylesButtonNavigation.text, textStyle]}>{title}</Text>

        </TouchableOpacity>
    );
}
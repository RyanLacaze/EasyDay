import React from 'react';
import {Text, View, StyleSheet, TextStyle} from 'react-native';

type TitleProps = {
  children: React.ReactNode;
  style?: TextStyle;
};

export default function Title({children, style}: TitleProps) {
  const stylesTitle = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
    },
  });
  
    return (
        <View style={stylesTitle.container}>
            <Text style={[stylesTitle.text, style]}>{children}</Text>
        </View>
    );
}

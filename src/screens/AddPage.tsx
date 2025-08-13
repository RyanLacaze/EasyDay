import React from 'react';
import { Text, View, ScrollView , Button, StyleSheet, TextInput } from 'react-native';
import Title from '../components/Title';
import ButtonConfirm from '../components/ButtonConfirm';
import { useState } from 'react';

const img1 = require('../assets/menage1.jpg');

export default function AddPage({navigation}: any) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 50,
      paddingBottom: 40,
    },
    text: {
      fontSize: 25,
    },
  });

  const styles2 = StyleSheet.create({
    container: {
      width: 350,
      height: 350,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      borderRadius: 10,
    },
    background: {
      backgroundColor: '#686868ff',
    },
    text: {
      fontSize: 15,
    },
    input: {
      width: 300,
      height: 40,
      borderColor: 'white',
      color: 'white',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      margin: 10,
  },
  });

  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  return (
    <View style={styles.container}>

      <ScrollView>
      
        <Title>Ajouter</Title>
        

        <View style={[styles2.container, styles2.background]}>

          <TextInput
            style={[styles2.input, styles2.text]}
            placeholder="Titre..."
            placeholderTextColor="#C4C4C4"
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            style={[styles2.input, styles2.text]}
            placeholder="Prorité..."
            placeholderTextColor="#C4C4C4"
            value={priority}
            onChangeText={setPriority}
          />
          
          <TextInput
            style={[styles2.input, styles2.text]}
            placeholder="Status..."
            placeholderTextColor="#C4C4C4"
            value={status}
            onChangeText={setStatus}
          />

          <ButtonConfirm
          title='Ajouter'
          onPress={() => console.log('Ajouter')}>
          </ButtonConfirm>

        </View>

      </ScrollView>
    </View>
    
  );
}
import React, { useEffect } from 'react';
import { Text, View, ScrollView , Button, StyleSheet, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import Title from '../components/Title';
import Task from '../data/Task.json';
import ButtonConfirm from '../components/ButtonConfirm';
import { useState } from 'react';

const img1 = require('../assets/menage1.jpg');

export default function EditPage({navigation}: any) {
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

  const route = useRoute();
  const { id } = route.params as { id: number };

  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const loadTask = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        const tasks = JSON.parse(storedTasks);
        const taskToEdit = tasks.find((t: any) => t.id === id);
        if (taskToEdit) {
          setTitle(taskToEdit.title);
          setPriority(taskToEdit.priority);
          setStatus(taskToEdit.status);
        }
      }
    };
    loadTask();
  }, [id]);

  const saveChanges = async () => {
  const storedTasks = await AsyncStorage.getItem('tasks');
  if (storedTasks) {
    let tasks = JSON.parse(storedTasks);
    tasks = tasks.map((t: any) =>
      t.id === id ? { ...t, title, priority, status } : t
    );
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    navigation.goBack();
  }
};


  return (
    <View style={styles.container}>

      <ScrollView>
      
        <Title>Modifier</Title>
        

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
          title='Modifier'
          onPress={saveChanges}>
          </ButtonConfirm>

        </View>

      </ScrollView>
    </View>
    
  );
}
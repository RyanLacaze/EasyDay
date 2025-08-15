import React from 'react';
import { Text, View, ScrollView , Button, StyleSheet, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Title from '../components/Title';
import ButtonConfirm from '../components/ButtonConfirm';
import Task from '../data/Task.json';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';

type TaskType = {
  id: number;
  title: string;
  priority: string;
  status: string;
};

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

  const route = useRoute();
  const { day } = route.params as { day: string };

  const STORAGE_KEY = `tasks_${day}`;

  const handleAddTask = async () => {
  if (!title || !priority || !status) {
    Alert.alert("Veuillez remplir tous les champs !");
    return;
  }

  // Récupérer les tâches existantes
  const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);

  let tasks: TaskType[] = storedTasks ? JSON.parse(storedTasks) : [];

  // Générer un nouvel ID (max + 1)
  const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

  // Créer la nouvelle tâche
  const newTask = {
    id: newId,
    title,
    priority,
    status
  };

  // Ajouter à la liste
  tasks.push(newTask);

  // Sauvegarder
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));

  // Retour à la page précédente
  navigation.goBack();
};

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
          onPress= {handleAddTask}>
          </ButtonConfirm>

        </View>

      </ScrollView>
    </View>
    
  );
}
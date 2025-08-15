import React from 'react';
import {Text, View, StyleSheet, TextStyle, Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import ButtonEdit from '../components/ButtonEdit';
import ButtonDelete from '../components/ButtonDelete';
import ButtonNavigation from '../components/ButtonNavigation';
import ButtonAdd from '../components/ButtonAdd';
import Task from '../data/Task.json';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

type TaskProps = {
  id: number;
  title: string;
  priority: string;
  status: string;
  day: string;
  onDelete?: (id: number) => void;
};

type TaskType = {
  id: number;
  title: string;
  priority: string;
  status: string;
  day: string;
};

type RootStackParamList = {
  Home: undefined;
  EditPage: {id: number; day: string};
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function TaskComponent({id, title, priority, status, day, onDelete}: TaskProps) {
  const navigation = useNavigation<NavigationProp>();

  const stylesTask = StyleSheet.create({
    container: {
      width: 350,
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      borderRadius: 10,
    },
    title: {
      fontSize: 20,
    },
    textPriority: {
      fontSize: 15,
    },
    textStatus: {
      fontSize: 15,
      color: 'white',
    },
    backgroundTaskGreen: {
      backgroundColor: '#18da31ff',
    },
    backgroundTaskOrange: {
      backgroundColor: '#f67214ff',
    },
    backgroundTaskRed: {
      backgroundColor: '#e20303ff',
    },
  });

  const getBackgroundColor = () => {
    switch (status.toLowerCase()) {
      case 'a faire':
        return stylesTask.backgroundTaskRed;
      case 'en cours':
        return stylesTask.backgroundTaskOrange;
      case 'fait':
        return stylesTask.backgroundTaskGreen;
      default:
        return stylesTask.backgroundTaskRed; // par défaut rouge
    }
  };
  
  const STORAGE_KEY = `tasks_${day}`;

  const handleDelete = async () => {
  // On récupère toutes les tâches
  const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);
  if (storedTasks) {
    const tasks: TaskType[] = JSON.parse(storedTasks);

    // On retire celle avec l'id actuel
    const updatedTasks = tasks.filter(t => t.id !== id);

    // On sauvegarde
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));

    // Si tu veux mettre à jour la liste dans la page parente
    if (onDelete) {
      onDelete(id);
    }
  }
};
  
    return (
        <View style={[stylesTask.container, getBackgroundColor()]}>
          <Text style={stylesTask.title}>{title}</Text>
          <Text style={stylesTask.textPriority}>{priority}</Text>
          <Text style={stylesTask.textStatus}>{status}</Text>

          <ButtonEdit 
            title="Modifier"
            onPress={() => navigation.navigate('EditPage', { id, day })}>
          </ButtonEdit>
            
          <ButtonDelete 
            title="Supprimer"
            onPress= {handleDelete}>
          </ButtonDelete>
        </View>
    );
}
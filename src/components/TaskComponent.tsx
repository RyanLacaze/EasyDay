import React from 'react';
import {Text, View, StyleSheet, TextStyle, Alert} from 'react-native';

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
};

type RootStackParamList = {
  Home: undefined;
  EditPage: {id: number};
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function TaskComponent({id, title, priority, status}: TaskProps) {
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
  
    return (
        <View style={[stylesTask.container, getBackgroundColor()]}>
          <Text style={stylesTask.title}>{title}</Text>
          <Text style={stylesTask.textPriority}>{priority}</Text>
          <Text style={stylesTask.textStatus}>{status}</Text>

          <ButtonEdit 
            title="Modifier"
            onPress={() => navigation.navigate('EditPage', { id })}>
          </ButtonEdit>
            
          <ButtonDelete 
            title="Supprimer"
            onPress={() => Alert.alert(`Voulez vous vraiment supprimer cette tâche ${id} ?`)}>
          </ButtonDelete>
        </View>
    );
}
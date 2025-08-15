import React, { useCallback, useEffect } from 'react';
import { Text, View, ScrollView , Button, StyleSheet, Pressable, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import Title from '../components/Title';
import ButtonEdit from '../components/ButtonEdit';
import ButtonDelete from '../components/ButtonDelete';
import ButtonNavigation from '../components/ButtonNavigation';
import ButtonAdd from '../components/ButtonAdd';
import Task from '../data/Task.json';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskComponent from '../components/TaskComponent';

/*const doneTasks = tasks.filter(task => task.done);
const todoTasks = tasks.filter(task => !task.done);*/

type TaskType = {
  id: number;
  title: string;
  priority: string;
  status: string;
};

export default function Friday({navigation}: any) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
  });

  const styles2 = StyleSheet.create({
    container: {
      width: 350,
      height: 120,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      borderRadius: 10,
    },
    textTask: {
      fontSize: 20,
    },
    textPriority: {
      fontSize: 15,
    },
    Items: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },
  });

  const STORAGE_KEY = "tasks_vendredi";

  useEffect(() => {
    const initTasks = async () => {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (!stored) {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(Task));
      }
    };
    initTasks();
  }, []);

  const [tasks, setTasks] = useState<TaskType[]>([]);

  const loadTasks = async () => {
    const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  };

  // Chargement initial
  useEffect(() => {
    loadTasks();
  }, []);

  // Recharge à chaque retour sur la page
  useFocusEffect(
    useCallback(() => {
      loadTasks();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>
      
        <Title>Vendredi</Title>

        {tasks.map(task => (
        <TaskComponent
        key={task.id}
        {...task}
        day="vendredi"
        onDelete={(deletedId) => {
          setTasks(prevTasks => prevTasks.filter(t => t.id !== deletedId));
        }}
        />
        ))}

      </ScrollView>

      <View>
        <ButtonAdd
        title="+"
        onPress={() => navigation.navigate('AddPage', { day: "vendredi" })}>
        </ButtonAdd>
      </View>

      <View style={styles2.Items}>
          <ButtonNavigation
          title='<'
          onPress={() => navigation.navigate('Thursday')}>
          </ButtonNavigation>

         <ButtonNavigation
          title='>'
          onPress={() => navigation.navigate('Saturday')}>
          </ButtonNavigation>
        </View>
    </SafeAreaView>
    
  );
}
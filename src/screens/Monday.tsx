import React from 'react';
import { Text, View, ScrollView , Button, StyleSheet, Pressable, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

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

//const [tasks, setTasks] = useState([]);

export default function Monday({navigation}: any) {
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

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>
      
        <Title>Lundi</Title>

        {Task.map((task) => (
          <TaskComponent
            key={task.id}
            id={task.id}
            title={task.title}
            priority={task.priority}
            status={task.status}
          />
        ))}
      </ScrollView>

      <View>
        <ButtonAdd
        title="+"
        onPress={() => navigation.navigate('AddPage')}>
        </ButtonAdd>
      </View>

      <View style={styles2.Items}>
          <ButtonNavigation
          title='<'
          onPress={() => navigation.navigate('Sunday')}>
          </ButtonNavigation>

         <ButtonNavigation
          title='>'
          onPress={() => navigation.navigate('Tuesday')}>
          </ButtonNavigation>
        </View>
    </SafeAreaView>
    
  );
}
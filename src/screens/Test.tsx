import React, { useEffect } from 'react';
import { Text, View, ScrollView , Button, StyleSheet, Pressable, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { KeyValuePair } from '@react-native-async-storage/async-storage/lib/typescript/types';

import Title from '../components/Title';
import ButtonEdit from '../components/ButtonEdit';
import ButtonDelete from '../components/ButtonDelete';
import ButtonNavigation from '../components/ButtonNavigation';
import ButtonAdd from '../components/ButtonAdd';
import Task from '../data/Task.json';

type KeyValuePair = [string, string | null];
/*const doneTasks = tasks.filter(task => task.done);
const todoTasks = tasks.filter(task => !task.done);*/

export default function Test({ navigation}: any) {
  
  //const [tasks, setTasks] = useState<{id: number ;title: string; priority: string; status: string; }[]>([]);
  const [storageData, setStorageData] = useState<ReadonlyArray<KeyValuePair>>([]);

  const loadAllStorage = async () => {

  try {

   const keys = await AsyncStorage.getAllKeys();

   const items = await AsyncStorage.multiGet(keys);

   setStorageData(items);

  } catch (error) {

   console.error('Erreur récupération AsyncStorage', error);

  }

 };

 useEffect(() => {

  loadAllStorage();

 }, []);



  /*const loadTasks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('tt');
    if (jsonValue != null) {
      setTasks(JSON.parse(jsonValue));
    } else {
      // Initialiser avec quelques tâches par défaut
      const defaultTasks = Task
      await AsyncStorage.setItem('tasks', JSON.stringify(defaultTasks));
      setTasks(defaultTasks);
    }
  } catch (e) {
    console.error('Erreur lors du chargement des tâches :', e);
  }
  };*/

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingBottom: 40,
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
    backgroundItemsGreen: {
      backgroundColor: '#18da31ff',
    },
    backgroundItemsOrange: {
      backgroundColor: '#f67214ff',
    },
    backgroundItemsRed: {
      backgroundColor: '#e20303ff',
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

  const stylesData = StyleSheet.create({

 container: { flex: 1, padding: 20, marginTop: 40 },

 scroll: { marginTop: 20 },

 empty: { fontStyle: 'italic', color: '#666' },

 item: { marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 5 },

 key: { fontWeight: 'bold' },

 value: { color: '#333' }

});


  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>
      
        <Title>Test</Title>

      </ScrollView>

       <View style={styles.container}>

   <Button title="Recharger" onPress={loadAllStorage} />

   <ScrollView>

    {storageData.length === 0 ? (

     <Text style={stylesData.empty}>Aucune donnée trouvée</Text>

    ) : (

     storageData.map(([key, value]) => (

      <View key={key} style={stylesData.item}>

       <Text style={stylesData.key}>{key}</Text>

       <Text style={stylesData.value}>{value}</Text>

      </View>

     ))

    )}

   </ScrollView>

  </View>

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


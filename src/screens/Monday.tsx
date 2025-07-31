import React from 'react';
import { Text, View, ScrollView , Button, TouchableOpacity, StyleSheet, Pressable, Image } from 'react-native';

const img1 = require('../assets/menage1.jpg');

export default function Monday() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d3c4caff',
      alignItems: 'center',
      paddingTop: 70,
      paddingBottom: 40,
    },
    text: {
      fontSize: 25,
    },
  });

  const styles2 = StyleSheet.create({
    container: {
      width: 350,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      borderRadius: 10,
    },
    backgroundItemsGreen: {
      backgroundColor: '#18da31ff',
    },
    backgroundItemsOrange: {
      backgroundColor: '#d55901ff',
    },
    backgroundItemsRed: {
      backgroundColor: '#d50202ff',
    },
    text: {
      fontSize: 15,
    },
  });

  const stylesMonday = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      //justifyContent: 'center'
    },
  });

  const stylesButton = StyleSheet.create({
    container: {
      width: 350,
      height: 100,
      margin: 20,
    },
  });

  return (
    <View style={styles.container}>

      <ScrollView>
      
        <View style={stylesMonday.container}>
          <Text style={styles.text}>Lundi</Text>
        </View>
        

        <View style={[styles2.container, styles2.backgroundItemsRed]}>

          <Text style={styles2.text}>Tâche 1</Text>

          <View>
            <Button
              title='Modifier'
              color='#3b2b55ff'
              onPress={() => console.log('Bouton pressé')}
            />
            <Button
              title='Supprimer'
              color='#ff1616ff'
              onPress={() => console.log('Bouton pressé')}
            />
          </View>

        </View>

        <View style={[styles2.container, styles2.backgroundItemsOrange]}>

          <Text style={styles2.text}>Tâche 2</Text>

          <View>
            <Button
              title='Modifier'
              color='#3b2b55ff'
              onPress={() => console.log('Bouton pressé')}
            />
            <Button
              title='Supprimer'
              color='#ff1616ff'
              onPress={() => console.log('Bouton pressé')}
            />
          </View>

        </View>

        <View style={[styles2.container, styles2.backgroundItemsOrange]}>

          <Text style={styles2.text}>Tâche 3</Text>

          <View>
            <Button
              title='Modifier'
              color='#3b2b55ff'
              onPress={() => console.log('Bouton pressé')}
            />
            <Button
              title='Supprimer'
              color='#ff1616ff'
              onPress={() => console.log('Bouton pressé')}
            />
          </View>

        </View>

        <View style={[styles2.container, styles2.backgroundItemsGreen]}>

          <Text style={styles2.text}>Tâche 4</Text>

        </View>
      </ScrollView>
    </View>
    
  );



}
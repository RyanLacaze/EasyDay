import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Monday from '../screens/Monday';
import Tuesday from '../screens/Tuesday';
import Wednesday from '../screens/Wednesday';
import Thursday from '../screens/Thursday';
import Friday from '../screens/Friday';
import Saturday from '../screens/Saturday';
import Sunday from '../screens/Sunday';
import EditPage from '../screens/EditPage';
import AddPage from '../screens/AddPage';
import Test from '../screens/Test';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Monday" component={Monday} />
        <Stack.Screen name="Tuesday" component={Tuesday} />
        <Stack.Screen name="Wednesday" component={Wednesday} />
        <Stack.Screen name="Thursday" component={Thursday} />
        <Stack.Screen name="Friday" component={Friday} />
        <Stack.Screen name="Saturday" component={Saturday} />
        <Stack.Screen name="Sunday" component={Sunday} />
        <Stack.Screen name="EditPage" component={EditPage} />
        <Stack.Screen name="AddPage" component={AddPage} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

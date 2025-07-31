import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Monday from '../screens/Monday';
import Tuesday from '../screens/Tuesday';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Monday" component={Monday} />
        <Stack.Screen name="Tuesday" component={Tuesday} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

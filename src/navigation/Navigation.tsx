import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, IssuesScreen} from '../views';

const Stack = createNativeStackNavigator<StackParamList>();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Issues" component={IssuesScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

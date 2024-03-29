import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

// Screen
import {HomeScreen} from '../';
import {DetailsScreen} from '../';

export type RootStackParams = {
  Home: undefined;
  Detail: {movieId: number};
};

const Stack = createStackNavigator<RootStackParams>();

export function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeScreen,
  IssueDetailsScreen,
  IssuesScreen,
  BookmarkScreen,
} from '../views';
import Bookmark from '../assets/images/bookmark.png';

const Stack = createNativeStackNavigator<StackParamList>();

interface IBookmarkIcon {
  navigate: any;
}

const BookmarkIcon: FC<IBookmarkIcon> = ({navigate}) => (
  <TouchableOpacity onPress={() => navigate('Bookmark')}>
    <Image source={Bookmark} style={styles.image} />
  </TouchableOpacity>
);

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Issues"
        component={IssuesScreen}
        options={({navigation: {navigate}}) => ({
          headerRight: () => <BookmarkIcon {...{navigate}} />,
        })}
      />
      <Stack.Screen
        name="Details"
        component={IssueDetailsScreen}
        options={({navigation: {navigate}}) => ({
          headerRight: () => <BookmarkIcon {...{navigate}} />,
        })}
      />
      <Stack.Screen name="Bookmark" component={BookmarkScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  image: {
    height: 22,
    width: 22,
  },
});

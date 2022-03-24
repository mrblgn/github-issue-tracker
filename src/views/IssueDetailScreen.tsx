import React, {FC, useContext} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Layout} from '../components';
import {GlobalContext} from '../context';
import {Colors} from '../style';

type IssueDetailsProps = NativeStackScreenProps<StackParamList, 'Details'>;

export const IssueDetailsScreen: FC<IssueDetailsProps> = () => {
  const {selected, bookmarked, toggleBookmark} = useContext(GlobalContext);
  const bookmarkHandler = () => selected && toggleBookmark!(selected.id);
  return (
    <Layout>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollContainer}>
        <Text>{selected?.body}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={bookmarkHandler}>
        <Text style={styles.buttonText}>
          {selected && bookmarked?.includes(selected?.id)
            ? 'Unbookmark'
            : 'Bookmark'}
        </Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: Colors.ButtonBg,
    padding: 10,
  },
  buttonText: {
    color: Colors.ButtonText,
    fontSize: 15,
  },
  container: {
    flex: 1,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    marginVertical: 12,
  },
  image: {
    height: 22,
    width: 22,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  welcome: {
    fontSize: 36,
    lineHeight: 48,
    fontWeight: '500',
    marginVertical: 22,
  },
});

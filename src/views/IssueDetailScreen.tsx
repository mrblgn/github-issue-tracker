import React, {FC, useContext} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Markdown from 'react-native-markdown-display';

import {Layout} from '../components';
import {GlobalContext} from '../context';
import {Colors} from '../style';

type IssueDetailsProps = NativeStackScreenProps<StackParamList, 'Details'>;

export const IssueDetailsScreen: FC<IssueDetailsProps> = () => {
  const {selected, bookmarked, toggleBookmark} = useContext(GlobalContext);
  const bookmarkHandler = () => selected && toggleBookmark!(selected);
  return (
    <Layout>
      <Text style={styles.header}>{selected?.title}</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
        contentContainerStyle={styles.scrollContainer}>
        <Markdown>{selected?.body}</Markdown>
      </ScrollView>
      <TouchableOpacity
        style={
          selected &&
          bookmarked?.filter(issue => issue.id === selected.id).length
            ? styles.buttonSecondary
            : styles.button
        }
        onPress={bookmarkHandler}>
        <Text
          style={
            selected &&
            bookmarked?.filter(issue => issue.id === selected.id).length
              ? styles.buttonSecondaryText
              : styles.buttonText
          }>
          {selected &&
          bookmarked?.filter(issue => issue.id === selected.id).length
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
  buttonSecondary: {
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: Colors.White,
    borderColor: Colors.ButtonBg,
    borderWidth: 1,
    padding: 10,
  },
  buttonText: {
    color: Colors.ButtonText,
    fontSize: 15,
  },
  buttonSecondaryText: {
    color: Colors.Black,
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
  header: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '500',
    marginBottom: 12,
  },
  scroll: {
    marginBottom: 12,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  welcome: {
    fontSize: 36,
    lineHeight: 48,
    fontWeight: '500',
    marginVertical: 22,
  },
});

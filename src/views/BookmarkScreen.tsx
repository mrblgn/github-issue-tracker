import React, {FC, useContext} from 'react';
import {Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {GlobalContext} from '../context';
import {Item, Layout} from '../components';

type BookmarkProps = NativeStackScreenProps<StackParamList, 'Issues'>;

export const BookmarkScreen: FC<BookmarkProps> = ({navigation: {navigate}}) => {
  const {bookmarked, setSelectedIssue} = useContext(GlobalContext);
  const onPress = (item: IGithubIssue) => {
    setSelectedIssue!(item);
    navigate('Details');
  };
  return (
    <Layout>
      {bookmarked && bookmarked.length ? (
        bookmarked.map(issue => (
          <Item
            key={issue.id}
            title={issue.title}
            onPress={() => onPress(issue)}
          />
        ))
      ) : (
        <Text>There is no Bookmarked Issue</Text>
      )}
    </Layout>
  );
};

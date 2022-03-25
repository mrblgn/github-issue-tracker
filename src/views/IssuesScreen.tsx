import React, {FC, useContext, useEffect} from 'react';
import {Text, FlatList, View, StyleSheet, Pressable} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Item, Layout, Pagination} from '../components';
import {GlobalContext} from '../context';
import {capitalize, requestIssues} from '../utils';
import {Colors} from '../style';

type IssuesProps = NativeStackScreenProps<StackParamList, 'Issues'>;

type TRenderItem = {item: IGithubIssue};

const States: TIssueState[] = ['all', 'open', 'closed'];

export const IssuesScreen: FC<IssuesProps> = ({navigation: {navigate}}) => {
  const {
    issues,
    setSelectedIssue,
    setLoading,
    setIssues,
    searchParams,
    setSearchParams,
  } = useContext(GlobalContext);
  const onPress = (item: IGithubIssue) => {
    setSelectedIssue!(item);
    navigate('Details');
  };
  const renderItem = ({item}: TRenderItem) => (
    <Item title={item.title} onPress={() => onPress(item)} />
  );
  const header = searchParams
    ? `${capitalize(searchParams.state)} Issues for ${capitalize(
        searchParams.repo,
      )}`
    : 'Issues';
  const onPageChange = (page: number) =>
    setSearchParams!({...searchParams!, page});

  useEffect(() => {
    if (searchParams && setIssues) {
      setLoading!(true);
      const {owner, repo, perPage, page, state} = searchParams;
      requestIssues(owner, repo, perPage, page, state)
        .then(response => {
          setLoading!(false);
          setIssues(response);
        })
        .catch(e => {
          console.log(e);
          setLoading!(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  return (
    <Layout>
      <Text style={styles.header}>{header}</Text>
      <View style={styles.stateBox}>
        {States.map((_state: TIssueState) => (
          <Pressable
            key={_state}
            onPress={() => setSearchParams!({...searchParams!, state: _state})}
            style={
              _state === searchParams!.state
                ? styles.boxItemSelected
                : styles.boxItem
            }>
            <Text style={styles.boxItemText}>{capitalize(_state)}</Text>
          </Pressable>
        ))}
      </View>
      <FlatList
        data={issues.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id} ${index}`}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <Pagination page={searchParams!.page} {...{onPageChange}} />
        }
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '500',
    marginBottom: 12,
  },
  stateBox: {
    backgroundColor: Colors.White,
    height: 32,
    flexDirection: 'row',
    marginBottom: 6,
    padding: 1,
    borderRadius: 6,
  },
  boxItem: {
    alignItems: 'center',
    backgroundColor: Colors.BackgroundLight,
    borderRadius: 3,
    flex: 1,
    justifyContent: 'center',
    margin: 1,
  },
  boxItemSelected: {
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  boxItemText: {
    fontSize: 15,
  },
});

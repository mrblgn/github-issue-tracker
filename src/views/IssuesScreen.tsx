import React, {FC, useContext, useState} from 'react';
import {Text, FlatList, View, StyleSheet, Pressable} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Layout} from '../components';
import {GlobalContext} from '../context';
import {Colors} from '../style';

type IssuesProps = NativeStackScreenProps<StackParamList, 'Issues'>;

type TItem = {
  title: string;
  onPress: () => void;
};

const Item: FC<TItem> = ({title, onPress}) => {
  return (
    <Pressable {...{onPress}}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{title}</Text>
      </View>
    </Pressable>
  );
};

type TState = 'all' | 'open' | 'closed';

const States: TState[] = ['all', 'open', 'closed'];

export const IssuesScreen: FC<IssuesProps> = () => {
  const {issues} = useContext(GlobalContext);
  const [state, setState] = useState<TState>('all');
  const onPress = (item: any) => console.log(item.state);
  const renderItem = ({item}: any) => (
    <Item title={item.title} onPress={() => onPress(item)} />
  );
  return (
    <Layout>
      <View style={styles.stateBox}>
        {States.map((_state: TState) => (
          <Pressable
            onPress={() => setState(_state)}
            style={_state === state ? styles.boxItemSelected : styles.boxItem}>
            <Text style={styles.boxItemText}>
              {_state.charAt(0).toUpperCase() + _state.slice(1)}
            </Text>
          </Pressable>
        ))}
      </View>
      <FlatList
        data={issues.data.filter(
          (issue: any) => state === 'all' || issue.state === state,
        )}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.White,
    marginTop: 6,
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  itemText: {
    fontSize: 15,
    lineHeight: 22,
  },
  stateBox: {
    backgroundColor: '#ffffff',
    height: 32,
    flexDirection: 'row',
    marginBottom: 6,
    padding: 1,
    borderRadius: 6,
  },
  boxItem: {
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    flex: 1,
    justifyContent: 'center',
    margin: 1,
  },
  boxItemSelected: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  boxItemText: {
    fontSize: 15,
  },
});

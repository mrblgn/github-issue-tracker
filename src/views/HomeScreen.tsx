import React, {FC, useContext, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {requestIssues} from '../utils';

import {Layout} from '../components';
import {GlobalContext} from '../context';
import {Colors} from '../style';

type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

export const HomeScreen: FC<HomeProps> = ({navigation: {navigate}}) => {
  const {setIssues, setLoading} = useContext(GlobalContext);
  const [owner, onChangeOwner] = useState<string>('');
  const [repo, onChangeRepo] = useState<string>('');

  const searchHandler = async () => {
    if (owner && repo && setIssues) {
      setLoading!(true);
      await requestIssues(owner, repo)
        .then(response => setIssues(response))
        .then(() => {
          navigate('Issues');
          setLoading!(false);
        })
        .catch(e => {
          console.log(e);
          setLoading!(false);
        });
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {'Welcome to \nGithub Issue Tracker'}
        </Text>
        <Text style={styles.description}>
          {
            'You may search github issues by after you write github repo owner and repo name to the inputs below,\n\n Happy coding!'
          }
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeOwner}
          value={owner}
          autoCapitalize="none"
          placeholder="Github Repo Owner"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeRepo}
          autoCapitalize="none"
          value={repo}
          placeholder="Github Repo"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={searchHandler}>
        <Text style={styles.buttonText}>Search</Text>
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
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  welcome: {
    fontSize: 36,
    lineHeight: 48,
    fontWeight: '500',
    marginVertical: 22,
  },
});

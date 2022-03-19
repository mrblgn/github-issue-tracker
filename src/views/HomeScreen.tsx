import {Octokit} from '@octokit/core';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {PRIVATE_KEY} from 'react-native-dotenv';

export const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const octokit = new Octokit({
      auth: PRIVATE_KEY,
    });
    // const requestUser = async () => await octokit.request('/user');
    const requestIssues = async () =>
      await octokit.request('GET /repos/{owner}/{repo}/issues', {
        owner: 'react-navigation',
        repo: 'react-navigation',
      });

    // requestUser()
    //   .then((data: any) => console.log(data))
    //   .catch(e => console.log(e));
    requestIssues()
      .then(response => console.log(response.data[0]))
      .catch(e => console.log(e));
  }, []);

  // console.log(PRIVATE_KEY);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>Hi</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

import React, {FC, ReactNode} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from '../style';

interface ILayout {
  children: ReactNode;
}
export const Layout: FC<ILayout> = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? Colors.BackgroundDark
      : Colors.BackgroundLight,
  };
  return (
    <SafeAreaView style={[styles.safeArea, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={[backgroundStyle, styles.scrollContainer]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    margin: 16,
  },
});

import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../style';

type TItem = {
  title: string;
  onPress: () => void;
};

export const Item: FC<TItem> = ({title, onPress}) => (
  <Pressable {...{onPress}}>
    <View style={styles.item}>
      <Text style={styles.itemText}>{title}</Text>
    </View>
  </Pressable>
);

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
});

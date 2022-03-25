import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../style';

interface IPagination {
  page: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<IPagination> = ({page, onPageChange}) => {
  return (
    <View style={styles.container}>
      {page > 1 && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPageChange(page - 1)}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPageChange(page + 1)}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    backgroundColor: Colors.ButtonBg,
    flex: 1,
    padding: 10,
    marginHorizontal: 4,
  },
  buttonText: {
    color: Colors.ButtonText,
    fontSize: 15,
  },
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    height: 40,
    marginTop: 12,
  },
});

import React, {FC} from 'react';
import {
  ActivityIndicator,
  Modal,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '../style';

interface ILoading {
  color?: string;
  visible: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Loading: FC<ILoading> = ({
  color = Colors.White,
  style,
  visible,
}) => (
  <Modal transparent animationType="none" {...{visible}}>
    <View style={[styles.containerCentered, style]}>
      <ActivityIndicator size="large" color={color} style={styles.margin} />
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  containerCentered: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    backgroundColor: Colors.Black05,
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 100,
    zIndex: 40,
  },
  margin: {
    margin: 16,
  },
});

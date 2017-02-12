import React from 'react';
import { View } from 'react-native';
import styles from './CardStyle';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
}

export default Card;

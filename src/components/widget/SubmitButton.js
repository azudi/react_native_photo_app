//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';


// create a component
const SubmitButton = ({isLoading, disabled, title, style, color, action}) => {
  return (
    <Pressable
      onPress={() => (!disabled && action && !isLoading ? action() : null)}
      style={{
        ...style,
        borderRadius: 10,
        overflow: 'hidden',
        opacity: disabled || isLoading ? 0.6 : 1,
      }}>
      <Text style={{color: color, marginRight: 7}}>{title}</Text>
      {isLoading ? <ActivityIndicator size="small" color="#fff" /> : null}
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default SubmitButton;

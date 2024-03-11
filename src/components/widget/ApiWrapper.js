//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { theme } from '../../theme';
import Loader from './Loader';
import AppErrorIcon from '../svgicons/AppErrorIcon';

// create a component
const ApiWrapper = props => {
  const { isLoading, isError, refresh } = props;
  return (
    <View style={styles.container}>
      {isLoading && !isError ? (
        <View style={styles.container}>
          <Text>
            <Loader />
          </Text>
        </View>
      ) : null}



      {
      !isLoading && isError ? (
        <View>
            <AppErrorIcon/>
          <Text style={{marginTop: 24}}>Oops an Error Occured</Text>
          <Pressable style={styles.pressable}
          onPress={()=>refresh()}
          >
              <Text style={styles.retry_button}>Retry</Text>
          </Pressable>
        </View>
      ) : null}



      {!isLoading && !isError ? props.children : null}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  retry_button: {
    backgroundColor: theme.primary_blue,
    color: theme.white,
    paddingVertical: 10,
    textAlign: 'center'
  },
  pressable: { borderRadius: 50, overflow: 'hidden', width: 150, marginVertical: 16}
});

//make this component available to the app
export default ApiWrapper;

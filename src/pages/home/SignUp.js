//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoginForm from '../../components/auth/LoginForm';
import SignUpForm from "../../components/auth/SignUpForm"
import AppLogo from '../../components/svgicons/AppLogo';
import {theme} from '../../theme';
import {SCR_HEIGHT} from '../../utils';

// create a component
const SignUp = () => {

  const [ login, setLogin] = useState(true)

  return (
    <View style={styles.container}>
      <View style={styles.icon_container}>
        <AppLogo />
      </View>
      <ScrollView
        scrollEnabled={true}
        decelerationRate={300}
        snapToAlignment="center"
        snapToInterval={SCR_HEIGHT - 100}
        scrollEventThrottle={16}
        style={styles.board}>
        <View style={styles.main_container}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
           <Pressable
           onPress={()=>{
            setLogin(true)
           }}
           style={ login ? styles.bright : styles.opaque }
           >
              <Text style={styles.auth_section}>LOGIN</Text>
           </Pressable>
           <Pressable
           style={ !login ? styles.bright : styles.opaque}
           onPress={()=>{
            setLogin(false)
           }}
           >
              <Text style={styles.auth_section}>SIGN UP</Text>
           </Pressable>
          </View>
          <View style={styles.inner_cont}>
            <Text style={styles.header_text}>{ login ? 'Welcome back' : 'Welcome to Blog Club'}</Text>
            <Text style={styles.title_text}>{ login ? 'Sign in with your account' : 'Sign up for an account'} </Text>
           { login ? <LoginForm /> :  <SignUpForm/> }
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  icon_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  opaque:{
    opacity: 0.5
  },
  bright: {
    opacity: 1
  },
  main_container: {
    backgroundColor: theme.primary_blue,
    marginTop: 150,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  container: {
    flex: 1,
  },
  inner_cont: {
    backgroundColor: theme.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 28,
    paddingTop: 36,
  },
  header_text: {
    fontSize: 22,
    paddingBottom: 16,
    fontFamily: 'WorkSans-Medium'
  },
  title_text: {
    fontSize: 13,
    fontFamily: 'WorkSans-Regular'
  },
  auth_section: {
    paddingVertical: 14,
    fontSize: 21,
    textAlign: 'center',
    color: theme.white,
    fontFamily: 'WorkSans-Medium'
  },
  board: {position: 'absolute', left: 0, width: '100%', top: 0, height: '100%'},
});

//make this component available to the app
export default SignUp;

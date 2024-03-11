//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { theme } from '../../theme';
import GoogleIcon from '../svgicons/GoogleIcon';
import SubmitButton from '../widget/SubmitButton';
import { useNavigation } from '@react-navigation/native';
import { routeNames } from '../../navigation/names';



// create a component
const LoginForm = () => {
  const navigation = useNavigation()
  const [focus, setFocus] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <Text style={styles.input_label}>Username</Text>
        <TextInput
          onFocus={event => {
            setFocus('username');
          }}
          style={[
            styles.text_input,
            {
              borderBottomColor:
                focus == 'username'
                  ? theme.primary_blue
                  : 'rgba(100,100,100,0.4)',
            },
          ]}
          placeholder="jonathandavis@gmail.com"
        />
      </View>

      <View style={styles.input_container}>
        <Text style={styles.input_label}>Password</Text>
        <TextInput
          secureTextEntry={true}
          onFocus={event => {
            setFocus('password');
          }}
          style={[
            styles.text_input,
            {
              borderBottomColor:
                focus == 'password'
                  ? theme.primary_blue
                  : 'rgba(100,100,100,0.4)',
            },
          ]}
          placeholder="**********"
        />
      </View>

      <View style={{ marginTop: 48 }}></View>
      <SubmitButton
        title="LOGIN"
        isLoading={false}
        disabled={false}
        style={styles.button}
        color="white"
      />

      <Pressable
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 12,
        }}
        onPress={()=> navigation.navigate(routeNames.sections)}
      >
        <Text style={{ fontFamily: "WorkSans-Regular"}}>Forgot your password? </Text>
        <Text style={{ color: theme.primary_blue, fontFamily: "WorkSans-Regular" }}>Reset here</Text>
      </Pressable>

      <Text
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          opacity: 0.6,
          paddingVertical: 24,
        }}
      >
        Or sign in with
      </Text>

      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 7,
            borderRadius: 7,
            marginBottom: 48,
          },
          styles.shadow,
        ]}
      >
        <GoogleIcon width={30} />
        <Text style={{ marginLeft: 10 }}>SIGN WITH GOOGLE</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 52,
  },
  text_input: {
    paddingVertical: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: 'rgba(100,100,100,0.4)',
    fontFamily: 'WorkSans-Regular',
  },
  input_label: {
    opacity: 0.6,
    fontFamily: 'WorkSans-Regular',
  },
  input_container: {
    marginVertical: 13,
  },
  button: {
    backgroundColor: theme.primary_blue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  shadow: {
    shadowOffset: { width: 0, height: 3 },
    shadowColor: 'rgba(170,170,170,0.7)',
    shadowOpacity: 0.35,
    elevation: 20,
    zIndex: 999,
    shadowRadius: 10,
    // background color must be set
    backgroundColor: 'white', // invisible color
  },
});

//make this component available to the app
export default LoginForm;

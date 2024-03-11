import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { AppProvider } from '../../contextProviver/AppContext';
import InfoIcon from '../svgicons/InfoIcon';

export default function Toast({props}) {
 const { app, setApp} = useContext(AppProvider)

  let interval;
  useEffect(() => {
    interval = setTimeout(() => {
      if (!app?.toast?.action) {
        clearTimeout(interval);
        return;
      }
      clearTimeout(interval);
     setApp({...app, toast : { action: false, status: 'success', msg: 'done successfully'}})
    }, 5000);
  }, [app?.toast?.action]);

  const hideToast = () => {
    setApp({...app, toast : {action: false, status: 'success', msg: 'done successfully'}})
    clearTimeout(interval);
  };

  const chooseColor = val => {
    let statusReturn = null;
    switch (val) {
      case 'success':
        statusReturn = '#5cb85c';
        break;
      case 'danger':
        statusReturn = '#d9534f';
        break;
      case 'info':
        statusReturn = '#aaacc9';
        break;
      default:
        statusReturn = '#5cb85c';
        break;
    }
    return statusReturn;
  };

  return (
    <>
      { app?.toast?.action ? (
        <View style={style.toast_container}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <InfoIcon color={chooseColor(app?.toast?.status)} />
            <Text style={style.info_text}>{app.toast.msg}</Text>
          </View>
          <Pressable  onPress={() => hideToast()}>
            <Text style={{width: 20}}>&#10006;</Text>
          </Pressable>
        </View>
      ) : null}
    </>
  );
}

const style = StyleSheet.create({
  toast_container: {
    position: 'absolute',
    top: Platform.OS == 'ios' ? 50 : 10,
    right: 10,
    padding: 10,
    width: '80%',
    zIndex: 1000,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  info_text: {
    fontFamily: 'WorkSans-Medium',
    paddingRight: 10,
    paddingLeft: 7,
    fontSize: 14,
  },
});

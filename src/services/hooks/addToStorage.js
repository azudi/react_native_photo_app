import AsyncStorage from '@react-native-async-storage/async-storage';

export default AddtoStorage = async (name, data) => {
  let storageArray = [];
  try {
    const prevCart = await AsyncStorage.getItem(name);
    storageArray = JSON.parse(prevCart) || [];
    const getStorage = [...storageArray, data];
    console.log('kkkkkkkkkkk-----', getStorage)
    await AsyncStorage.setItem(name , JSON.stringify(getStorage));
  } catch (e) {
    console.log(e);
  }
};
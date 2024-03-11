import AsyncStorage from '@react-native-async-storage/async-storage';

export default RemovetoStorage = async (name, data) => {
  try {
    await AsyncStorage.removeItem(name)
  } catch (error) {
    //
  }
};

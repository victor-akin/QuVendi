import AsyncStorage from '@react-native-community/async-storage';

export const access_token_storage = AsyncStorage.getItem('access_token')

// AsyncStorage.setItem('access_token', 'testtoken')
//   .then(data => {

//   })
//   .catch(err => {

//   })

// console.log(AsyncStorage.clear())
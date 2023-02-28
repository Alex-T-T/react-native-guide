// import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import  RegistarationScreen  from './components/Screens/auth/RegistrationScreen';
import { useState, useCallback, useEffect } from 'react';
// import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// const image = require('./assets/images/PhotoBG.png')

SplashScreen.preventAutoHideAsync();

// const initialState = {
//     login: '',
//     email: '',
//     password: '',
// }


export default function App() {
  // const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  // const [state, setState] = useState(initialState)
  
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  // const {width} = useWindowDimensions()

  // const screenOrientation = width < 767 ? 'portrait': 'landscape'
  // useEffect(() => {
  //   console.log('height => ', height)
  //   console.log("width =>", width);
  // }, [width])
  

  // const onSubmit = (data) => {
  //   const { login, email, password } = data
  //   console.log('login =>', login);
  //   if (login.length === 0 || email.length === 0 || password.length === 0) {
  //     alert('Check your registration info')
  //     return 
  //   }
  //   console.log('login2 =>', login);

  //   setState(data);

  // }
// ============== KEYBOARD ======================
  // const keyboardHide = () => {
  //   setIsShowKeyboard(false);
  //   Keyboard.dismiss();
  // }
//===============================================
  
// ===================== FONTS ==================
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
// =====================================================
  return (
    <View style={{flex: 1}}  onLayout={onLayoutRootView}>
      <RegistarationScreen />
    </View>
  );
}
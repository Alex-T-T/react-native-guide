// import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import  {RegistrationScreen, LoginScreen}  from './components/Screens/auth';
import { useState, useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const image = require('./assets/images/PhotoBG.png')

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

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
  // return (
  //   <View style={{flex: 1}}  onLayout={onLayoutRootView}>
  //     {/* <RegistrationScreen /> */}
  //     <LoginScreen/>
  //   </View>
  // );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration" onLayout={onLayoutRootView}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        {/* <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="CreatePosts" component={CreatePostsScreen} />
        <Stack.Screen name="Comments" component={CommentsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )

}
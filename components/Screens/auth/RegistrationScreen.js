import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {ImageBackground, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// import * as SplashScreen from 'expo-splash-screen';

const image = require('../../../assets/images/PhotoBG.png')

// SplashScreen.preventAutoHideAsync();

export default function RegistarationScreen({navigation}) {
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isFocusedLogin, setIsFocusedLogin] = useState(false)
    const [isFocusedEmail, setIsFocusedEmail] = useState(false)
    const [isFocusedPassword, setIsFocusedPassword] = useState(false)
    const [isShowKeyboard, setIsShowKeyboard] = useState(false)

    const loginRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("login =>", login);
        if (login.length === 0 || email.length === 0 || password.length === 0) {
            alert('Check your registration info')
            return 
        }
        setLogin('')
        setEmail('')
        setPassword('')
        keyboardHide()
    }

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container}>
                <ImageBackground style={styles.bgdImage} source={image}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <View style={{...styles.form, paddingBottom: isShowKeyboard ? 32 : 78}}>
                            <Text style={styles.title}> Registration </Text>
                            <View>
                                <TextInput style={{...styles.input, borderColor: isFocusedLogin ? '#FF6C00' : '#E8E8E8'}}
                                    placeholder='Login'
                                    value={login}
                                    onFocus={() => {
                                        setIsShowKeyboard(true)
                                        setIsFocusedLogin(true)
                                        }}
                                    onBlur={() => setIsFocusedLogin(false)}
                                    returnKeyType="next"
                                    onSubmitEditing={() => emailRef.current.focus()} 
                                    onChangeText={(value) => setLogin(value)}
                                    ref = {loginRef}
                                    />
                            </View>
                            <View>
                                <TextInput style={{...styles.input, borderColor: isFocusedEmail ? '#FF6C00' : '#E8E8E8'}}
                                    placeholder='Email'
                                    value={email}
                                    onFocus={() => {
                                        setIsShowKeyboard(true)
                                        setIsFocusedEmail(true)
                                        }}
                                    onBlur={() => setIsFocusedEmail(false)}
                                    onChangeText={(value) => setEmail(value)}
                                    returnKeyType="next"
                                    onSubmitEditing={() => passRef.current.focus()} 
                                    ref={emailRef}
                                />
                            </View>
                            <View>
                                <TextInput style={{...styles.input, borderColor: isFocusedPassword ? '#FF6C00' : '#E8E8E8'}}
                                    secureTextEntry={true}
                                    placeholder='Password'
                                    value={password}
                                    onFocus={() => {
                                        setIsShowKeyboard(true)
                                        setIsFocusedPassword(true)
                                        }}
                                    onBlur={() => setIsFocusedPassword(false)}
                                    onChangeText={(value) => setPassword(value)}
                                    onSubmitEditing={onSubmit} 
                                    ref={passRef}
                                />
                            </View>
                            {!isShowKeyboard && 
                            <>
                                <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={styles.btn}
                                        onPress={onSubmit}>
                                    <Text style={styles.btnText}>Register</Text>
                                </TouchableOpacity>
                                <Text style={styles.login} onPress={() => navigation.navigate('Login')}>Are you have an account? Login</Text> 
                            </>}
                        </View>
                    </KeyboardAvoidingView>
                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'Roboto-Regular',
    },

    bgdImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
    },

    form: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 92,
    },

    title: {
        color: '#212121',
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        letterSpacing: 0.01,
    },

    input: {
        margin: 16,
        padding: 16,
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: '#E8E8E8', 
        borderRadius: 8,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,

    },
    focused: {
        borderColor: '#FF6C00',
    },

    btn: {
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        margin: 16,
        height: 51,
        justifyContent: 'center',
    },

    btnText: {
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
    },

    login: {
        textAlign: 'center',
        color: '#1B4371',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
    }
});
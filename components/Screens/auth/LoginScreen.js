import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {ImageBackground, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const image = require('../../../assets/images/PhotoBG.png')

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isFocusedEmail, setIsFocusedEmail] = useState(false)
    const [isFocusedPassword, setIsFocusedPassword] = useState(false)
    const [isShowKeyboard, setIsShowKeyboard] = useState(false)

    const emailRef = useRef()
    const passRef = useRef()

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("login =>", login)
        if (email.length === 0 || password.length === 0) {
            alert('Check your login info')
            return 
        }
        setEmail('')
        setPassword('')
        keyboardHide()
    }

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container}>
                <ImageBackground style={styles.bgdImage} source={image}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <View style={{...styles.form, marginBottom: isShowKeyboard ? 32 : 0}}>
                            <Text style={styles.title}> Sign In </Text>
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
                                    <Text style={styles.btnText}>Sign In</Text>
                                </TouchableOpacity>
                                <Text style={styles.registerText} onPress={() => navigation.navigate('Registration')}>Are you not register yet? Registration</Text> 
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
        paddingTop: 32,
        paddingBottom: 144,
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

    registerText: {
        textAlign: 'center',
        color: '#1B4371',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
    }
});
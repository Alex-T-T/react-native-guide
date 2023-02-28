import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function LoginScreen() {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{...styles.form, paddingBottom: isShowKeyboard ? 0 : 78}}>
                <Text style={styles.title}> Login </Text>
                <View>
                    <TextInput style={styles.input}
                        placeholder='Email'
                        onFocus={()=> setIsShowKeyboard(true)}
                    />
                </View>
                <View>
                    <TextInput style={styles.input}
                        secureTextEntry={true}
                        placeholder='Password'
                        onFocus={()=> setIsShowKeyboard(true)
                        }
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={()=> setIsShowKeyboard(false)}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.register}>Are you haven't an account? Register</Text>

            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 92,
    },

    title: {
        color: '#212121',
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        // fontWeight: 500,
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
        
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        // fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
    },

    register: {
        textAlign: 'center',
        color: '#1B4371',
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        // fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,

    }



});
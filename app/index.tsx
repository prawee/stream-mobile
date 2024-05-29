import { Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Button, Dimensions, Alert } from 'react-native'
import React, { useState } from 'react'
import Spinner from 'react-native-loading-spinner-overlay';
import Colors from '@/constants/Colors';
import { useAuth } from '@/context/AuthContext';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Home = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { onLogin, onRegister } = useAuth();

    const onSignInPress = async () => {
        setLoading(true);

        try {
            const result = await onLogin!(email, password);
            console.log('onLogin ', result);
        } catch (e) {
            Alert.alert('Error', 'Could not login');
        } finally {
            setLoading(false);
        }
    };

    const onSignUpPress = async () => {
        setLoading(true);

        try {
            const result = await onRegister!(email, password);
            console.log('onRegister ', result);
        } catch (e) {
            Alert.alert('Error', 'Could not register');
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Spinner
                visible={loading}
                textContent={'Loading...'}
                textStyle={{ color: '#FFF' }}
            />
            <Text style={styles.header}>Video Calling</Text>
            <Text style={styles.subHeader}>The fastest way to meet.</Text>
            <TextInput
                autoCapitalize="none"
                placeholder="prawee@teohong.com"
                value={email}
                onChangeText={setEmail}
                style={styles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.inputField}
            />
            <TouchableOpacity onPress={onSignInPress} style={styles.button}>
                <Text style={{ color: '#fff'}}>Sign In</Text>
            </TouchableOpacity>
            <Button 
                title="Don't have an account? Sign Up" 
                onPress={onSignUpPress}
                color={Colors.primary}
            />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingHorizontal: WIDTH > HEIGHT ? '40%' : 20,
        justifyContent: 'center',
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10
    },
    subHeader: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 40
    },
    inputField: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 4,
        padding: 10
    },
    button: {
        marginVertical: 15,
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 12,
        borderRadius: 4
    }
});

export default Home;
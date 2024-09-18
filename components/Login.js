import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import axios
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://annadaata-backend.onrender.com/api/users/login'; 

export default function LoginComponent() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  const handleLoginButton = async () => {
    setLoading(true); // Set loading to true when request starts
    try {
      const response = await axios.post(API_URL, {
        emailAddress,
        password,
      });

      if (response.status === 200) {
        const { token, user } = response.data;
        // Store token and email in local storage or a global state
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('email', emailAddress);
        navigation.navigate('FarmerDashboard');
      } else {
        Alert.alert('Login Failed', response.data.message || 'Unknown error occurred');
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        Alert.alert('Error', `Server responded with status ${error.response.status}: ${error.response.data.message}`);
      } else if (error.request) {
        Alert.alert('Error', 'No response received from the server');
      } else {
        Alert.alert('Error', `Error: ${error.message}`);
      }
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground 
          source={require('../images/slider.jpg')}
          style={styles.image}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.title}>Annadaata</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Let's Connect With Us!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email or Phone Number"
            keyboardType="email-address"
            value={emailAddress}
            onChangeText={(text) => setEmailAddress(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOffIcon size={20} color="gray" />
            ) : (
              <EyeIcon size={20} color="gray" />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginButton} disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('../images/google-logo.png')} style={styles.googleLogo} />
        <Text style={styles.googleButtonText}>Sign up with Google</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <Text onPress={handleSignUp} style={styles.signupLink}>Sign Up</Text>
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  imageContainer: {
    height: '33%',
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#6b6b6b',
    fontSize: 14,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#044c0d',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#7d7d7d',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    paddingVertical: 12,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  signupText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#044c0d',
  },
  signupLink: {
    color: '#044c0d',
    fontWeight: '600',
  },
});

import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function Component() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Register'); 
  };

  const handleLoginButton = () => {
    navigation.navigate('FarmerDashboard'); 
  };

  return (
    <View style={styles.container}>
      {/* Image that covers the entire view */}
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

      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Let's Connect With Us!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email or Phone Number"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
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
        
        {/* Make the button trigger login action */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Or Divider */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      {/* Google Sign In Button */}
      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('../images/google-logo.png')} style={styles.googleLogo} />
        <Text style={styles.googleButtonText}>Sign up with Google</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <Text onPress={handleGetStarted} style={styles.signupLink}>Sign Up</Text>
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
    backgroundColor: '#B5E550',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#000',
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
    color: '#6b6b6b',
  },
  signupLink: {
    color: '#B5E550',
    fontWeight: '600',
  },
});

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

export default function Component() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [accountType, setAccountType] = useState(null);
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!termsAccepted) {
      Alert.alert('Error', 'You must accept the terms and conditions.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('https://annadaata-backend.onrender.com/api/users/register', {
        accountType,
        fullName,
        emailAddress,
        mobileNumber,
        password,
        termsAccepted,
      });
      // Handle successful response
      Alert.alert('Success', 'Account created successfully.');
      navigation.navigate('Login'); // Navigate to the login screen
    } catch (error) {
      // Handle error response
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        Alert.alert('Error', error.response.data.message || 'Something went wrong.');
      } else if (error.request) {
        // The request was made but no response was received
        Alert.alert('Error', 'Network error. Please try again.');
      } else {
        // Something happened in setting up the request that triggered an Error
        Alert.alert('Error', 'An unexpected error occurred.');
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Annadaata</Text>
        </View>
      </View>

      {/* Main Content inside ScrollView */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subTitle}>Please create your account</Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Account Type</Text>
            <RNPickerSelect
              onValueChange={(value) => setAccountType(value)}
              items={[
                { label: 'Farmer', value: 'Farmer' },
                { label: 'Buyer', value: 'Buyer' }
              ]}
              placeholder={{ label: 'Select an account type...', value: null }}
              style={pickerSelectStyles}
              value={accountType}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Full Name" 
              value={fullName}
              onChangeText={setFullName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Email Address" 
              keyboardType="email-address"
              value={emailAddress}
              onChangeText={setEmailAddress}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mobile Number</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Mobile Number" 
              keyboardType="phone-pad"
              value={mobileNumber}
              onChangeText={setMobileNumber}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.icon}>
                {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.icon}>
                {showConfirmPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setTermsAccepted(!termsAccepted)}
          >
            <View style={[styles.checkbox, termsAccepted && styles.checkboxChecked]} />
            <Text style={styles.checkboxLabel}>I agree to the terms & conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text onPress={() => navigation.navigate('Login')} style={styles.footerLink}>Login</Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 50,
  },
  logoText: {
    fontSize: 32,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  passwordContainer: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: '#4CAF50',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#666666',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666666',
  },
  footerLink: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#000000',
  },
  inputAndroid: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#000000',
  },
  placeholder: {
    color: '#666666',
  },
});

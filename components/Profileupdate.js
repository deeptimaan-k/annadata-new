import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function UserProfileEditPage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    whatsapp: '+1 (555) 987-6543',
    address: '123 Farm Road, Harvest County, AG 12345',
    image: 'https://via.placeholder.com/150', // Use a valid image URL or local asset
    otp: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (name, value) => {
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSendOtp = () => {
    // Simulate sending OTP
    Alert.alert('OTP Sent', 'A one-time password has been sent to your phone.');
    setOtpSent(true);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setErrors({});
    setSuccessMessage('');

    // Simulating form validation
    const newErrors = {};
    if (!user.name.trim()) newErrors.name = 'Name is required';
    if (!user.email.trim()) newErrors.email = 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(user.email)) newErrors.email = 'Invalid email format';
    if (!user.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!user.otp.trim()) newErrors.otp = 'OTP is required';
    if (user.otp.trim().length !== 6) newErrors.otp = 'OTP must be 6 digits';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('Profile updated successfully!');
      // Here you would typically update the user profile via an API call
    }, 1500);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <View style={styles.fixnav}>
        <TouchableOpacity style={styles.headerButton}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        <View style={styles.card}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: user.image }} style={styles.avatar} />
            <TouchableOpacity style={styles.changePhotoButton}>
              <Feather name="camera" size={16} color="#34D399" />
              <Text style={styles.changePhotoText}> Change Photo</Text>
            </TouchableOpacity>
          </View>

          {/* Form Fields */}
          <View style={styles.form}>
            {/* Name Field */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={[styles.input, errors.name && styles.errorInput]}
                value={user.name}
                onChangeText={(text) => handleChange('name', text)}
              />
              {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
            </View>

            {/* Email Field */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={[styles.input, errors.email && styles.errorInput]}
                value={user.email}
                onChangeText={(text) => handleChange('email', text)}
                keyboardType="email-address"
              />
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>

            {/* Phone Field */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Phone</Text>
              <TextInput
                style={[styles.input, errors.phone && styles.errorInput]}
                value={user.phone}
                onChangeText={(text) => handleChange('phone', text)}
                keyboardType="phone-pad"
              />
              {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
            </View>

            {/* WhatsApp Field */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>WhatsApp</Text>
              <TextInput
                style={styles.input}
                value={user.whatsapp}
                onChangeText={(text) => handleChange('whatsapp', text)}
                keyboardType="phone-pad"
              />
            </View>

            {/* Address Field */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={styles.textarea}
                value={user.address}
                onChangeText={(text) => handleChange('address', text)}
                multiline
                numberOfLines={3}
              />
            </View>

            {/* Send OTP Button */}
            <TouchableOpacity
              style={styles.sendOtpButton}
              onPress={handleSendOtp}
              disabled={otpSent}
            >
              <Text style={styles.sendOtpText}>
                {otpSent ? 'OTP Sent' : 'Send OTP'}
              </Text>
            </TouchableOpacity>

            {/* OTP Field */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>One-Time Password (OTP)</Text>
              <View style={styles.otpContainer}>
                <Feather name="lock" size={16} color="#9CA3AF" style={styles.lockIcon} />
                <TextInput
                  style={[styles.input, styles.otpInput, errors.otp && styles.errorInput]}
                  value={user.otp}
                  onChangeText={(text) => handleChange('otp', text)}
                  maxLength={6}
                  keyboardType="numeric"
                  placeholder="Enter 6-digit OTP"
                />
              </View>
              {errors.otp && <Text style={styles.errorText}>{errors.otp}</Text>}
            </View>

            {/* Success Message */}
            {successMessage ? (
              <View style={styles.successMessage}>
                <Text style={styles.successText}>{successMessage}</Text>
              </View>
            ) : null}

            {/* Submit Button */}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <ActivityIndicator size="small" color="#fff" style={{ marginRight: 8 }} />
                  <Text style={styles.submitButtonText}>Updating...</Text>
                </>
              ) : (
                <Text style={styles.submitButtonText}>Save Changes</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// Internal Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECFDF5',
  },
  // header: {
  //   backgroundColor: '#34D399',
  //   padding: 16,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  header: {
    backgroundColor: '#059669',
    padding: 16,
  },
  fixnav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 25,
  },
  headerButton: {
    paddingRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  mainContent: {
    padding: 16,
    flexGrow: 1, // Allows the ScrollView to scroll all content
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    elevation: 2,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#E5E7EB',
  },
  changePhotoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  changePhotoText: {
    color: '#34D399',
    fontSize: 16,
  },
  form: {
    width: '100%',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    color: '#065F46',
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#111827',
  },
  errorInput: {
    borderColor: '#EF4444',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    marginTop: 4,
  },
  textarea: {
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#111827',
    textAlignVertical: 'top',
  },
  otpContainer: {
    position: 'relative',
  },
  lockIcon: {
    position: 'absolute',
    left: 12,
    top: 14,
  },
  otpInput: {
    paddingLeft: 40,
  },
  successMessage: {
    backgroundColor: '#D1FAE5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  successText: {
    color: '#065F46',
    fontSize: 16,
  },
  sendOtpButton: {
    backgroundColor: '#059669',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  sendOtpText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#059669',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

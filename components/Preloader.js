import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function FarmFreshApp() {
  const logoScale = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation(); // Initialize useNavigation

  useEffect(() => {
    // Logo scaling animation
    Animated.timing(logoScale, {
      toValue: 1,
      duration: 2000,
      easing: Easing.elastic(1.5),
      useNativeDriver: true,
    }).start();

    // Text fade-in animation
    Animated.timing(textOpacity, {
      toValue: 1,
      duration: 1500,
      delay: 1000,
      useNativeDriver: true,
    }).start();

    // Redirect after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Welcome'); // Navigate to the 'Welcome' screen
    }, 3000);

    // Clean up timer
    return () => clearTimeout(timer);
  }, [logoScale, textOpacity, navigation]);

  return (
    <View style={styles.container}>
      {/* Logo animation */}
      <Animated.View style={[styles.logoContainer, { transform: [{ scale: logoScale }] }]}>
        <Image source={require('../images/logo.png')} style={styles.logo} />
      </Animated.View>

      {/* Text animation */}
      <Animated.View style={[styles.textContainer, { opacity: textOpacity }]}>
        <Text style={styles.text}>Freshness from the farm</Text>
        <Text style={styles.text}>Directly to the market</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6fae6',
  },
  logoContainer: {
    flex: 1, // Takes the available space, keeping the logo centered
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 75,
  },
  textContainer: {
    position: 'absolute',
    bottom: 50, // Adjust the value as per your requirement
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#006400',
    fontStyle: 'italic',
    textAlign: 'center',
    // marginVertical: 10,
  },
});

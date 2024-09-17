import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { ArrowRight } from 'lucide-react-native'; // You may need to use a different icon library for React Native
import { useNavigation } from '@react-navigation/native';



export default function AnnadaataScreen() {
  const navigation = useNavigation();
  const handleGetStarted = () => {
    navigation.navigate('Login'); 
  };
  return (
    <View style={styles.container}>
      {/* Image background */}
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../images/hero.jpg')} // Use an actual image file, not SVG
          style={styles.imageBackground}
        >
          {/* Curved white container at the bottom */}
          <View style={styles.curvedContainer} />
        </ImageBackground>
      </View>

      {/* Text and Button */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Annadaata</Text>
        <Text style={styles.subtitle}>freshness from the farm, directly to the market</Text>

        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
          <ArrowRight size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  curvedContainer: {
    height: 64,
    backgroundColor: 'white',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 22,
    color: '#7D7D7D',
    fontStyle: 'italic',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#38A169',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // for Android shadow
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
});
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 


export default function ProductAdditionPage() {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate('FarmerDashboard'); 
  };
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('kg');
  const [availableFrom, setAvailableFrom] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.navfix}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons onPress={handleBack} name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Product</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Category */}
        <Text style={styles.label}>Category*</Text>
        <RNPickerSelect
          onValueChange={(value) => setCategory(value)}
          items={[
            { label: 'Vegetables', value: 'vegetables' },
            { label: 'Fruits', value: 'fruits' },
            { label: 'Land', value: 'land' },
            { label: 'Crops', value: 'crops' },
            { label: 'Spices', value: 'spices' },
            { label: 'Others', value: 'others' },
          ]}
          style={pickerSelectStyles}
        />

        {/* Title */}
        <Text style={styles.label}>Enter Title*</Text>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input} 
            placeholder="Enter Title" 
            value={title} 
            onChangeText={setTitle}
          />
        </View>

        {/* Description */}
        <Text style={styles.label}>Enter Description*</Text>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={[styles.input, styles.textarea]} 
            placeholder="Enter Description" 
            value={description} 
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Quantity */}
        <Text style={styles.label}>Item Quantity*</Text>
        <View style={styles.quantityWrapper}>
          <TextInput 
            style={[styles.input, styles.quantityInput]} 
            placeholder="Quantity" 
            value={quantity} 
            onChangeText={setQuantity}
          />
          
        </View>

        {/* Available From */}
        <Text style={styles.label}>Available From*</Text>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input} 
            placeholder="YYYY-MM-DD" 
            value={availableFrom} 
            onChangeText={setAvailableFrom}
          />
          <Ionicons name="calendar-outline" size={24} color="#4CAF50" style={styles.inputIcon} />
        </View>

        {/* Mobile No */}
        <Text style={styles.label}>Enter Mobile No*</Text>
        <View style={styles.inputWrapper}>
          
          <TextInput 
            style={[styles.input, { flex: 1, marginLeft: 10 }]} 
            placeholder="Enter Mobile No" 
            value={mobileNo} 
            onChangeText={setMobileNo}
          />
        </View>

        {/* Address */}
        <Text style={styles.label}>Enter Address*</Text>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input} 
            placeholder="Enter Address" 
            value={address} 
            onChangeText={setAddress}
          />
        </View>

        {/* Upload Image */}
        <Text style={styles.label}>Upload Image*</Text>
        <TouchableOpacity style={styles.uploadBox}>
          <MaterialCommunityIcons name="upload" size={40} color="#4CAF50" />
          <Text style={styles.uploadText}>Click or drag file to upload</Text>
        </TouchableOpacity>

        {/* Save Button */}
        <Button mode="contained" onPress={() => {}} style={styles.saveButton}>
          POST
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    backgroundColor: '#044c0d',
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  navfix: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:12
  },
  iconButton: { marginRight: 16 },
  headerTitle: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  content: { padding: 16 },
  label: { fontSize: 16, color: '#4CAF50', marginBottom: 8 },
  input: { 
    borderWidth: 1, 
    borderColor: '#ddd', 
    padding: 12, 
    borderRadius: 8, 
    marginBottom: 16, 
    backgroundColor: 'white' 
  },
  inputWrapper: { position: 'relative', marginBottom: 16 },
  inputIcon: { position: 'absolute', right: 10, top: '50%', transform: [{ translateY: -12 }] },
  textarea: { height: 100 },
  quantityWrapper: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  quantityInput: { flex: 1, marginRight: 10 },
  uploadBox: { 
    borderWidth: 2, 
    borderColor: '#ddd', 
    borderStyle: 'dashed', 
    borderRadius: 8, 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#fff',
    marginBottom: 20 
  },
  uploadText: { marginTop: 10, color: '#888' },
  saveButton: { marginTop: 20, backgroundColor: '#044c0d' }
});

const pickerSelectStyles = {
  inputIOS: { color: 'black', padding: 12, borderRadius: 8, backgroundColor: 'white', marginBottom: 16 },
  inputAndroid: { color: 'black', padding: 12, borderRadius: 8, backgroundColor: 'white', marginBottom: 16 },
};



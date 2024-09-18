import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useRoute } from '@react-navigation/native';
import { Linking, Alert } from 'react-native';

// Simplified function for handling phone calls
const handleCall = (phoneNumber) => {
  if (!phoneNumber) {
    Alert.alert('No phone number provided');
    return;
  }

  const url = `tel:${phoneNumber}`;

  Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) {
        Alert.alert('Phone call not supported');
      } else {
        return Linking.openURL(url);
      }
    })
    .catch(err => console.error('Error opening phone call:', err));
};

export default function VegetableProductDetails() {
  const route = useRoute();
  const { product } = route.params;

  if (!product) {
    return <Text>No product data available</Text>;
  }

  // Function to handle WhatsApp
  const handleWhatsapp = () => {
    const url = `whatsapp://send?phone=${product.farmer.whatsapp}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.log('WhatsApp not installed');
        }
      })
      .catch((err) => console.error('Error opening WhatsApp:', err));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.navfix}>
          <TouchableOpacity style={styles.headerButton}>
            <ArrowLeft width={24} height={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Product Details</Text>
          <TouchableOpacity style={styles.headerButton}>
            {/* <ShoppingCart width={24} height={24} color="white" /> */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Main content */}
      <ScrollView style={styles.main}>
        <View style={styles.productContainer}>
          <Image
            source={{ uri: product.imageUrls ? `https://drive.google.com/uc?export=view&id=${product.imageUrls[0]}` : 'https://via.placeholder.com/300x200' }}
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>{product.name}</Text>
          </View>

          <Text style={styles.guaranteeText}>
            Estimate price Rs. {product.price} per/kg{'\n'}
            {product.farmer.fullName}{'\n'}
            {product.farmer.address}{'\n'}
            {product.farmer.mobileNumber}{'\n'}
          </Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.addToCartButton} onPress={() => handleCall(product.farmer.mobileNumber)}>
              <Text style={styles.addToCartText}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToCartButton} onPress={handleWhatsapp}>
              <Text style={styles.addToCartText}>Whatsapp</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Product Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Product Description</Text>
          <Text style={styles.descriptionText}>
            {product.description}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FDF4",
  },
  navfix: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  header: {
    backgroundColor: "#044c0d",
  },
  headerButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  main: {
    padding: 16,
  },
  productContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  productImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#065F46",
  },
  guaranteeText: {
    color: "#065F46",
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  addToCartButton: {
    backgroundColor: "#044c0d",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 9999,
  },
  addToCartText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  descriptionContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#065F46",
    marginBottom: 8,
  },
  descriptionText: {
    color: "#065F46",
    fontSize: 14,
  },
});

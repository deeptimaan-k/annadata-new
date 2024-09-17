import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { ArrowLeft, Heart, ShoppingCart, Minus, Plus, Star } from "lucide-react-native";

export default function VegetableProductDetails() {
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
          <ShoppingCart width={24} height={24} color="white" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>

      {/* Main content */}
      <ScrollView style={styles.main}>
        <View style={styles.productContainer}>
          <Image
            source={{ uri: "/placeholder.svg?height=200&width=300" }}
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>Fresh Broccoli</Text>
            <TouchableOpacity>
              <Heart width={24} height={24} color="#34D399" />
            </TouchableOpacity>
          </View>
          <Text style={styles.productWeight}>500 gm</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>$2.99</Text>
            <View style={styles.badgeAvailable}>
              <Text style={styles.badgeAvailableText}>Available on fast delivery</Text>
            </View>
          </View>
          <View style={styles.ratingContainer}>
            {[...Array(4)].map((_, index) => (
              <Star key={index} width={20} height={20} color="#FBBF24" fill="#FBBF24" />
            ))}
            <Star width={20} height={20} color="#D1D5DB" />
            <Text style={styles.ratingText}>4.2 Rating</Text>
          </View>
          <Text style={styles.guaranteeText}>
            100% satisfaction guarantee. If you experience any issues with freshness, quality, or delivery, we'll make it right.
            <Text style={styles.readMoreText}> Read more</Text>
          </Text>
          <View style={styles.quantityContainer}>
            <View style={styles.quantityControls}>
              <TouchableOpacity>
                <Minus width={24} height={24} color="#34D399" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>1</Text>
              <TouchableOpacity>
                <Plus width={24} height={24} color="#34D399" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Product Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Product Description</Text>
          <Text style={styles.descriptionText}>
            Our fresh broccoli is hand-picked from local farms, ensuring the highest quality and nutritional value. 
            Rich in vitamins and minerals, this versatile vegetable is perfect for steaming, roasting, or adding to your favorite recipes.
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
  navfix:{
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:30
  },
  header: {
    backgroundColor: "#34D399",
    
  },
  headerButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#EF4444",
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  badgeText: {
    color: "white",
    fontSize: 10,
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
  productWeight: {
    color: "#047857",
    marginVertical: 8,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  price: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#065F46",
  },
  badgeAvailable: {
    backgroundColor: "#D1FAE5",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeAvailableText: {
    color: "#065F46",
    fontSize: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  ratingText: {
    marginLeft: 8,
    color: "#065F46",
    fontSize: 16,
  },
  guaranteeText: {
    color: "#065F46",
    marginBottom: 16,
  },
  readMoreText: {
    color: "#34D399",
    textDecorationLine: "underline",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D1FAE5",
    borderWidth: 1,
    borderRadius: 9999,
  },
  quantityText: {
    marginHorizontal: 16,
    fontSize: 18,
    color: "#065F46",
  },
  addToCartButton: {
    backgroundColor: "#34D399",
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
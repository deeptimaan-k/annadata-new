import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { ArrowLeft, Search, Star, MapPin } from 'lucide-react-native';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#E6F9E8', // bg-green-50 equivalent
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 16,
  },
  navfix: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  searchIcon: {
    color: '#9CA3AF', // text-gray-400 equivalent
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: '#2D6A4F', // text-green-800
  },
  iconButton: {
    padding: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D6A4F', // text-green-800
    marginBottom: 8,
  },
  badge: {
    backgroundColor: '#FFEBEB',
    padding: 4,
    borderRadius: 4,
    color: '#FF4D4D',
    fontSize: 12,
    marginBottom: 4,
  },
  productPairContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 8,
    width: '45%', // Ensures two cards fit side-by-side
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D6A4F', // text-green-800
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D6A4F', // text-green-700
  },
  oldPrice: {
    marginLeft: 10,
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: '#9CA3AF', // text-gray-500
  },
  productDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  productDetailText: {
    fontSize: 12,
    color: '#2D6A4F', // text-green-600
    marginLeft: 4,
  },
};

export default function SearchResults() {
  const products = [
    { name: "Organic Baby Spinach", price: 3.99, oldPrice: 4.99, discount: "20% off", rating: 4.8, sales: 523, location: "Local Farm" },
    { name: "Fresh Cherry Tomatoes", price: 2.99, rating: 4.7, sales: 412, location: "Greenhouse" },
    { name: "Crisp Romaine Lettuce", price: 2.49, oldPrice: 2.99, discount: "15% off", rating: 4.5, sales: 378, location: "Hydroponic" },
    { name: "Mixed Bell Peppers", price: 4.99, rating: 4.6, sales: 289, location: "Organic Valley" },
    { name: "Organic Kale", price: 3.49, oldPrice: 3.99, discount: "10% off", rating: 4.4, sales: 330, location: "Eco Farms" },
    { name: "Zucchini", price: 1.99, rating: 4.3, sales: 278, location: "Fresh Farms" },
    { name: "Organic Carrots", price: 2.99, rating: 4.7, sales: 392, location: "Local Organic Farms" },
    { name: "Red Radishes", price: 1.49, rating: 4.5, sales: 240, location: "Green Valley" },
  ];

  // Helper function to group products into pairs
  const groupProductsInPairs = (products) => {
    const grouped = [];
    for (let i = 0; i < products.length; i += 2) {
      grouped.push(products.slice(i, i + 2));
    }
    return grouped;
  };

  const groupedProducts = groupProductsInPairs(products);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.navfix}>
          <TouchableOpacity style={styles.iconButton}>
            <ArrowLeft size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.searchInputContainer}>
            <Search size={20} style={styles.searchIcon} />
            <TextInput
              placeholder="Find fresh vegetables..."
              placeholderTextColor="#9CA3AF"
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <MapPin size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        ListHeaderComponent={
          <View>
            <Text style={styles.sectionTitle}>Popular Search</Text>
            <FlatList
              horizontal
              data={["Organic Tomatoes", "Fresh Spinach", "Bell Peppers", "Broccoli"]}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    marginRight: 10,
                    padding: 10,
                    borderRadius: 20,
                    borderColor: '#4CAF50',
                    borderWidth: 1,
                  }}
                >
                  <Text style={{ color: '#4CAF50' }}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        }
        data={groupedProducts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: productPair }) => (
          <View style={styles.productPairContainer}>
            {productPair.map((product) => (
              <View style={styles.productCard} key={product.name}>
                <Image
                  source={{ uri: '/placeholder.svg?height=150&width=150' }} // Replace with actual image URL
                  style={styles.productImage}
                />
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{product.name}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <Text style={styles.productPrice}>${product.price}</Text>
                    {product.oldPrice && (
                      <Text style={styles.oldPrice}>${product.oldPrice}</Text>
                    )}
                  </View>
                  {product.discount && (
                    <Text style={styles.badge}>{product.discount}</Text>
                  )}
                  <View style={styles.productDetails}>
                    <Star size={14} color="#FFD700" />
                    <Text style={styles.productDetailText}>
                      {product.rating} · {product.sales} sold
                    </Text>
                  </View>
                  <View style={styles.productDetails}>
                    <MapPin size={14} color="#4CAF50" />
                    <Text style={styles.productDetailText}>{product.location}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
}

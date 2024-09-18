import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const screenWidth = Dimensions.get('window').width;
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const handleHumburger = () => {
    navigation.navigate('Profile'); 
  };
  const handleSearch = () => {
    navigation.navigate('Search'); 
  };
  const handleNotification = () => {
    navigation.navigate('Notifications'); 
  };
  const handlePost = () => {
    navigation.navigate('Post'); 
  };

  useEffect(() => {
    // Fetch data for fruits
    fetch('https://annadaata-backend.onrender.com/api/fruits')
      .then(response => response.json())
      .then(data => {
        setFruits(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching fruits:', error);
        setError(error.message);
      });

    // Fetch data for vegetables
    fetch('https://annadaata-backend.onrender.com/api/vegetable')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setVegetables(data);
        } else {
          console.error('Unexpected data format for vegetables:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching vegetables:', error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  const handleProductClick = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.navfix}>
          <Ionicons onPress={handleHumburger} name="menu-outline" size={24} color="white" />
          <Text style={styles.headerTitle}>Annadaata</Text>
          <View style={styles.iconContainer}>
            <Ionicons onPress={handleSearch} name="search-outline" size={24} color="white" />
            <Ionicons onPress={handleNotification} name="notifications-outline" size={24} color="white" style={styles.iconSpacing} />
          </View>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        {/* Fruits Carousel */}
        <View style={styles.section}>
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carousel}>
            {fruits.map((fruit, index) => (
              <TouchableOpacity key={index} onPress={() => handleProductClick(fruit)}>
                <View style={styles.carouselItem}>
                  <View style={styles.card}>
                    <Image
                      source={{ uri: fruit.imageUrls[0] ? `https://drive.google.com/uc?export=view&id=${fruit.imageUrls[3]}` : 'https://via.placeholder.com/200' }}
                      style={styles.image}
                    />
                    <Text style={styles.newsText}>{fruit.name}</Text>
                    <Text style={styles.description}>{fruit.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Vegetable Recommendations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vegetable Recommendations</Text>
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carousel}>
            {vegetables.map((vegetable, index) => (
              <TouchableOpacity key={index} onPress={() => handleProductClick(vegetable)}>
                <View style={styles.carouselItem}>
                  <View style={styles.card}>
                    <Image source={{ uri: vegetable.imageUrls[0] ? `https://drive.google.com/uc?export=view&id=${vegetable.imageUrls[2]}` : 'https://via.placeholder.com/150' }} style={styles.image} />
                    <Text style={styles.vegetableText}>{vegetable.name}</Text>
                    <Text style={styles.description}>{vegetable.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Other Products */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other Products</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productList}>
            {[
              { name: 'Fertilizer', description: 'Boost crop growth naturally.', imageUrls: ["https://www.fertilizer-machine.net/wp-content/uploads/2018/06/types-of-fertilizer.jpg"] },
              { name: 'Seeds', description: 'High-quality seeds for better yield.', imageUrls: ["https://www.taropumps.com/media/2538/type-of-seeds-2.jpg"] },
              { name: 'Tools', description: 'Durable tools for farming.', imageUrls: ["https://st2.depositphotos.com/1316172/10351/i/950/depositphotos_103513836-stock-photo-two-tractors-in-a-field.jpg"] },
            ].map((product, index) => (
              <TouchableOpacity key={index} onPress={() => handleProductClick(product)}>
                <View style={styles.productItem}>
                  <View style={styles.card}>
                    <Image source={{ uri: product.imageUrls[0] }} style={styles.image} />
                    <Text style={styles.productText}>{product.name}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Top Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <View style={styles.categoryGrid}>
            {[
              { name: 'Vegetables', image: require('../images/vegetable.png') }, 
              { name: 'Fruits', image: require('../images/healthy-food.png') },
              { name: 'Crops', image: require('../images/wheat.png')},
              { name: 'Spices', image: require('../images/spices.png') },
              { name: 'Land', image: require('../images/land.png') },
              { name: 'Others', image: require('../images/delivery-box.png') }
            ].map((category, index) => (
              <View key={index} style={styles.categoryItem}>
                <View style={styles.categoryIcon}>
                  <Image 
                    source={typeof category.image === 'string' ? { uri: category.image } : category.image}
                    style={styles.categoryImage}
                  />
                </View>
                <Text style={styles.categoryText}>{category.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="home-outline" size={32} color="#ffff" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePost} style={styles.postButton}>
          <View style={styles.postIconWrapper}>
            <Ionicons name="add" size={32} color="white" style={styles.plusIcon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="person-outline" size={32} color="#b8dad5" />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    backgroundColor: '#044c0d',
    padding: 16,
  },
  navfix: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginLeft: 17,
  },
  mainContent: {
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  carousel: {
    alignItems: 'center',
  },
  carouselItem: {
    width: Dimensions.get('window').width - 64,
    marginHorizontal: 16,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#daf2d3',
    borderRadius: 8,
    elevation: 5, // Adds a shadow for Android
    shadowColor: '#000', // Adds a shadow for iOS
    shadowOffset: { width: 2, height: 2 }, // iOS shadow settings
    shadowOpacity: 0.2,
    shadowRadius: 4,

  },
  recommendationCard: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#daf2d3',
    borderRadius: 8,
    elevation: 5, // Adds a shadow for Android
    shadowColor: '#000', // Adds a shadow for iOS
    shadowOffset: { width: 2, height: 2 }, // iOS shadow settings
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  newsText: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: '#2d2c2c',
  },
  vegetableText: {
    fontSize: 20,
    color: '#2d2c2c',
  },
  productList: {
    paddingHorizontal: 16,
  },
  productItem: {
    width: 150,
    marginHorizontal: 8,
  },
  productText: {
    fontSize: 18,
    color: '#000000',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d2c2c',
    marginBottom: 8,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
    marginBottom: 16,
    width: '30%',
  },
  categoryIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A5D6A7',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  categoryText: {
    fontSize: 14,
    color: '#000000',
  },
  description: {
    fontSize: 14,
    color: '#2d2c2c',
    textAlign: 'center',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#044c0d',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#b8dad5',
    marginTop: 4,
  },
  postButton: {
    // backgroundColor: '#d0fae4',
    borderRadius: 50,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderWidth: 2,  // Add this for the border width
    borderColor: '#b8dad5',  // Add this for the white color
  },
  postIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});




export default HomePage;

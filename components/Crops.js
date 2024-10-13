import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { ArrowLeft, Search } from 'lucide-react-native';

export default function Component() {
  const vegetables = [
    { name: 'Organic Spinach', details: 'Rich in iron and vitamins', origin: 'Local Farm' },
    { name: 'Cherry Tomatoes', details: 'Sweet and juicy', origin: 'Greenhouse' },
    { name: 'Crisp Lettuce', details: 'Perfect for salads', origin: 'Hydroponic Farm' },
    { name: 'Fresh Carrots', details: 'High in beta-carotene', origin: 'Organic Fields' },
    { name: 'Bell Peppers', details: 'Colorful and crunchy', origin: 'Sunny Meadows' },
    { name: 'Broccoli Florets', details: 'Packed with nutrients', origin: 'Cool Climate Farms' },
  ];

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: '/placeholder.svg' }}
          style={styles.image}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.details}>{item.details}</Text>
        <Text style={styles.originText}>Origin: {item.origin}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.navfix}>
          <TouchableOpacity style={styles.backButton}>
            <ArrowLeft color="white" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Vegetables</Text>
          <TouchableOpacity style={styles.searchButton}>
            <Search color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <FlatList
        data={vegetables}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} 
        contentContainerStyle={styles.list}
        renderItem={renderCard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FDF4',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 16,
  },
  navfix: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  backButton: {
    padding: 8,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchButton: {
    padding: 8,
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    flex: 1, // This makes the card take up equal space in the row
    maxWidth: '48%', // Ensures two cards fit in a row with some space between
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F855A',
  },
  details: {
    marginTop: 4,
    fontSize: 14,
    color: '#4A5568',
  },
  originText: {
    marginTop: 8,
    fontSize: 12,
    color: '#68D391',
  },
});

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { ArrowLeft, Search } from 'lucide-react-native';


export default function SearchResults() {
  const products = [
    { name: "Organic Baby Spinach",description:"Tender, nutrient-rich spinach leaves with a mild flavor, grown without synthetic chemicals.",images:"https://www.orgpick.com/cdn/shop/products/spnach_large_01cac1a1-246f-433c-b02b-e2c7986fe95c.jpg"},
    { name: "Fresh Cherry Tomatoes",description:"Fresh Cherry Tomatoes: Sweet, juicy, and bite-sized tomatoes, perfect for snacking or adding a burst of flavor to dishes.",images:"https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2020-02-14/Cherry_Tomato_Red_01.jpg"},
    { name: "Crisp Romaine Lettuce", description:"Crunchy, leafy greens with a slightly bitter taste, ideal for salads and wraps.",images:"https://slyce-product.s3.ap-south-1.amazonaws.com/EXOTIC%20VEGETABLES_null_ROMAINE%20LETTUCE_image_2023-07-10T06%3A29%3A25.475.png" },
    { name: "Mixed Bell Peppers", description:"Vibrant, sweet peppers in various colors, adding crunch and flavor to salads, stir-fries, and dishes.",images:"https://www.simplyseed.co.uk/user/products/large/Pepper%20Rainbow%20Mixed.jpg" },
    { name: "Organic Kale", description:"Nutrient-dense, dark green leaves with a robust flavor, perfect for salads, smoothies, and cooking.",images:"https://m.media-amazon.com/images/I/51Ai1lYnQdL.AC_UF894,1000_QL80.jpg" },
    { name: "Zucchini", description:"Mild-flavored, versatile squash with tender flesh, great for grilling, sautéing, or adding to baked dishes.",images:"https://www.allthatgrows.in/cdn/shop/articles/Optimized-Feat_image-Zucchini_1_1100x1100.jpg"},
    { name: "Organic Carrots", description:"Sweet, crunchy root vegetables grown without synthetic chemicals, perfect for snacking or cooking.",images:"https://organicbazar.net/cdn/shop/products/Untitled-design-13-1.jpg"},
    { name: "Red Radishes", description:" Crisp, spicy root vegetables with a vibrant color, ideal for adding a peppery kick to salads and dishes.",images:"https://specialtyproduce.com/sppics/1241.png"},
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
          <TouchableOpacity onPress={handleToBack} style={styles.iconButton}>
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
            {/* <MapPin size={24} color="#FFFFFF" /> */}
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        ListHeaderComponent={
          <View>
            <Text style={styles.sectionTitle}>    Recommendations   </Text>
            <FlatList
              horizontal
              data={[]}
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
                  source={{ uri:product.images }} // Replace with actual image URL
                  style={styles.productImage}
                />
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{product.name}</Text>
                  {/* <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <Text style={styles.productPrice}>{product.price}</Text>
                    {product.oldPrice && (
                      <Text style={styles.oldPrice}>${product.oldPrice}</Text>
                    )}
                  </View> */}
                  {/* {product.discount && (
                    <Text style={styles.badge}>{product.discount}</Text>
                  )} */}
                  {/* <View style={styles.productDetails}>
                    <Star size={14} color="#FFD700" />
                    <Text style={styles.productDetailText}>
                      {product.rating} · {product.sales} sold
                    </Text>
                  </View> */}
                  <View style={styles.productDetails}>
                    {/* <MapPin size={14} color="#4CAF50" /> */}
                    <Text style={styles.productDetailText}>{product.description}</Text>
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
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#E6F9E8', // bg-green-50 equivalent
  },
  header: {
    backgroundColor: '#044c0d',
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
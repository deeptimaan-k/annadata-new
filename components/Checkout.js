import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, Switch, ScrollView } from 'react-native';
import { ArrowLeft, MoreVertical, Minus, Plus, CreditCard } from 'lucide-react-native';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#E6F9E8',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 16,
    
  },
  navfix:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,

  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
  },
  iconButton: {
    padding: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 16,
  },
  itemName: {
    fontWeight: '600',
    color: '#4CAF50',
  },
  itemPrice: {
    color: '#4CAF50',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 8,
    color: '#4CAF50',
  },
  promoCode: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4CAF50',
  },
  paymentMethod: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4CAF50',
  },
  total: {
    color: '#4CAF50',
    fontSize: 18,
    fontWeight: '600',
  },
  placeOrderButton: {
    backgroundColor: '#4CAF50',
    color: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  addressButton: {
    color: '#4CAF50',
    fontSize: 12,
  },
};

export default function CartPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.navfix}>
        <TouchableOpacity style={styles.iconButton}>
          <ArrowLeft size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Basket</Text>
        <TouchableOpacity style={styles.iconButton}>
          <MoreVertical size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      </View>

      <ScrollView style={{ flex: 1, padding: 16 }}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ArrowLeft size={20} color="#4CAF50" style={{ marginRight: 8 }} />
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#4CAF50' }}>Deliver to hojibelot</Text>
            </View>
            <Text style={styles.addressButton}>1234 University Dr ▼</Text>
          </View>
        </View>

        {[
          { name: "Fresh Broccoli", price: 4.5, quantity: 3, image: "/placeholder.svg?height=80&width=80" },
          { name: "Organic Carrots", price: 3.6, quantity: 2, image: "/placeholder.svg?height=80&width=80" },
          { name: "Green Lettuce", price: 3.6, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
        ].map((item) => (
          <View key={item.name} style={styles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={{ flex: 1 }}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>each, ${item.price.toFixed(2)}/kg</Text>
              </View>
              <View style={styles.quantityControls}>
                <TouchableOpacity style={{ padding: 4 }}>
                  <Minus size={20} color="#4CAF50" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity style={{ padding: 4 }}>
                  <Plus size={20} color="#4CAF50" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.promoCode}>Promo code</Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ArrowLeft size={20} color="#4CAF50" style={{ marginRight: 8 }} />
              <Text style={{ color: '#4CAF50', fontSize: 12 }}>Choose promo code</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.paymentMethod}>Payment method</Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CreditCard size={20} color="#4CAF50" style={{ marginRight: 8 }} />
              <Text style={{ color: '#4CAF50' }}>**** **** **** 9876</Text>
              <Text style={{ color: '#4CAF50', marginLeft: 8 }}>Change ▼</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.promoCode}>Pinned after checkout</Text>
            <Switch />
          </View>
        </View>

        <View style={styles.card}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
            <Text style={{ color: '#4CAF50' }}>Subtotal</Text>
            <Text style={styles.total}>$11.70</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
            <Text style={{ color: '#4CAF50' }}>Delivery</Text>
            <Text style={styles.total}>$2.00</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>$13.70</Text>
          </View>
        </View>
      </ScrollView>

      <View style={{ backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#E0E0E0', padding: 16 }}>
        <Button title="Place Order" color="#4CAF50" style={styles.placeOrderButton} />
      </View>
    </View>
  );
}
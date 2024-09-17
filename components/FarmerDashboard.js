import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { Bell, Clock, User, Plus, ShoppingBag } from 'lucide-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Dashboard() {
  const navigation = useNavigation();

  const handleHumbugger = () => {
    navigation.navigate('Profile');
  };
  const handleNotification = () => {
    navigation.navigate('Notifications');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.fixnav}>
          <TouchableOpacity onPress={handleHumbugger}>
            <Button mode="text" style={styles.menuButton}>
              <Icon name="menu" size={24} color="#fff" />
            </Button>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Annadaata</Text>
          <Button mode="text" style={styles.notificationButton}>
            {/* <Bell size={24} color="#fff" /> */}
          </Button>
        </View>
      </View>

      <ScrollView style={styles.main}>
        <View style={styles.cardsContainer}>
          <Card style={[styles.card, styles.deliveredCard]}>
            <Card.Content style={styles.cardContent}>
              {/* Use a checkmark or truck icon for Delivered */}
              <Icon name="check-circle" size={32} color="#4a5568" />
              <Text style={styles.cardTitle}>Delivered</Text>
              <Text style={styles.cardCount}>27</Text>
            </Card.Content>
          </Card>
          <Card style={[styles.card, styles.pendingCard]}>
            <Card.Content style={styles.cardContent}>
              {/* Use a clock or hourglass icon for Pending */}
              <Icon name="hourglass-empty" size={32} color="#b45321" />
              <Text style={styles.cardTitle}>Pending</Text>
              <Text style={styles.cardCount}>10</Text>
            </Card.Content>
          </Card>
          <Card style={[styles.card, styles.cancelledCard]}>
            <Card.Content style={styles.cardContent}>
              {/* Use a cancel or cross icon for Cancelled */}
              <Icon name="cancel" size={32} color="#dc2626" />
              <Text style={styles.cardTitle}>Cancelled</Text>
              <Text style={styles.cardCount}>05</Text>
            </Card.Content>
          </Card>
          <Card style={[styles.card, styles.returnedCard]}>
            <Card.Content style={styles.cardContent}>
              {/* Use a return or refresh icon for Returned */}
              <Icon name="refresh" size={32} color="#f97316" />
              <Text style={styles.cardTitle}>Returned</Text>
              <Text style={styles.cardCount}>16</Text>
            </Card.Content>
          </Card>
        </View>

        <Text style={styles.sectionTitle}>New Orders</Text>
        <View style={styles.orderContainer}>
          <Card style={styles.orderCard}>
            <Card.Content style={styles.orderContent}>
              <Image source={{ uri: 'https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg' }} style={styles.productImage} />
              <View style={styles.orderTextContainer}>
                <Text style={styles.orderTitle}>Fresh Apples</Text>
                <Text style={styles.orderDescription}>5kg, Organic Red Delicious</Text>
                <Text style={styles.orderTime}>08:40 AM</Text>
              </View>
              <View style={styles.actionButtons}>
                <Button mode="outlined" style={styles.rejectButton}>
                  Reject
                </Button>
                <Button mode="contained" style={styles.acceptButton}>
                  Accept
                </Button>
              </View>
            </Card.Content>
          </Card>
          <Card style={styles.orderCard}>
            <Card.Content style={styles.orderContent}>
              <Image source={{ uri: 'https://as1.ftcdn.net/v2/jpg/01/20/47/06/1000_F_120470660_ha8n1vyrH0BVonoSjlod1GbualTYdPoA.jpg' }} style={styles.productImage} />
              <View style={styles.orderTextContainer}>
                <Text style={styles.orderTitle}>Organic Carrots</Text>
                <Text style={styles.orderDescription}>2kg, Fresh Farm Carrots</Text>
                <Text style={styles.orderTime}>09:15 AM</Text>
              </View>
              <View style={styles.actionButtons}>
                <Button mode="outlined" style={styles.rejectButton}>
                  Reject
                </Button>
                <Button mode="contained" style={styles.acceptButton}>
                  Accept
                </Button>
              </View>
            </Card.Content>
          </Card>
        </View>

        <Text style={styles.sectionTitle}>Add Product</Text>
        <View style={styles.addProductContainer}>
          {['Tomatoes', 'Lettuce', 'Cucumbers', 'Bell Peppers'].map((vegetable) => (
            <Card key={vegetable} style={styles.addProductCard}>
              <Card.Content style={styles.addProductContent}>
                <View style={styles.addProductIconContainer}>
                  <ShoppingBag size={24} color="#4a5568" />
                </View>
                <View style={styles.addProductTextContainer}>
                  <Text style={styles.addProductTitle}>{vegetable}</Text>
                  <Text style={styles.addProductDescription}>Add to inventory</Text>
                </View>
                {/* <Button mode="contained" style={styles.addButton}>
                  <Plus size={16} color="#fff" />
                </Button> */}
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button style={styles.footerButton}>
          <Icon name="home" size={24} color="#fff" />
          <Text style={styles.footerText}></Text>
        </Button>
        <Button onPress={handleNotification} style={styles.footerButton}>
          <Bell size={24} color="#d1d5db" />
          <Text style={styles.footerText}></Text>
        </Button>
        {/* <Button style={styles.footerButton}>
          <Clock size={24} color="#d1d5db" />
          <Text style={styles.footerText}></Text>
        </Button> */}
        <Button style={styles.footerButton}>
          <User size={24} color="#d1d5db" />
          <Text style={styles.footerText}></Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
  },
  header: {
    backgroundColor: '#059669',
    padding: 16,
  },
  fixnav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  menuButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#fff',
  },
  notificationButton: {
    padding: 8,
  },
  main: {
    flex: 1,
    padding: 16,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: '48%',
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
  },
  deliveredCard: {
    backgroundColor: '#d1fae5',
    borderColor: '#a7f3d0',
  },
  pendingCard: {
    backgroundColor: '#fef3c7',
    borderColor: '#fde047',
  },
  cancelledCard: {
    backgroundColor: '#fee2e2',
    borderColor: '#fca5a5',
  },
  returnedCard: {
    backgroundColor: '#fdba74',
    borderColor: '#f97316',
  },
  cardContent: {
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  cardCount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#374151',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 16,
  },
  orderContainer: {
    marginBottom: 16,
  },
  orderCard: {
    marginBottom: 16,
    borderRadius: 10,
  },
  orderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  orderTextContainer: {
    flex: 1,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  orderDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  orderTime: {
    fontSize: 12,
    color: '#9ca3af',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 'auto',
  },
  rejectButton: {
    marginRight: 8,
  },
  acceptButton: {
    backgroundColor: '#34d399',
  },
  addProductContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  addProductCard: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 10,
  },
  addProductContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  addProductIconContainer: {
    marginRight: 16,
  },
  addProductTextContainer: {
    flex: 1,
  },
  addProductTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  addProductDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  addButton: {
    marginLeft: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#059669',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
  },
});

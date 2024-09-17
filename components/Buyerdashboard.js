import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, StyleSheet } from "react-native";
import { Bell, Home, ShoppingBag, Clock, User, Search, Plus, Minus, Menu, MessageCircle } from "lucide-react-native";

export default function BuyerDashboard() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <View style={styles.navfix}>
        <TouchableOpacity style={styles.iconButton}>
          <Menu width={24} height={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Fresh Picks</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <ShoppingBag width={24} height={24} color="white" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Bell width={24} height={24} color="white" />
          </TouchableOpacity>
        </View>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* Search */}
        <View style={styles.searchContainer}>
          <Search width={24} height={24} color="gray" style={styles.searchIcon} />
          <TextInput
            placeholder="Search for fruits, vegetables..."
            style={styles.searchInput}
          />
        </View>

        {/* Featured Products */}
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <View style={styles.productGrid}>
          {[
            { name: "Organic Apples", price: "$2.99/lb", image: "/placeholder.svg?height=100&width=100" },
            { name: "Fresh Carrots", price: "$1.49/bunch", image: "/placeholder.svg?height=100&width=100" },
            { name: "Ripe Tomatoes", price: "$3.99/lb", image: "/placeholder.svg?height=100&width=100" },
            { name: "Green Lettuce", price: "$2.49/head", image: "/placeholder.svg?height=100&width=100" },
          ].map((product) => (
            <View key={product.name} style={styles.card}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <View style={styles.cardContent}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
                <View style={styles.actionRow}>
                  <View style={styles.counter}>
                    <TouchableOpacity style={styles.iconButton}>
                      <Minus width={16} height={16} color="green" />
                    </TouchableOpacity>
                    <Text style={styles.counterText}>1</Text>
                    <TouchableOpacity style={styles.iconButton}>
                      <Plus width={16} height={16} color="green" />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Recent Orders */}
        <Text style={styles.sectionTitle}>Recent Orders</Text>
        {[
          { id: "ORD-001", date: "May 15, 2023", status: "Delivered", total: "$24.99" },
          { id: "ORD-002", date: "May 10, 2023", status: "Processing", total: "$18.50" },
        ].map((order) => (
          <View key={order.id} style={styles.card}>
            <View style={styles.cardContent}>
              <View>
                <Text style={styles.orderId}>{order.id}</Text>
                <Text style={styles.orderDate}>{order.date}</Text>
                <Text style={styles.orderStatus}>{order.status}</Text>
              </View>
              <View style={styles.orderTotalContainer}>
                <Text style={styles.orderTotal}>{order.total}</Text>
                <TouchableOpacity>
                  <Text style={styles.viewDetails}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Home width={24} height={24} color="white" />
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <ShoppingBag width={24} height={24} color="white" />
          <Text style={styles.footerButtonText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chatButton}>
          <MessageCircle width={32} height={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Clock width={24} height={24} color="white" />
          <Text style={styles.footerButtonText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <User width={24} height={24} color="white" />
          <Text style={styles.footerButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FDF4",
  },
  navfix:{
    marginTop:30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    
    backgroundColor: "#34D399",
    padding: 16,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  iconButton: {
    padding: 8,
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#EF4444",
    borderRadius: 9999,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  badgeText: {
    color: "white",
    fontSize: 10,
  },
  content: {
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#059669",
    marginBottom: 16,
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    width: "48%",
    marginBottom: 16,
  },
  productImage: {
    width: "100%",
    height: 100,
  },
  cardContent: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#059669",
  },
  productPrice: {
    fontSize: 12,
    color: "#047857",
    marginBottom: 8,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
  },
  counterText: {
    color: "#059669",
    marginHorizontal: 8,
  },
  addButton: {
    backgroundColor: "#34D399",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  addButtonText: {
    color: "white",
  },
  orderId: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#059669",
  },
  orderDate: {
    fontSize: 12,
    color: "#047857",
  },
  orderStatus: {
    fontSize: 12,
    color: "#047857",
    marginTop: 4,
  },
  orderTotalContainer: {
    alignItems: "flex-end",
  },
  orderTotal: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#059669",
  },
  viewDetails: {
    color: "#10B981",
    marginTop: 4,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#34D399",
    padding: 16,
  },
  footerButton: {
    alignItems: "center",
  },
  footerButtonText: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
  chatButton: {
    backgroundColor: "#059669",
    padding: 16,
    borderRadius: 9999,
    marginTop: -32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});
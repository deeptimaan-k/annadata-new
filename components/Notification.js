import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import {  Check } from "lucide-react-native";
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Bell, User} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const NotificationsPage = () => {
  const [tab, setTab] = useState("new");
  const navigation = useNavigation();

  const handleHumbugger = () => {
    navigation.navigate('Profile');
  };
  const handleGoToHome = () => {
    navigation.navigate('FarmerDashboard');
  };
  const newNotifications = [
    { id: 1, title: "Your order has been delivered", time: "2h ago", icon: "🚚" },
    { id: 2, title: "New seasonal vegetables available!", time: "4h ago", icon: "🥕" },
    { id: 3, title: "Rate your last order", time: "1d ago", icon: "⭐" },
    { id: 6, title: "Reminder: Weekly sale ends tomorrow", time: "1d ago", icon: "⏰" },
    { id: 7, title: "Your payment has been processed", time: "3h ago", icon: "💳" },
    { id: 8, title: "Your favorite item is back in stock!", time: "6h ago", icon: "🛒" },
    { id: 9, title: "Order shipped: Track your delivery", time: "8h ago", icon: "📦" },
    { id: 10, title: "Earn rewards with your next purchase", time: "1d ago", icon: "🏆" },
  ];

  const readNotifications = [
    { id: 4, title: "Update your delivery preferences", time: "2d ago", icon: "🔔" },
    { id: 5, title: "20% off on organic fruits this week", time: "3d ago", icon: "🍎" },
    { id: 11, title: "New recipe ideas with seasonal produce", time: "4d ago", icon: "📖" },
    { id: 12, title: "Your refund has been processed", time: "5d ago", icon: "💰" },
    { id: 13, title: "Order delay: Apologies for the inconvenience", time: "5d ago", icon: "🚨" },
    { id: 14, title: "Download your invoice for your recent order", time: "6d ago", icon: "🧾" },
    { id: 15, title: "Flash sale: Organic produce at 50% off!", time: "7d ago", icon: "⚡" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
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

      {/* Tabs List */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, tab === "new" && styles.activeTab]}
          onPress={() => setTab("new")}
        >
          <Text style={styles.tabText}>
            New Messages{" "}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{newNotifications.length}</Text>
            </View>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === "read" && styles.activeTab]}
          onPress={() => setTab("read")}
        >
          <Text style={styles.tabText}>Read Messages</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <ScrollView style={styles.scrollContainer}>
        {tab === "new"
          ? newNotifications.map((notification) => (
              <View key={notification.id} style={styles.notificationItem}>
                <View style={styles.iconContainer}>
                  <Text style={styles.icon}>{notification.icon}</Text>
                </View>
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationTime}>{notification.time}</Text>
                </View>
              </View>
            ))
          : readNotifications.map((notification) => (
              <View key={notification.id} style={[styles.notificationItem, styles.readNotification]}>
                <View style={styles.iconContainer}>
                  <Text style={styles.icon}>{notification.icon}</Text>
                </View>
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationTime}>{notification.time}</Text>
                </View>
                <Check width={24} height={24} color="#38a169" />
              </View>
            ))}
      </ScrollView>
      <View style={styles.footer}>
        <Button onPress={handleGoToHome} style={styles.footerButton}>
          <Icon name="home" size={24} color="#d1d5db" />
          <Text style={styles.footerText}></Text>
        </Button>
        <Button style={styles.footerButton}>
          <Bell size={24} color="#fff" />
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f4ea",
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
  tabsContainer: {
    backgroundColor: "#f0fff4",
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tab: {
    flex: 1,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: "#ffffff",
  },
  tabText: {
    fontSize: 16,
    color: "#22543d",
    fontWeight: "bold",
  },
  badge: {
    backgroundColor: "#38a169",
    borderRadius: 8,
    padding: 4,
    marginLeft: 8,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  scrollContainer: {
    flex: 1,
    padding: 16,
  },
  notificationItem: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  readNotification: {
    opacity: 0.7,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e6f4ea",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
  },
  notificationContent: {
    flex: 1,
    marginLeft: 16,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#22543d",
  },
  notificationTime: {
    fontSize: 14,
    color: "#718096",
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#059669',
    padding: 16,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 10,
    color: '#d1d5db',
    marginTop: 4,
  },
});

export default NotificationsPage;

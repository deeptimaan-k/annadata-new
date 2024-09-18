import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { ChevronLeft, Check } from "lucide-react-native";
import { Button } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

const NotificationsPage = () => {
  const [tab, setTab] = useState("new");
  const navigation = useNavigation();

  const handleGoToDashboard = () => {
    navigation.navigate('FarmerDashboard'); 
  };
  const newNotifications = [
    { id: 1, title: "The farmer you’ve previously contacted has just added new products. Check them out now", time: "2h ago" },
    { id: 2, title: "Products from the farmer you bought from before are now available. Explore their latest offerings!", time: "4h ago" },
    { id: 3, title: "The farmer you previously reached out to has posted fresh products", time : "1d ago"},
    { id: 6, title: "New products have just been listed by the farmer you have purchased from", time: "1d ago"},
    { id: 7, title: "The farmer you’ve connected with has added new items", time: "3h ago" },
    { id: 8, title: " You’ve bought from this farmer before, and they’ve just listed new products", time: "6h ago"},
    { id: 9, title: "   The farmer you’ve contacted has fresh products ready for you. Take a look", time: "8h ago" },
    { id: 10, title: "The farmer you previously bought from has updated their stock. Explore the new items now!", time: "1d ago"},
  ];

  const readNotifications = [
    { id: 4, title: "  The farmer you’ve contacted in the past has added new products. See what’s available now!", time: "2d ago" },
    { id: 5, title: " Fresh goods just in from the farmer you’ve bought from before. Take a look at their latest harvest!", time: "3d ago"  },
    { id: 11, title: " The farmer you contacted earlier has posted fresh products. Explore their updated listings now!", time: "4d ago" },
 
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.fixnav}>
        <TouchableOpacity onPress={handleGoToDashboard} style={styles.closeButton}>
          <ChevronLeft width={24} height={24} color="white" />
        </TouchableOpacity>

          <Text style={styles.headerTitle}>Notifications</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f4ea",
  },
  header: {
    backgroundColor: '#044c0d',
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

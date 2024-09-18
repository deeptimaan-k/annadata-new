import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { User, Lock, Signpost, HelpCircle, LogOut, ChevronRight } from "lucide-react-native";
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();

  const handleGoToDashboard = () => {
    navigation.navigate('FarmerDashboard'); 
  };
  const handleLogout = () => {
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <View style={styles.navfix}>
        <TouchableOpacity onPress={handleGoToDashboard} style={styles.closeButton}>
          <ChevronRight width={24} height={24} color="white" />
        </TouchableOpacity>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: "https://vegflow.in/wp-content/uploads/2018/11/Indian-Farmer.jpg" }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Arindam Kashyap</Text>
          <Text style={styles.email}>arindam.kashyap@example.com</Text>
        </View>
        </View>
      </View>

      {/* Navigation */}
      <ScrollView style={styles.navContainer}>
        {[
          { label: "Profile", icon: <User width={24} height={24} color="#6B7280" /> },
          { label: "Change Password", icon: <Lock width={24} height={24} color="#6B7280" /> },
          // { label: "My Farm", icon: <Tractor width={24} height={24} color="#6B7280" /> },
          { label: "My Posts", icon: <Signpost width={24} height={24} color="#6B7280" /> },
          { label: "Support", icon: <HelpCircle width={24} height={24} color="#6B7280" /> },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.navItem}>
            {item.icon}
            <Text style={styles.navText}>{item.label}</Text>
            <ChevronRight width={24} height={24} color="#9CA3AF" style={styles.chevronIcon} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer */}
      <View  style={styles.footer}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <LogOut width={24} height={24} color="white" />
          <Text  style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  header: {
    backgroundColor: "#34D399",
    padding: 24,
    paddingBottom: 32,
   
  },
  navfix:{
    alignItems: "center",
    position: "relative",
    marginTop:40,
  },
  closeButton: {
    position: "absolute",
    top: 24,
    right: 24,
  },
  avatarContainer: {
    alignItems: "center",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderColor: "white",
    borderWidth: 4,
  },
  name: {
    marginTop: 16,
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#D1FAE5",
    marginTop: 4,
  },
  navContainer: {
    flexGrow: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    marginTop: -24,
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  navText: {
    fontSize: 16,
    color: "#374151",
    marginLeft: 16,
    flex: 1,
  },
  chevronIcon: {
    marginLeft: "auto",
  },
  footer: {
    backgroundColor: "white",
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  logoutButton: {
    backgroundColor: "#EF4444",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 8,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    marginLeft: 8,
  },
});
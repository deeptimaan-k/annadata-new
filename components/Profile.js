import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { User, Lock, Signpost, HelpCircle, LogOut, ChevronRight } from "lucide-react-native";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import axios
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_PROFILE_URL = 'https://annadaata-backend.onrender.com/api/users/profile'; // Replace with your actual API URL

export default function Profile() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleGoToDashboard = () => {
    navigation.navigate('FarmerDashboard'); 
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('email');
    navigation.navigate('Login'); 
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const email = await AsyncStorage.getItem('email');
        const token = await AsyncStorage.getItem('token');
        if (email && token) {
          const response = await axios.post(API_PROFILE_URL, { email }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserData(response.data);
        } else {
          console.error('No email or token found');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.navfix}>
          <TouchableOpacity onPress={handleGoToDashboard} style={styles.closeButton}>
            <ChevronRight width={24} height={24} color="white" />
          </TouchableOpacity>
          <View style={styles.avatarContainer}>
            {userData && (
              <>
                <Image
                  source={{ uri: userData.avatar || "https://vegflow.in/wp-content/uploads/2018/11/Indian-Farmer.jpg" }}
                  style={styles.avatar}
                />
                <Text style={styles.name}>{userData.name}</Text>
                <Text style={styles.email}>{userData.email}</Text>
              </>
            )}
          </View>
        </View>
      </View>

      {/* Navigation */}
      <ScrollView style={styles.navContainer}>
        {[ // Updated with real navigation links
          { label: "Profile", icon: <User width={24} height={24} color="#6B7280" /> },
          { label: "Change Password", icon: <Lock width={24} height={24} color="#6B7280" /> },
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
    backgroundColor: "#044c0d",
    padding: 24,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  navfix: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    padding: 8,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "white",
  },
  navContainer: {
    padding: 16,
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  navText: {
    flex: 1,
    fontSize: 16,
    color: "#374151",
    marginLeft: 16,
  },
  chevronIcon: {
    marginLeft: "auto",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    backgroundColor: "#F3F4F6",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F43F5E",
    padding: 12,
    borderRadius: 8,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    marginLeft: 8,
  },
});

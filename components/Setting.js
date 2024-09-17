import React from "react";
import { View, Text, TouchableOpacity, Switch, StyleSheet } from "react-native";
import { ArrowLeft, HelpCircle, LogOut } from "lucide-react-native";

export default function SettingsPage() {
  const [language, setLanguage] = React.useState("en");
  const [orderNotifications, setOrderNotifications] = React.useState(false);
  const [messageNotifications, setMessageNotifications] = React.useState(false);
  const [communityNotifications, setCommunityNotifications] = React.useState(false);
  const [profileVisibility, setProfileVisibility] = React.useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
         <View style={styles.navfix}>
        <TouchableOpacity style={styles.iconButton}>
          <ArrowLeft width={24} height={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Language Preference Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Language Preference</Text>
          <TouchableOpacity style={styles.selectBox}>
            <Text style={styles.selectText}>
              {language === "en" ? "English" : language === "hi" ? "Hindi" : "Spanish"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Notification Preferences */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notification Preferences</Text>
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Order Updates</Text>
            <Switch
              value={orderNotifications}
              onValueChange={setOrderNotifications}
            />
          </View>
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Messages</Text>
            <Switch
              value={messageNotifications}
              onValueChange={setMessageNotifications}
            />
          </View>
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Community Updates</Text>
            <Switch
              value={communityNotifications}
              onValueChange={setCommunityNotifications}
            />
          </View>
        </View>

        {/* Privacy and Security */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy and Security</Text>
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Profile Visibility</Text>
            <Switch
              value={profileVisibility}
              onValueChange={setProfileVisibility}
            />
          </View>
          <TouchableOpacity style={styles.changePasswordButton}>
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
        </View>

        {/* Help and Logout Buttons */}
        <TouchableOpacity style={styles.helpButton}>
          <HelpCircle width={20} height={20} color="white" />
          <Text style={styles.buttonText}>Help & Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton}>
          <LogOut width={20} height={20} color="white" />
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f4ea",
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
  iconButton: {
    padding: 8,
    marginRight: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#22543d",
    marginBottom: 12,
  },
  selectBox: {
    backgroundColor: "#edf2f7",
    padding: 12,
    borderRadius: 8,
  },
  selectText: {
    fontSize: 16,
    color: "#2d3748",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  switchLabel: {
    fontSize: 16,
    color: "#22543d",
  },
  changePasswordButton: {
    backgroundColor: "#38a169",
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  helpButton: {
    backgroundColor: "#38a169",
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 16,
  },
  logoutButton: {
    backgroundColor: "#e53e3e",
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
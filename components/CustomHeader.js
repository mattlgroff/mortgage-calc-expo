import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomHeader({ email, onLogout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.email}>{email}</Text>
      <TouchableOpacity onPress={onLogout}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  email: {
    fontSize: 16,
  },
  logout: {
    fontSize: 16,
    color: "#007aff",
  },
});

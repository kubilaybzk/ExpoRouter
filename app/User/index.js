import { Link } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, Text, Linking } from "react-native";

const generateRandomUsername = () => {
   const usernames = ["Router1", "Router2", "Router3","Router4","Router5","Router6"];
  const randomIndex = Math.floor(Math.random() * usernames.length);
  return usernames[randomIndex];
};

const UserHomePage = () => {
  const handleLinkClick = () => {
    const randomUsername = generateRandomUsername();
    const url = `/User/${randomUsername}`;
    return url;
  };

  return (
    <SafeAreaView>
      <Text>UserHomePage</Text>
      <Link style={styles.mybutton} href={handleLinkClick()}>
        <Text>Go RandomUser</Text>
      </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mybutton: {
    fontSize: 23,
    padding: 3,
    marginTop: 12,
    backgroundColor: "#ffb500",
    textAlign: "center",
    borderRadius: 5,
  },
});
export default UserHomePage;

import { View, Text,StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Button } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Profile Page</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Link style={styles.mybutton} href={"/"}>
          <Text>Go Home</Text>
        </Link>
        <Link style={styles.mybutton} href={"/settings"}>
          <Text>Go Settings</Text>
        </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  mybutton: {
    fontSize: 23,
    padding:5,
    marginTop:34,
    backgroundColor:"#ffb500",
    textAlign:"center",
    borderRadius:5
  },
});

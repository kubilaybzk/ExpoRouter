import { View, Text,StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import { Button } from "react-native";

export default function Settings() {
    let router=useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Settings Page</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Button style={styles.mybutton} onPress={()=>router.back()} title="Go Back"/></View>
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
    padding:3,
    marginTop:12,
    backgroundColor:"#ffb500",
    textAlign:"center",
    borderRadius:5
  },
});

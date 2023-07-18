import { View, Text } from "react-native";
import React from "react";
import { Link, usePathname } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";

export default function UserPageWithSlug() {
  let params = usePathname();
  console.log(params);
  return (
    <SafeAreaView>
      <Text>UserName:{JSON.stringify(params)} </Text>
      <Link style={styles.mybutton} href={"/User"}>
        <Text>Go User</Text>
      </Link>
      <Link style={styles.mybutton} href={"/"}>
        <Text>Go HomePage</Text>
      </Link>
    </SafeAreaView>
  );
}

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

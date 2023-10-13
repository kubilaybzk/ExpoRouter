import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Link } from "expo-router";

const ItemList = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Link href="/List/1">News One</Link>
        <Link href="/List/2">News Two</Link>
        <Link href="/List/3">News Three</Link>
      </View>
    </SafeAreaView>
  );
};

export default ItemList;

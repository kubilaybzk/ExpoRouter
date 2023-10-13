import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

const home = () => {
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
        <Text className="">HomePage</Text>
      </View>
    </SafeAreaView>
  );
};

export default home;

import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Link, useRouter } from "expo-router";

const Profile = () => {
  let router = useRouter();

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
        <Text>Profile</Text>
        <Pressable onPress={() => router.push("/")}>
          <Text>LogOut</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

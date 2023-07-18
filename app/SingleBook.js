import { Link, useRouter, useSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function AddressBook() {
  let navigation = useRouter();
  let params = useSearchParams();

  const [data, setData] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch(
        `https://random-data-api.com/api/users/random_user?UserId=${params.UserID}`
      );
      const json = await response.json();

      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  let ContextStyle = "border-b-2 bg-red-400";
  return (
    <SafeAreaView className="flex flex-col justify-center items-center align-middle">
      <View className="flex flex-row items-center justify-between w-full px-2">
        <Text className="text-xl text-red-400">{data.username}'s details</Text>
        <Button onPress={() => navigation.back()} title="Go Back" />
      </View>
      <ScrollView
        className="mt-4 p-2 w-full"
        indicatorStyle="white"
        contentInset={{ bottom: "#000000" }}
      >
        <View className=" mb-3 p-3 w-full space-y-5">
          <View className="flex flex-col w-full justify-center items-center gap-2">
            <Image
              className="rounded-full w-24 h-24 border-2"
              source={{
                uri: data.avatar,
              }}
            />
            <View className="w-full text-center justify-center items-center ">
              <Text className="text-blue-400 text-base">{data.username}</Text>
              <View className="flex flex-col mt-2 w-full text-center items-center justify-center">
                <Text>{data.address && data.address.city}</Text>
                <Text>{data.address && data.address.street_name}</Text>
                <Text>{data.address && data.address.street_address}</Text>
                <Text>{data.address && data.address.country}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

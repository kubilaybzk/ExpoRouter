import { Link, useRouter, useSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function AddressBook() {
 
  let navigation = useRouter();
 
  const [data, setData] = useState([]);
 
  const getPosts = async () => {
    console.log("work !! ");
    try {
      const response = await fetch(
        "https://random-data-api.com/api/users/random_user?size=50"
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

  //Yukarı kaydırınca yeniden api'den yeni verileri çekme işlemi.
  
  const handleScroll = ({ nativeEvent }) => {
    const { contentOffset, layoutMeasurement, contentSize } = nativeEvent;
    const isScrolledToTop = contentOffset.y === 0;
    const isNearBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isScrolledToTop) {
      getPosts();
    }
  };

  return (
    <SafeAreaView className="flex flex-col justify-center items-center align-middle">
      <View className="flex flex-row items-center justify-between w-full px-2">
        <Text className="text-2xl text-red-400">Address Book</Text>
        <Button onPress={() => navigation.back()} title="Go Back" />
      </View>
      <ScrollView
        className="mt-4 p-2 w-full"
        indicatorStyle="white"
        contentInset={{ bottom: "#000000" }}
        onScroll={handleScroll}
      >
        {data &&
          data.map((post) => {
            return (
              <Link
                key={post.id}
                href={`SingleBook?UserID=${post.id}`}
                className=" mb-3 p-3 w-full"
              >
                <View className="flex flex-row w-full gap-2">
                  <Image
                    className="rounded-full w-12 h-12 border-2"
                    source={{
                      uri: post.avatar,
                    }}
                  />
                  <View className="w-fit">
                    <Text className="text-blue-400">{post.username}</Text>
                    <View className="d-flex flex-row flex-wrap w-fit">
                      <Text>{post.address.city}</Text>
                      <Text>{post.address.street_name}</Text>
                      <Text>{post.address.street_address}</Text>
                      <Text>{post.address.country}</Text>
                    </View>
                  </View>
                </View>
              </Link>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
}

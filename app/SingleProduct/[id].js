import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ActivityIndicator } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "react-native";

export default function TwitterHomePage() {
  let { id } = useLocalSearchParams();
  let router = useRouter();
  const insets = useSafeAreaInsets();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  if (isLoading) {
    return <ActivityIndicator size="large" color="#fff" />;
  } else {
    return (
      <SafeAreaView
        style={{
          paddingTop: insets.top,
          paddingLeft: insets.left + 24,
          paddingRight: insets.right + 24,
          paddingBottom: insets.bottom + 12,
        }}
      >
        <View className="border-b mb-4">
          <Text className="text-lg font-black">Single Product</Text>
        </View>

        <View
          style={{
            backgroundColor: "#ffb500",
            position: "relative",
            height: 100,
            justifyContent: "flex-start",
            paddingTop: 12,
            gap: 12,
            alignItems: "center",
          }}
        >
          <Text className="text-white font-bold">{data.title}</Text>
          <View className="bg-Primary p-4 -mb-[100px] rounded-3xl border-black border-2">
            <Image
              source={{ uri: data.images[0] }}
              style={{
                resizeMode: "contain",
                height: 100,
                width: 100,
                padding: 12,
                backgroundColor: "#ffb500",
                border: 2,
              }}
            />
          </View>
        </View>
        <ScrollView className="mt-[100px]">
          <Text
            className="bg-Gray4 text-center text-white rounded uppercase p-0.5"
            style={{ maxWidth: "40%" }}
          >
            {data.category}
          </Text>
          <Text className="font-bold text-base">{data.brand}</Text>
          <Text className="font-medium text-base text-black/75">
            {data.title}
          </Text>
          <View className=" w-fit justify-end items-end rounded-lg">
            <Text className="font-bold text-lg text-white bg-Green2 w-24 text-center rounded-lg ">
              {data.price} TL
            </Text>
          </View>
          <View className="flex flex-1">
            <Text>Total Star: {data.rating}</Text>
          </View>
          <TouchableHighlight
            onPress={() => router.back()}
            className="bg-Green2 mt-4 px-1 py-2"
          >
            <Text className="text-center text-xl text-white">Sepete Ekle</Text>
          </TouchableHighlight>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

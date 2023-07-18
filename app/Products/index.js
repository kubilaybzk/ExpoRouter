import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useRouter } from "expo-router";
import { SectionList } from "react-native";
import { ActivityIndicator } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
export default function TwitterHomePage() {
  let router = useRouter();
  const insets = useSafeAreaInsets();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=10&skip=0"
      );
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
          paddingTop: insets.top + 12,
          paddingLeft: insets.left + 24,
          paddingRight: insets.right + 24,
          paddingBottom: insets.bottom + 12,
        }}
      >
        <View className="border-b mb-4">
          <Text className="text-lg font-black">Product List</Text>
        </View>
        <FlatList
          className="p-2"
          scrollsToTop={true}
          data={data.products}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push(`/SingleProduct/${item.id}`)}
            >
              <View className="mt-3 flex-1 flex-row-reverse gap-w border border-Gray1 p-2 rounded flex  justify-center items-center">
                <Image
                  className="border border-blue-400"
                  source={{ uri: item.images[1] }}
                  style={{ width: 60, height: 60, borderRadius: 30 }}
                />
                <View className="flex-1 flex-col">
                  <Text className="font-bold color-Primary">{item.title}</Text>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    className="font-normal"
                  >
                    {item.description}
                  </Text>
                  <View className="flex-1 mt-2 flex-row justify-between">
                    <Text className="text-Blue1">{item.price} TL</Text>
                    <Text>{item.price}TL</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const randomColor = () => {
  const colors = [
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-indigo-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-teal-200",
    "bg-orange-200",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const generateRandomColor = () => {
  const randomBgColor = randomColor();
  return randomBgColor;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    marginTop: 60,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
});

function Item(item) {
  console.log(item);
  return <Text>{JSON.stringify(item)}</Text>;
}

import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Link, usePathname } from "expo-router";

export default function DynamicFolder() {
  const generateRandomPage = () => {
    const routes = ["Route1", "Route2", "Route3", "Route4", "Route5", "Route6"];
    const randomIndex = Math.floor(Math.random() * routes.length);
    return routes[randomIndex];
  };
  let router = usePathname();

  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          className="bg-Primary w-full text-white text-center p-4 text-lg"
          href={generateRandomPage()}
        >
          <Text>Go Random Page</Text>
        </Link>
        <Text className="font-bold text-2xl mt-4">
          Şuan bulunduğunuz Route :{" "}
        </Text>
        <View className="border-red-600 border w-full p-4 text-lg mt-4">
          <Text className="text-center font-bold">
            {JSON.stringify(router)}
          </Text>
        </View>
        <Link
          className="bg-Primary w-full mt-5 text-white text-center p-4 text-lg"
          href={"/"}
        >
          <Text>Go Home Page</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";

const SingleItem = () => {
  let params = useSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerTitle: `SingleItemId:${params.id}` }} />
      <SafeAreaView>
        <View
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
          }}
        >
          <Text>SingleItem</Text>
          <Text>{JSON.stringify(params.id)}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SingleItem;

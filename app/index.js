import { Link, useRouter } from "expo-router";
import { Pressable, SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  let router = useRouter();

  const handlePress = () => {
    router.replace("Home");
  };

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
        <Pressable onPress={handlePress}>
          <Text>Login</Text>
        </Pressable>
        <Link href={"/Register"} asChild>
          <Pressable>
            <Text>Create Account</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

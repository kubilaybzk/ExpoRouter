import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: "HomePage",
          headerTitle: "Home Page",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="List"
        options={{
          tabBarLabel: "List",
          headerTitle: "List",
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
          headerShown:false
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          headerTitle: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <View
          style={{ display: "flex", flexDirection: "column", marginTop: 24 }}
        >
          <Link style={styles.mybutton} href={"/profile"}>
            <Text>Go Profile</Text>
          </Link>
          <Link style={styles.mybutton} href={"/AddressBook"}>
            <Text>Go Address Book</Text>
          </Link>
          <Link style={styles.mybutton} href={"/Products"}>
            <Text>Go Products</Text>
          </Link>
          <Link style={styles.mybutton} href={"/Selamm"}>
            <Text>Go dynamic folder.</Text>
          </Link>
          <Link style={styles.mybutton} href={"/User"}>
            <Text>Go User</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  mybutton: {
    fontSize: 23,
    padding: 3,
    marginTop: 12,
    backgroundColor: "#ffb500",
    textAlign: "center",
    borderRadius: 5,
  },
});

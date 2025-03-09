import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
      }}
    >
      <Text>Hello</Text>
      <Link href="/search">Search</Link>
      <Link href="/product/piim">piim</Link>
    </View>
  );
}

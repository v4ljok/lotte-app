import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="{tabs}"
        options={{
          headerShowns: false, }}
      />
      <Stack.Screen
        name="products/[id]"
        options={{
          headerShowns: false, }}
      />
    </Stack>
  )
}

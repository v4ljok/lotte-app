import { Tabs } from "expo-router";
import { Image, Text, View, StyleSheet, Platform } from "react-native";

import { icons } from "@/constants/icons";

const styles = StyleSheet.create({
  tabIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginHorizontal: 4,
  },
  tabIconFocused: {
    backgroundColor: "#E3D7FF",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  tabIconDefault: {
    backgroundColor: "transparent",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  labelFocused: {
    color: "#151312",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 6,
  },
  labelDefault: {
    color: "#A8B5DB",
    fontSize: 14,
    marginLeft: 6,
  },
  tabBar: {
    backgroundColor: "#ffffff",
    height: 72,
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
    paddingHorizontal: 8,
    paddingTop: 8,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  tabBarItem: {
    padding: 4,
  },
});

function TabIcon({ focused, icon, title }) {
  return (
    <View
      style={[
        styles.tabIconContainer,
        focused ? styles.tabIconFocused : styles.tabIconDefault,
      ]}
    >
      <Image
        source={icon}
        style={[styles.icon, { tintColor: focused ? "#151312" : "#A8B5DB" }]}
      />
      <Text style={focused ? styles.labelFocused : styles.labelDefault}>
        {title}
      </Text>
    </View>
  );
}

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarActiveTintColor: "#151312",
        tabBarInactiveTintColor: "#A8B5DB",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "History",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.history} title="History" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.scan} title="Scan" />
          ),
        }}
      />
      <Tabs.Screen
        name="bin"
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.cart} title="Cart" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
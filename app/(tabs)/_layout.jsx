import { Tabs } from "expo-router";
import { ImageBackground, Image, Text, View } from "react-native";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

const _layout = () => {

    function TabIcon(focused, icon, title) {
        if (focused) {
          return (
            <ImageBackground
              source={images.highlight}
              className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
            >
              <Image source={icon} tintColor="#151312" className="size-5" />
              <Text className="text-secondary text-base font-semibold ml-2">
                {title}
              </Text>
            </ImageBackground>
          );
        }
      
        return (
          <View className="size-full justify-center items-center mt-4 rounded-full">
            <Image source={icon} tintColor="#A8B5DB" className="size-5" />
          </View>
        );
      }

  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            },
            tabBarStyle: {
            backgroundColor: "#0F0D23",
            //borderTopLeftRadius: 30,
            //borderTopRightRadius: 30,
            //marginHorizontal: 20,
            //marginBottom: 36,
            height: 50,
            width: "100%",
            position: "absolute",
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "#0F0D23",
            },
        }}
    >
        <Tabs.Screen
            name='index'
            options={{
                // title: 'Home',
                title: 'History',
                headerShown: false
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
            name='bin'
            options={{
                title: 'Bin',
                headerShown: false
            }}
        />
{/*         <Tabs.Screen
            name='history'
            options={{
                title: 'History',
                headerShown: false
            }}
        /> */}
        <Tabs.Screen
            name='scan'
            options={{
                title: 'Scan',
                headerShown: false
            }}
        />
    </Tabs>
  )
}

export default _layout   
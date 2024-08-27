import { icons, images } from "@/constants";
import { Stack, Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";

export default function Layout() {
  const TabIcon = ({
    source,
    focused,
  }: {
    source: ImageSourcePropType;
    focused: boolean;
  }) => (
    <View
      className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-general-300" : ""}`}
    >
      <View
        className={`${focused ? "bg-general-400" : ''}  p-[10px] w-12 h-12 items-center justify-center rounded-full`}
      >
        <Image source={source} tintColor="white" resizeMode="contain" className="w-[30px] h-[30px]" />
      </View>
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          marginBottom: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal:20,
          display:"flex",
          height:78,
          position:"absolute"
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.list} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.chat} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.profile} />
          ),
        }}
      />
    </Tabs>
  );
}

import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import { router } from "expo-router";

const Chat = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 px-3">
        <View className="flex-row justify-between my-2">
          <Text className="text-[#333333] text-[22px] font-JakartaBold">
            Chat List
          </Text>
          <TouchableOpacity
            className="bg-white w-[40px] h-[40px] rounded-full justify-center items-center"
            onPress={() => {
              router.back();
            }}
          >
            <Image source={icons.out} className="w-[24px] h-[24px]" />
          </TouchableOpacity>
        </View>
        <View className="flex-1 justify-center items-center">
          <Image source={images.message} className="w-[264px] h-[115px]" />
          <Text className="text-[#212121] text-[27px] font-JakartaBold">
            No Messages, yet.
          </Text>
          <Text className="text-[17px] font-JakartaMedium text-[#858585]">
            No messages in your inbox, yet!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;

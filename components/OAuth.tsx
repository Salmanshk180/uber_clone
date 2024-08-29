import { View, Text, Image, Alert } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";
import { useOAuth } from "@clerk/clerk-expo";
import { googleOAuth } from "@/lib/auth";
import { router } from "expo-router";
const OAuth = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const handleGoogleSignIn = async () => {
    const result = await googleOAuth(startOAuthFlow);

    if (result.code === "session_exists" || result.code === "success") {
      router.replace("/(root)/(tabs)/home");
    }
    if (!result.success) {
      Alert.alert("Error", result.message);
    }
  };

  return (
    <View>
      <View className="flex flex-row items-center justify-between gap-x-3 mt-4">
        <View className="flex-1 h-[1px] bg-general-200" />
        <Text className="text-[17px] font-JakartaSemiBold leading-[20px]">
          Or
        </Text>
        <View className="flex-1 h-[1px] bg-general-200" />
      </View>
      <CustomButton
        text="Log in with google"
        classNames="border border-general-700 shadow-none mt-4 bg-white rounded-full py-[18px] px-[14px]"
        textClassName="text-secondary-900 font-semibold ml-[10px]"
        onPress={() => {
          handleGoogleSignIn();
        }}
        IconLeft={<Image source={icons.google} className="w-5 h-5" />}
      />
    </View>
  );
};

export default OAuth;

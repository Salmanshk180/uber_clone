import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { icons } from "@/constants";
import { useUser } from "@clerk/clerk-expo";

const Profile = () => {
  const { user } = useUser();
  return (
    <SafeAreaView className="flex-1">
      <View className="px-3">
        <Text className="font-JakartaBold text-[24px] my-2">Your profile</Text>
        <Image
          source={user?.imageUrl ? { uri: user?.imageUrl } : icons.profile}
          className="w-[110px] h-[110px] rounded-full mx-auto my-4"
        />
        <View className="bg-white py-[24px] px-[14px] rounded-[16px]">
          <View className="mb-2">
            <Text className="text-[15px] text-[#858585] font-JakartaMedium">
              First name
            </Text>
            <View className="w-full mt-2 bg-[#F6F8FA] rounded-full py-[16px] px-[12px] flex-row items-center justify-between">
              <TextInput
                value={user?.firstName!}
                className="text-[16px] font-JakartaSemiBold"
              />
              <TouchableOpacity>
                <Image source={icons.edit} className="w-[24px] h-[24px]" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="mb-2">
            <Text className="text-[15px] text-[#858585] font-JakartaMedium">
              Last name
            </Text>
            <View className="w-full mt-2 bg-[#F6F8FA] rounded-full py-[16px] px-[12px] flex-row items-center justify-between">
              <TextInput
                value={user?.lastName!}
                className="text-[16px] font-JakartaSemiBold"
              />
              <TouchableOpacity>
                <Image source={icons.edit} className="w-[24px] h-[24px]" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="mb-2">
            <Text className="text-[15px] text-[#858585] font-JakartaMedium">
              Email
            </Text>
            <View className="w-full mt-2 bg-[#F6F8FA] rounded-full py-[16px] px-[12px] flex-row items-center justify-between">
              <TextInput
                value={user?.emailAddresses[0].emailAddress!}
                className="text-[16px] font-JakartaSemiBold"
              />
              <TouchableOpacity>
                <Image source={icons.edit} className="w-[24px] h-[24px]" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="mb-2">
            <Text className="text-[15px] text-[#858585] font-JakartaMedium">
              Email status
            </Text>
            <View className="w-full mt-2 bg-[#F6F8FA] rounded-full py-[16px] px-[12px] flex-row items-center justify-between">
              <View className="border-[#0CC25F] bg-[#E7F9EF] border items-center rounded-full py-[3px] px-[16px] flex-row">
                <Image source={icons.charm} />
                <Text className="text-[15px] font-JakartaBold ml-2">
                  {user?.hasVerifiedEmailAddress ? "Verified" : "Not Verified"}
                </Text>
              </View>
              <TouchableOpacity>
                <Image source={icons.edit} className="w-[24px] h-[24px]" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text className="text-[15px] text-[#858585] font-JakartaMedium">
              Phone number
            </Text>
            <View className="w-full mt-2 bg-[#F6F8FA] rounded-full py-[16px] px-[12px] flex-row items-center justify-between">
              <TextInput
                value={user?.phoneNumbers[0]?.phoneNumber! ?? "Not Provided"}
                className="text-[16px] font-JakartaSemiBold"
              />
              <TouchableOpacity>
                <Image source={icons.edit} className="w-[24px] h-[24px]" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

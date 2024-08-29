import { View, Text } from "react-native";
import React from "react";
import { useLocationStore } from "@/store";
import { SafeAreaView } from "react-native-safe-area-context";
import RideLayout from "@/components/RideLayout";
import GoogleTextInput from "@/components/GoogleTextInput";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();
  return (
    <SafeAreaView className="flex-1">
      <RideLayout snapPoints={["40%", "85%"]}>
        <View className="px-[20px] flex-1">
          <View className="mb-3">
            <Text className="text-xl mb-1">From</Text>
            <GoogleTextInput
              containerStyle="bg-neutral-100"
              textInputBackgroundColor="transparent"
              icon={icons.target}
              initialLocation={userAddress!}
              handlePress={(location) => {
                setUserLocation(location);
              }}
            />
          </View>
          <View className="mb-3">
            <Text className="text-xl mb-1">To</Text>
            <GoogleTextInput
              containerStyle="bg-neutral-100"
              textInputBackgroundColor="transparent"
              icon={icons.pin}
              initialLocation={destinationAddress!}
              handlePress={(location) => {
                setDestinationLocation(location);
              }}
            />
          </View>
          <CustomButton
            text="Find Now"
            classNames="bg-primary-500 rounded-full p-[16px] my-3"
            onPress={() => {
              router.push("/(root)/confirm-ride");
            }}
          />
        </View>
      </RideLayout>
    </SafeAreaView>
  );
};

export default FindRide;

import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import RideLayout from "@/components/RideLayout";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { useDriverStore } from "@/store";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { formatTime } from "@/lib/utils";

const ConfirmRide = () => {
  const { selectedDriver, setSelectedDriver, drivers } = useDriverStore();
  return (
    <SafeAreaView className="flex-1">
      <RideLayout snapPoints={["55%", "90%"]}>
        <FlatList
          data={drivers}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={`${selectedDriver === item.id && "bg-[#E6F3FF]"} py-[20px] px-[16px] flex-row justify-between items-center`}
              onPress={() => {
                setSelectedDriver(item.id);
              }}
            >
              <View>
                <Image
                  source={{ uri: item.profile_image_url }}
                  className="w-[44px] h-[44px] rounded-full"
                />
              </View>
              <View className="ml-2 flex-1 ">
                <View className="flex-row items-center mb-[5px]">
                  <Text className="text-[15px] font-semibold">
                    {item.first_name} {item.last_name}
                  </Text>
                  <View className="ml-[6px] flex-row items-center">
                    <Image source={icons.star} className="w-[14px] h-[14px]" />
                    <Text className="text-[11px] font-medium">
                      {item.rating}
                    </Text>
                  </View>
                </View>
                <View className="mt-[5px] flex-row">
                  <View className="flex-row items-center">
                    {/* <Image
                      source={icons.dollar}
                      className="w-[14px] h-[14px] mr-1"
                    /> */}
                    <Text className="text-[11px] font-medium">
                      &#x20B9; {item?.price}
                    </Text>
                  </View>
                  <View className="w-[1px] h-[100%] bg-black mx-2" />
                  <View className="flex-row items-center">
                    <Text className="text-[11px] font-medium">
                      {formatTime(+item.time!.toFixed(2))}
                    </Text>
                  </View>
                  <View className="w-[1px] h-[100%] bg-black mx-2" />
                  <View className="flex-row items-center">
                    <Text className="text-[11px] font-medium">
                      {item.car_seats} Seats
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Image
                  source={{ uri: item.car_image_url }}
                  className="w-[72px] h-[44px] rounded-full flex-1"
                />
              </View>
            </TouchableOpacity>
          )}
          ListFooterComponent={() => (
            <CustomButton
              text="Select Ride"
              classNames="bg-primary-500 my-3 rounded-full py-[16px] px-[18px] mx-5"
              onPress={() => {
                if (selectedDriver == null) {
                  Alert.alert("Info", "Please select driver");
                } else {
                  router.push("/(root)/book-ride");
                }
              }}
            />
          )}
        />
      </RideLayout>
    </SafeAreaView>
  );
};

export default ConfirmRide;

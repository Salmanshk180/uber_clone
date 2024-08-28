import { View, Text, Image } from "react-native";
import React from "react";
import { Ride } from "@/types/types";
import { icons } from "@/constants";
import { formatDate, formatTime } from "@/lib/utils";

const RideCard = ({ ride }: { ride: any }) => {
  return (
    <View className="flex  bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3 p-[14px]">
      <View className="flex flex-row items-center justify-between w-full mb-[16px]">
        <Image
          source={{
            uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=600&height=400&center=lonlat:${ride.destination_longitude},${ride.destination_latitude}&zoom=14&apiKey=${
              process.env.EXPO_PUBLIC_GEOAPIFY_KEY
            }`,
          }}
          className="w-[80px] h-[90px] rounded-lg"
        />
        <View className="flex-1 ml-[16px] items-start gap-y-4">
          <View className="flex-row items-center gap-[8px]">
            <Image source={icons.to} className="w-[24px] h-[24px]" />
            <Text
              className="text-[13px] text-secondary-900 font-medium"
              numberOfLines={1}
            >
              {ride.origin_address}
            </Text>
          </View>
          <View className="flex-row items-center gap-[8px]">
            <Image source={icons.point} className="w-[24px] h-[24px]" />
            <Text
              className="text-[13px] text-secondary-900 font-medium"
              numberOfLines={1}
            >
              {ride.destination_address}
            </Text>
          </View>
        </View>
      </View>
      <View className="bg-general-500 rounded-[14px] p-[16px]">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-[15px] text-general-200 font-JakartaMedium">
            Date & Time
          </Text>
          <Text className="text-[15px] font-JakartaSemiBold text-secondary-900">
            {formatDate(ride.created_at)}, {formatTime(ride.ride_time)}
          </Text>
        </View>
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-[15px] text-general-200 font-JakartaMedium">
            Driver
          </Text>
          <Text className="text-[15px] font-JakartaSemiBold text-secondary-900">
            {ride.driver.first_name}, {ride.driver.last_name}
          </Text>
        </View>
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-[15px] text-general-200 font-JakartaMedium">
            Car Seats
          </Text>
          <Text className="text-[15px] font-JakartaSemiBold text-secondary-900">
            {ride.driver.car_seats}
          </Text>
        </View>
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-[15px] text-general-200 font-JakartaMedium">
            Payment Status
          </Text>
          <Text
            className={`text-[15px] capitalize font-JakartaSemiBold text-secondary-900 ${ride.payment_status === "paid" ? "text-green-500" : "text-red-500"}`}
          >
            {ride.payment_status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RideCard;

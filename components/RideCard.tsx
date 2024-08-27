import { View, Text, Image } from "react-native";
import React from "react";
import { Ride } from "@/types/types";
import { icons } from "@/constants";

const RideCard = ({ ride }: { ride: Ride }) => {
  return (
    <View className="flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3 p-[14px]">
      <View className="flex flex-row items-center justify-between w-full">
        <Image
          source={{
            uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=600&height=400&center=lonlat:${ride.destination_longitude},${ride.destination_latitude}&zoom=14&apiKey=${
              process.env.EXPO_PUBLIC_GEOAPIFY_KEY
            }`,
          }}
          className="w-[80px] h-[90px] rounded-lg"
        />
        <View>
            <View>
            <Image />
          <Text>{ride.origin_address}</Text>
            </View>
          <Text>{ride.destination_address}</Text>
        </View>
      </View>
    </View>
  );
};

export default RideCard;

import { View, Text, FlatList, Image, ImageSourcePropType } from "react-native";
import React from "react";
import RideLayout from "@/components/RideLayout";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";

const drivers = [
  {
    driver_id: 1,
    first_name: "James",
    last_name: "Wilson",
    profile_image_url:
      "https://ucarecdn.com/dae59f69-2c1f-48c3-a883-017bcf0f9950/-/preview/1000x666/",
    car_image_url:
      "https://ucarecdn.com/a2dc52b2-8bf7-4e49-9a36-3ffb5229ed02/-/preview/465x466/",
    car_seats: 4,
    rating: 4.8,
  },
  {
    driver_id: 2,
    first_name: "David",
    last_name: "Brown",
    profile_image_url:
      "https://ucarecdn.com/6ea6d83d-ef1a-483f-9106-837a3a5b3f67/-/preview/1000x666/",
    car_image_url:
      "https://ucarecdn.com/a3872f80-c094-409c-82f8-c9ff38429327/-/preview/930x932/",
    car_seats: 5,
    rating: 4.6,
  },
  {
    driver_id: 3,
    first_name: "Michael",
    last_name: "Johnson",
    profile_image_url:
      "https://ucarecdn.com/0330d85c-232e-4c30-bd04-e5e4d0e3d688/-/preview/826x822/",
    car_image_url:
      "https://ucarecdn.com/289764fb-55b6-4427-b1d1-f655987b4a14/-/preview/930x932/",
    car_seats: 4,
    rating: 4.7,
  },
  {
    driver_id: 4,
    first_name: "Robert",
    last_name: "Green",
    profile_image_url:
      "https://ucarecdn.com/fdfc54df-9d24-40f7-b7d3-6f391561c0db/-/preview/626x417/",
    car_image_url:
      "https://ucarecdn.com/b6fb3b55-7676-4ff3-8484-fb115e268d32/-/preview/930x932/",
    car_seats: 4,
    rating: 4.9,
  },
];

const ConfirmRide = () => {
  return (
    <RideLayout>
      <FlatList
        data={drivers}
        renderItem={({ item }) => (
          <View className="mb-1 py-[20px] px-[16px] flex-row justify-between items-center">
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
                  <Text className="text-[11px] font-medium">{item.rating}</Text>
                </View>
              </View>
              <View className="mt-[5px] flex-row">
                <View className="flex-row items-center">
                  <Image
                    source={icons.dollar}
                    className="w-[14px] h-[14px] mr-1"
                  />
                  <Text className="text-[11px] font-medium">$65</Text>
                </View>
                <View className="w-[1px] h-[100%] bg-black mx-2" />
                <View className="flex-row items-center">
                  <Text className="text-[11px] font-medium">10 min</Text>
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
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View className="border-b-[0.5px] w-[90%] mx-auto" />
        )}
        ListFooterComponent={() => (
          <CustomButton
            text="Select Ride"
            classNames="bg-primary-500 rounded-full py-[16px] px-[18px] mx-2"
            onPress={() => {}}
          />
        )}
      />
    </RideLayout>
  );
};

export default ConfirmRide;

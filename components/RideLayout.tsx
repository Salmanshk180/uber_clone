import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Map from "./Map";
import { icons } from "@/constants";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { router } from "expo-router";
const RideLayout = ({ children }: { children: React.ReactNode }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <GestureHandlerRootView>
      <View className="bg-white h-screen relative">
        <View className="absolute z-10 top-4 left-4 flex-row items-center">
          <TouchableOpacity
            className="bg-white justify-center items-center rounded-full w-[40px] h-[40px]"
            onPress={() => {
              router.back();
            }}
          >
            <Image source={icons.backArrow} className="w-[24px] h-[24px]" />
          </TouchableOpacity>
          <Text className="ml-[16px] text-[24px] leading-[28px] font-bold">
            Ride
          </Text>
        </View>
        <Map />
      </View>

      <BottomSheet ref={bottomSheetRef} snapPoints={["40%", "85%"]} index={0}>
        <BottomSheetView style={{ flex: 1 }}>
          <View className="flex-1">{children}</View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default RideLayout;

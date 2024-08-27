import { View, Text, TouchableOpacity, Image } from "react-native";
import React, {
  LegacyRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Href, router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";
const Welcome = () => {
  const swiperRef = useRef() as RefObject<Swiper>;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex-1 h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up" as Href)}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        onIndexChanged={(index: number) => setActiveIndex(index)}
        loop={false}
        dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0]" />}
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#2F74FA] rounded-full" />
        }
      >
        {onboarding.map((item, index) => (
          <View className="flex justify-center items-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <Text className="font-bold text-[28px] text-center leading-[33.6px] text-black mb-[10px]">
              {item.title}
            </Text>
            <Text className="font-medium text-[17px] leading-[24px] font-JakartaSemiBold text-center text-[#858585]">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        text={isLastSlide ? "Get Started" : "Next"}
        classNames="bg-primary-500 rounded-full py-[18px] px-[16px] w-11/12 mt-12 mb-4"
        onPress={() => {
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1);
        }}
      />
    </SafeAreaView>
  );
};

export default Welcome;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomButtonProps {
  text: string;
  classNames: string;
  IconLeft?: React.ReactNode;
  IconRight?: React.ReactNode;
  textClassName?:string;
  onPress: () => void;
}

const CustomButton = ({
  text,
  onPress,
  IconLeft,
  IconRight,
  classNames,
  textClassName
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${classNames}`}
    >
      {IconLeft && IconLeft}
      <Text className={`text-white font-bold text-[17px] ${textClassName}`}>{text}</Text>
      {IconRight && IconRight}
    </TouchableOpacity>
  );
};

export default CustomButton;

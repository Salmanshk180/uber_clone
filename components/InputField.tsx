import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { InputFieldProps } from "@/types/types";

const InputField = ({
  label,
  icon,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-20}
    >
      <TouchableWithoutFeedback
        onPress={() => {
        //   Keyboard.dismiss();
        }}
      >
        <View className="items-start w-full my-2">
          <Text className="text-[17px] mb-[6px] text-[#333333] w-full font-JakartaSemiBold">
            {label}
          </Text>
          <View className="bg-general-500 py-[12px] rounded-full px-[16px] items-baseline flex-row">
            {icon && <Image source={icon} className="h-6 w-6 mr-[6px]" />}
            <TextInput
              className={`rounded-full font-JakartaSemiBold text-[15px] px-2 flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;

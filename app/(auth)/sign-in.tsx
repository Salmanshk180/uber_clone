import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignIn } from "@clerk/clerk-expo";

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      return
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password:form.password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.navigate("/(root)/(tabs)/home")
      } else {
        Alert.alert('Error',"Sign In failed")
      }
    } catch (err: any) {
      Alert.alert('Error',err.errors[0].longMessage)
    }
  }, [isLoaded,form.email, form.password])
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 relative">
        <Image source={images.signUpCar} className="w-full h-[250px]" />
        <View className="absolute bottom-8 w-full px-[24px]">
          <Text className="text-[24px] leading-[28px] font-JakartaBold  text-secondary-900">
            Welcome 👋
          </Text>
        </View>
      </View>
      <View className="px-[24px] mt-1">
        <InputField
          label="Email"
          icon={icons.email}
          placeholder="Enter Your Email"
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <InputField
          label="Password"
          icon={icons.lock}
          placeholder="Enter Your Password"
          secureTextEntry
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />
      </View>
      <View className="px-[24px] mt-6">
        <CustomButton
          text="Sign In"
          classNames="bg-primary-500 py-[18px] px-[16px] rounded-full"
          onPress={() => {onSignInPress()}}
        />
        <OAuth/>
        <Link
          href={"/sign-up"}
          className="text-[17px] font-JakartaMedium text-general-200 text-center mt-10"
        >
          <Text>Don't have an Account?</Text>
          <Text className="font-semibold text-primary-500"> Sign up</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

export default SignIn;

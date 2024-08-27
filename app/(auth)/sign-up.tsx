import { View, Text, ScrollView, Image, Alert, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignUp } from "@clerk/clerk-expo";
import Modal from "react-native-modal";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [verification, setVerification] = useState({
    status: "default",
    error: "",
    code: "",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerification({ ...verification, status: "pending", error: "" });
    } catch (err: any) {
      setVerification({ ...verification, error: err?.errors[0].longMessage });
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({ ...verification, status: "success", error: "" });
      } else {
        setVerification({
          ...verification,
          status: "failed",
          error: "Verification failed",
        });
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err: any) {
      setVerification({
        ...verification,
        error: err.errors[0].longMessage,
        status: "failed",
      });
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1,backgroundColor:"white" }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="relative">
          <Image source={images.signUpCar} className="w-full h-[250px]" />
          <View className="absolute bottom-8 w-full px-[24px]">
            <Text className="text-[24px] leading-[28px] font-JakartaBold text-secondary-900">
              Create Your Account
            </Text>
          </View>
        </View>
        <View className="px-[24px] mt-1">
          <InputField
            label="Name"
            icon={icons.person}
            placeholder="Enter Your Name"
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
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
        <View className="flex-1 px-[24px] mt-6">
          <CustomButton
            text="Sign Up"
            classNames="bg-primary-500 py-[18px] px-[16px] rounded-full"
            onPress={onSignUpPress}
          />
          <OAuth />
          <Link
            href={"/sign-in"}
            className="text-[17px] font-JakartaMedium text-general-200 text-center mt-10"
          >
            <Text>Already have an Account?</Text>
            <Text className="font-semibold text-primary-500"> Log in</Text>
          </Link>

          <Modal
            isVisible={verification.status === "pending"}
            onModalHide={() => {
              if (verification.status === "success") {
                setShowSuccessModal(true);
              }
            }}
          >
            <View className="min-h-[300px] bg-white rounded-2xl px-7 py-9">
              <Text className="text-2xl font-JakartaBold">Verification</Text>
              <Text>We've sent a verification code to {form.email}</Text>
              <InputField
                icon={icons.lock}
                placeholder="1234"
                value={verification.code}
                keyboardType="numeric"
                label="Code"
                onChangeText={(code) => setVerification({ ...verification, code })}
              />
              {verification.error && (
                <Text className="text-red-500 text-sm mt-16">
                  {verification.error}
                </Text>
              )}
              <CustomButton
                text="Verify"
                classNames="bg-success-500 mt-5 py-[16px] px-[18px] rounded-full"
                onPress={onPressVerify}
              />
            </View>
          </Modal>

          <Modal isVisible={showSuccessModal}>
            <View className="bg-white min-h-[300px] px-7 py-9 rounded-2xl">
              <Image
                source={images.check}
                className="w-[110px] h-[110px] mx-auto my-5"
              />
              <Text className="text-3xl font-JakartaBold text-center">
                Verified
              </Text>
              <Text className="text-base text-gray-400 font-JakartaMedium text-center mt-2">
                You have successfully verified your account.
              </Text>
              <CustomButton
                text="Browse Home"
                classNames="mt-5 px-[18px] py-[16px] rounded-full bg-primary-500"
                onPress={() => router.push("/(root)/(tabs)/home")}
              />
            </View>
          </Modal>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

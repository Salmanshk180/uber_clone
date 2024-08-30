import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import { useFetch } from "@/lib/fetch";
import { useUser } from "@clerk/clerk-expo";
import RideCard from "@/components/RideCard";
import { Ride } from "@/types/types";

const Rides = () => {
  const { user } = useUser();
  const { data, loading } = useFetch<Ride[]>(`/(api)/ride/${user?.id}`);
  return (
    <SafeAreaView className="flex-1 border">
      <FlatList
        data={data}
        renderItem={({ item }) => <RideCard ride={item} />}
        keyExtractor={(item, index) => index.toString()}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
          flex: 1,
        }}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center">
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  className="w-40 h-40"
                  alt="No recent rides found"
                  resizeMode="contain"
                />
                <Text className="text-sm">No rides found</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={
          <>
            <Text className="text-xl text-[#333333] font-JakartaBold my-5">
              All Rides
            </Text>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Rides;

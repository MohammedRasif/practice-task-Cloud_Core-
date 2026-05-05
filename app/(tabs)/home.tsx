import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import bgImage from "../../assets/images/Container.png";
import checkIn from "../../assets/images/Vector (9).png";
import history from "../../assets/images/history_18991564 1.png";
import upgrade from "../../assets/images/Frame.png";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-[#241504]">
      {" "}
      {/* Image Overlay */}
      <ImageBackground source={bgImage} style={{ flex: 1 }} resizeMode="cover">
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View className="flex-row justify-between items-center px-5 pt-12 pb-4">
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                <ImageBackground
                  source={{ uri: "https://i.pravatar.cc/300" }}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View>
                <Text className="text-white text-sm">Welcome back,</Text>
                <Text className="text-white text-2xl font-bold">Alex</Text>
              </View>
            </View>

            <View className="w-9 h-9 bg-white/10 rounded-full items-center justify-center">
              <Text className="text-white text-xl">🛎️</Text>
            </View>
          </View>

          {/* Premium Card */}
          <View className="mx-5 mb-6 p-8 rounded-3xl border border-b border-l border-r border-yellow-200 bg-black/40 shadow-lg">
            <View className="flex-row justify-between items-start">
              <View className="flex-row items-center gap-2">
                <View className="px-3 py-1 rounded-full border border-yellow-600 bg-yellow-600/20">
                  <Text className="text-yellow-600 text-md font-semibold">
                    Premium
                  </Text>
                </View>
              </View>
              <View>
                <Text className="text-white  text-[26px] font-bold">70%</Text>
                <Text className="text-yellow-500 text-xs">Discount</Text>
              </View>
            </View>

            <Text className="text-gray-400 text-[14px] mb-4">
              Member since Oct 2025
            </Text>

            {/* Visits Remaining */}
            <View className="flex-row items-center gap-4 pb-8 space-x-2">
              <View className="w-20 h-20 rounded-full border-4 border-yellow-600 items-center justify-center bg-yellow-600/10">
                <Text className="text-yellow-500 text-5xl font-bold">7</Text>
              </View>
              <View className="flex-1">
                <Text className="text-white text-[22px] font-semibold">
                  Visits Remaining
                </Text>

                <Text className="text-white text-[15px] mt-1">
                  Resets Nov 1, 2025
                </Text>
                <Text className="text-gray-400 text-[14px] mt-1">Included</Text>
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <View className="flex-row justify-between gap-3 px-5 mb-8">
            <TouchableOpacity className="flex-1 py-8 rounded-xl bg-black/50 border border-white/20 shadow-2xl items-center justify-center">
              <Image source={upgrade} className="w-9 h-9 mb-2" />
              <Text className="text-white text-[15px] font-semibold">
                Check in
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-1 py-8 rounded-xl bg-black/50 border border-white/20 items-center justify-center shadow-2xl"
              style={{
                elevation: 22,
                shadowColor: "#000000",
                shadowOpacity: 0.8,
                shadowRadius: 30,
                shadowOffset: { width: 0, height: 10 },
              }}
            >
              {" "}
              <Image source={history} className="w-9 h-9 mb-2" />
              <Text className="text-white text-[15px] font-semibold">
                History
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 py-8 rounded-xl bg-black/50 border border-white/20 shadow-2xl items-center justify-center">
              <Image source={checkIn} className="w-9 h-9 mb-2" />

              <Text className="text-white text-[15px] font-semibold">
                Upgrade
              </Text>
            </TouchableOpacity>
          </View>

          {/* Recent Visits */}
          <View className="flex-row justify-between items-center px-5 mb-4">
            <Text className="text-white text-[32px] font-semibold">
              Recent Visits
            </Text>
            <TouchableOpacity>
              <Text className="text-yellow-600 text-sm font-semibold">
                View All ›
              </Text>
            </TouchableOpacity>
          </View>

          {/* Visit Items */}
          <View className="px-5 gap-3 pb-8">
            {[1, 2, 3].map((item) => (
              <View
                key={item}
                className="flex-row items-center justify-between p-4 rounded-lg bg-black/40 border border-white/5"
              >
                <View className="flex-row items-center gap-4 flex-1">
                  <View className="w-12 h-12 rounded-lg bg-yellow-600/20 items-center justify-center">
                    <Text className="text-lg">🏪</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-white font-semibold text-[16px]">
                      Yours London
                    </Text>
                    <View className="flex-row gap-2 mt-1">
                      <Text className="text-gray-400 text-[13px]">24 Mar 2025</Text>
                      <Text className="text-gray-400 text-[13px]">•</Text>
                      <Text className="text-gray-400 text-[13px]">4 Cocktails</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text className="text-yellow-500 font-bold text-[16px]">
                    £ 45.50
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

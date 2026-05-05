import React from 'react'
import { ImageBackground, StatusBar, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import bgImage from "../../assets/images/Container.png"

export default function History() {
  return (
    <View className="flex-1 bg-[#241504]">
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        className="flex-1"
      >
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

        <ScrollView className="flex-1 px-5 pt-12 pb-20">
          
          {/* Header */}
          <View className="mb-8">
            <Text className="text-white text-4xl font-bold">History</Text>
            <Text className="text-[#E6B84E] text-lg mt-1">Your Activity</Text>
          </View>

          {/* Stats Row */}
          <View className="flex-row justify-between mb-8">
            <View className="items-center bg-[#2A2419] rounded-3xl px-6 py-4 flex-1 mr-3">
              <Text className="text-[#E6B84E] text-3xl font-bold">24</Text>
              <Text className="text-gray-400 text-sm mt-1">Check-ins</Text>
            </View>
            <View className="items-center bg-[#2A2419] rounded-3xl px-6 py-4 flex-1 ml-3">
              <Text className="text-[#E6B84E] text-3xl font-bold">12</Text>
              <Text className="text-gray-400 text-sm mt-1">Events</Text>
            </View>
          </View>

          {/* Recent Activity */}
          <Text className="text-white text-xl font-semibold mb-4">Recent Activity</Text>

          {/* Activity Cards */}
          {[
            { title: "Checked-in at Library", time: "Today, 11:45 AM", icon: "library" },
            { title: "Attended Tech Workshop", time: "Yesterday, 4:30 PM", icon: "school" },
            { title: "Checked-in at Cafeteria", time: "Apr 13, 2:15 PM", icon: "cafe" },
            { title: "Annual Sports Meet", time: "Apr 10, 10:00 AM", icon: "trophy" },
          ].map((item, index) => (
            <TouchableOpacity 
              key={index}
              className="bg-[#2A2419] rounded-3xl p-5 mb-4 flex-row items-center"
            >
              <View className="bg-[#E6B84E]/10 w-12 h-12 rounded-2xl items-center justify-center">
                <Ionicons name={item.icon as any} size={28} color="#E6B84E" />
              </View>

              <View className="ml-4 flex-1">
                <Text className="text-white font-semibold text-[17px]">{item.title}</Text>
                <Text className="text-gray-400 text-sm mt-1">{item.time}</Text>
              </View>

              <Ionicons name="chevron-forward" size={22} color="#666" />
            </TouchableOpacity>
          ))}

          {/* Older History Section */}
          <Text className="text-white text-xl font-semibold mt-6 mb-4">Older</Text>

          <TouchableOpacity className="bg-[#2A2419]/70 rounded-3xl p-5 mb-4">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-gray-400">March 2026</Text>
                <Text className="text-white text-lg font-medium mt-1">18 Activities</Text>
              </View>
              <Ionicons name="calendar-clear" size={28} color="#E6B84E" />
            </View>
          </TouchableOpacity>

          {/* Empty Space */}
          <View className="h-10" />
        </ScrollView>
      </ImageBackground>
    </View>
  )
}
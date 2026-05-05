import React from 'react'
import { ImageBackground, StatusBar, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import bgImage from "../../assets/images/Container.png"

export default function Event() {
  return (
    <View className="flex-1 bg-[#241504]">
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        className="flex-1"
      >
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

        <ScrollView className="flex-1 px-5 pt-12">
          
          {/* Header */}
          <View className="mb-8">
            <Text className="text-white text-4xl font-bold">Events</Text>
            <Text className="text-[#E6B84E] text-lg mt-1">Upcoming Events</Text>
          </View>

          {/* Today's Event Card */}
          <TouchableOpacity className="bg-black/40 rounded-3xl p-5 mb-6 border border-[#E6B84E]/30">
            <View className="flex-row justify-between items-start">
              <View>
                <Text className="text-[#E6B84E] text-sm font-semibold">TODAY</Text>
                <Text className="text-white text-2xl font-bold mt-1">Annual Tech Fest 2026</Text>
                <Text className="text-gray-400 mt-2">6:30 PM • University Auditorium</Text>
              </View>
              <Ionicons name="star" size={28} color="#E6B84E" />
            </View>

            <TouchableOpacity className="bg-[#E6B84E] mt-6 py-3.5 rounded-2xl">
              <Text className="text-black font-semibold text-center text-lg">Join Now</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Upcoming Events */}
          <Text className="text-white text-xl font-semibold mb-4">Upcoming</Text>

          {/* Event Cards */}
          {[1, 2, 3].map((item, index) => (
            <TouchableOpacity 
              key={index}
              className="bg-black/40 rounded-3xl p-4 mb-4 flex-row items-center"
            >
              <View className="bg-[#E6B84E]/10 w-16 h-16 rounded-2xl items-center justify-center">
                <Ionicons name="calendar" size={32} color="#E6B84E" />
              </View>

              <View className="ml-4 flex-1">
                <Text className="text-white font-semibold text-lg">Workshop on AI & ML</Text>
                <Text className="text-gray-400 text-sm">April 20, 2026 • 4:00 PM</Text>
                <Text className="text-[#E6B84E] text-sm mt-1">Engineering Building - Room 305</Text>
              </View>

              <Ionicons name="chevron-forward" size={24} color="#666" />
            </TouchableOpacity>
          ))}

          <View className="h-20" />

        </ScrollView>
      </ImageBackground>
    </View>
  )
}
import React from 'react'
import { ImageBackground, StatusBar, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import bgImage from "../../assets/images/Container.png"

export default function Profile() {
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
          <View className="flex-row items-center justify-between mb-8">
            <TouchableOpacity>
              <Ionicons name="chevron-back" size={28} color="#fff" />
            </TouchableOpacity>
            <Text className="text-white text-3xl font-bold">Profile</Text>
            <View style={{ width: 28 }} />
          </View>

          {/* Profile Picture & Info */}
          <View className="items-center mb-10">
            <View className="relative">
              <View className="w-28 h-28 bg-[#E6B84E] rounded-full items-center justify-center">
                <Text className="text-black text-5xl font-bold">AJ</Text>
              </View>
              {/* Verified Badge */}
              <View className="absolute bottom-1 right-1 bg-[#E6B84E] w-8 h-8 rounded-full items-center justify-center border-2 border-[#241504]">
                <Ionicons name="checkmark" size={18} color="#000" />
              </View>
            </View>

            <Text className="text-white text-2xl font-bold mt-4">Alex Johnson</Text>
            <Text className="text-gray-400 text-base mt-1">alexjohnson@example.com</Text>
          </View>

          {/* Personal Info */}
          <Text className="text-[#E6B84E] text-lg font-semibold mb-3">Personal Info</Text>
          
          <View className="bg-[#2A2419] rounded-3xl p-1 mb-8">
            <TouchableOpacity className="flex-row items-center justify-between px-5 py-4 border-b border-[#3A2F1F]">
              <View className="flex-row items-center">
                <Ionicons name="person" size={22} color="#E6B84E" />
                <Text className="text-white ml-4 text-base">Puppu roy</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between px-5 py-4 border-b border-[#3A2F1F]">
              <View className="flex-row items-center">
                <Ionicons name="mail" size={22} color="#E6B84E" />
                <Text className="text-white ml-4 text-base">puppuroy638@gmail.com</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between px-5 py-4 border-b border-[#3A2F1F]">
              <View className="flex-row items-center">
                <Ionicons name="lock-closed" size={22} color="#E6B84E" />
                <Text className="text-white ml-4 text-base">••••••••••</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between px-5 py-4 border-b border-[#3A2F1F]">
              <View className="flex-row items-center">
                <Ionicons name="card" size={22} color="#E6B84E" />
                <Text className="text-white ml-4 text-base">Subscription</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between px-5 py-4">
              <View className="flex-row items-center">
                <Ionicons name="receipt" size={22} color="#E6B84E" />
                <Text className="text-white ml-4 text-base">Billing History</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          {/* Legal Options */}
          <Text className="text-[#E6B84E] text-lg font-semibold mb-3">Legal Options</Text>
          
          <View className="bg-[#2A2419] rounded-3xl p-1 mb-8">
            <TouchableOpacity className="flex-row items-center justify-between px-5 py-4 border-b border-[#3A2F1F]">
              <View className="flex-row items-center">
                <Ionicons name="help-circle" size={22} color="#E6B84E" />
                <Text className="text-white ml-4 text-base">Help & Support</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between px-5 py-4 border-b border-[#3A2F1F]">
              <View className="flex-row items-center">
                <Ionicons name="document-text" size={22} color="#E6B84E" />
                <Text className="text-white ml-4 text-base">Terms & Condition</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between px-5 py-4">
              <View className="flex-row items-center">
                <Ionicons name="shield-checkmark" size={22} color="#E6B84E" />
                <Text className="text-white ml-4 text-base">Privacy Policy</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          {/* Log Out Button */}
          <TouchableOpacity className="bg-red-600/90 py-4 rounded-3xl mb-10">
            <Text className="text-white text-center font-semibold text-lg">Log Out</Text>
          </TouchableOpacity>

        </ScrollView>
      </ImageBackground>
    </View>
  )
}
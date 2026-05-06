import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View className="bg-gradient-to-b from-blue-600 to-blue-400 px-4 pt-6 pb-8 rounded-b-3xl">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <View>
          <Text className="text-white text-sm">Good morning,</Text>
          <Text className="text-white text-2xl font-bold">Ahmed</Text>
        </View>
        <TouchableOpacity className="bg-white/20 rounded-full p-3">
          <Text className="text-white text-xl">🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="mb-6">
        <Text className="text-white text-lg font-semibold mb-3">
          Platform for Saudi Jobs
        </Text>
        <Text className="text-white/80 text-sm mb-4">
          Find your next opportunity in Saudi Arabia
        </Text>
        
        <View className="flex-row items-center bg-white rounded-full px-4 py-3 gap-2">
          <Text className="text-xl">🔍</Text>
          <TextInput
            className="flex-1 text-gray-800"
            placeholder="Search jobs, skills..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity className="bg-blue-600 rounded-full p-2">
            <Text className="text-white text-sm font-semibold">Go</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quick Stats */}
      <View className="flex-row gap-3">
        <View className="flex-1 bg-white/20 rounded-lg p-3">
          <Text className="text-white/60 text-xs">Active Jobs</Text>
          <Text className="text-white text-xl font-bold">524</Text>
        </View>
        <View className="flex-1 bg-white/20 rounded-lg p-3">
          <Text className="text-white/60 text-xs">Companies</Text>
          <Text className="text-white text-xl font-bold">182</Text>
        </View>
      </View>
    </View>
  );
}

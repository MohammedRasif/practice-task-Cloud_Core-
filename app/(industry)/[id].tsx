import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IndustryDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#F8FAFC] p-6 pt-16">
      {/* Header / Back Button */}
      <TouchableOpacity 
        onPress={() => router.back()} 
        className="mb-8 flex-row items-center"
        activeOpacity={0.7}
      >
        <View className="w-10 h-10 bg-white rounded-full items-center justify-center shadow-sm" style={{ elevation: 2 }}>
          <Ionicons name="arrow-back" size={20} color="#1E293B" />
        </View>
        <Text className="text-[#1E293B] text-lg font-bold ml-3">Back to Industries</Text>
      </TouchableOpacity>

      {/* Dynamic Content Placeholder */}
      <View className="bg-white p-8 rounded-3xl items-center shadow-sm" style={{ elevation: 3 }}>
        <View className="w-20 h-20 bg-[#E6F0FE] rounded-full items-center justify-center mb-6">
          <Ionicons name="business" size={40} color="#3B82F6" />
        </View>
        
        <Text className="text-3xl font-extrabold text-[#1E293B] mb-3 text-center">
          Industry Profile
        </Text>
        
        <View className="bg-[#F0F6FF] px-4 py-2 rounded-lg mb-6">
          <Text className="text-lg font-semibold text-[#3B82F6]">
            ID: {id}
          </Text>
        </View>

        <Text className="text-[16px] text-[#64748B] text-center leading-6">
          This is a dynamically generated page for the selected industry card. You can fetch and display specific job listings or company details for this industry ID here.
        </Text>
      </View>
    </View>
  );
}

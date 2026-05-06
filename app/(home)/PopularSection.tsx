import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useGetIndustriesQuery } from '../../redux/features/home/homeApi';
import { API_IMAGE_URL } from '../../redux/api/baseApi';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48 - 16) / 2;

export default function PopularSection() {
  const router = useRouter();
  const { data, isLoading } = useGetIndustriesQuery();

  const handlePress = (id: number) => {
    router.push(`/(industry)/${id}` as any); 
  };

  const industries = data?.data?.slice(0, 6) || [];

  if (isLoading) {
    return (
      <View className="px-6 py-10 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#4A88FF" />
      </View>
    );
  }

  return (
    <View className="px-6 pt-8 pb-10 bg-white">
      <View className="items-center mb-7">
        <View className="bg-[#F0F6FF] px-5 py-2.5 rounded-full">
          <Text className="text-[20px] font-extrabold text-gray-600">
            Popular Industries
          </Text>
        </View>
      </View>

      <View className="flex-row flex-wrap justify-between ">
        {industries.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            activeOpacity={0.7}
            onPress={() => handlePress(item.id)}
            className="bg-white rounded-xl py-5 px-3 items-center justify-start border border-[#F8FAFC] mb-4 border-radius-2xl shadow-2xl"
            style={{ 
              width: cardWidth,
              elevation: 3,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.06,
              shadowRadius: 12,
            }}
          >
            <View className="mb-3 h-10 w-10 justify-center items-center overflow-hidden">
              <Image 
                source={{ uri: `${API_IMAGE_URL}${item.image}` }} 
                className="w-full h-full" 
                resizeMode="contain" 
              />
            </View>

            <Text 
              className="text-[18px] font-bold text-gray-600 text-center mb-1.5 h-14" 
              numberOfLines={2}
            >
              {item.name}
            </Text>

            <Text className="text-[16px] text-[#94A3B8] text-center">
              {item.jobs_count} Available Jobs
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* See All Button */}
      <View className="items-center mt-4">
        <TouchableOpacity 
          className="px-6 py-2 border border-[#4A88FF] rounded-full"
          onPress={() => router.push('/(industry)/all' as any)}
        >
          <Text className="text-[#4A88FF] font-bold">See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
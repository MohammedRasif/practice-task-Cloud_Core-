import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useGetIndustriesQuery } from '../../redux/features/home/homeApi';
import { API_IMAGE_URL } from '../../redux/api/baseApi';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48 - 16) / 2;

export default function PopularSection() {
  const router = useRouter();
  const { data, isLoading } = useGetIndustriesQuery();
  const [showAll, setShowAll] = useState(false);

  const handlePress = (id: number) => {
    router.push(`/(industry)/${id}` as any); 
  };

  const allIndustries = data?.data || [];
  const industries = showAll ? allIndustries : allIndustries.slice(0, 6);

  if (isLoading) {
    return (
      <View className="px-6 py-10 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#4A88FF" />
      </View>
    );
  }

  return (
    <View className="px-6 pt-8 pb-10 bg-white dark:bg-slate-900">
      <View className="items-center mb-7">
        <View className="bg-[#F0F6FF] dark:bg-slate-800 px-5 py-2.5 rounded-full">
          <Text className="text-[20px] font-extrabold text-gray-600 dark:text-slate-300">
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
            className="bg-white dark:bg-slate-800 rounded-xl py-5 px-3 items-center justify-start border border-[#F8FAFC] dark:border-slate-700 mb-4 border-radius-2xl shadow-2xl"
            style={{ 
              width: cardWidth,
              elevation: 3,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.06,
              shadowRadius: 12,
            }}
          >
            <View className="mb-4 h-16 w-16 rounded-full border border-gray-200 dark:border-slate-700 justify-center items-center overflow-hidden bg-white dark:bg-slate-700">
              <Image 
                source={{ uri: `${API_IMAGE_URL}${item.image}` }} 
                className="w-16 h-16" 
                resizeMode="contain" 
              />
            </View>

            <Text 
              className="text-[18px] font-bold text-gray-600 dark:text-white text-center mb-1.5 h-14" 
              numberOfLines={2}
            >
              {item.name}
            </Text>

            <Text className="text-[16px] text-[#94A3B8] dark:text-slate-400 text-center">
              {item.jobs_count} Available Jobs
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {allIndustries.length > 6 && (
        <View className="items-center mt-4">
          <TouchableOpacity 
            className="px-6 py-2 border border-[#4A88FF] rounded-full"
            onPress={() => setShowAll(!showAll)}
          >
            <Text className="text-[#4A88FF] font-bold">
              {showAll ? 'Show Less' : 'See All'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
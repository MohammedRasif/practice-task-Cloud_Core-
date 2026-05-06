import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useGetCompaniesQuery } from '../../redux/features/home/homeApi';
import { API_IMAGE_URL } from '../../redux/api/baseApi';

export default function PopularCompanieSection() {
  const { data, isLoading } = useGetCompaniesQuery();
  const [showAll, setShowAll] = useState(false);

  const allCompanies = data?.data || [];
  const companies = showAll ? allCompanies : allCompanies.slice(0, 6);

  if (isLoading) {
    return (
      <View className="px-6 py-10 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#4A88FF" />
      </View>
    );
  }

  return (
    <View className="px-6 py-8 bg-white ">
      <View className="items-center mb-7">
        <View className="bg-[#F0F6FF] px-5 py-2.5 rounded-full">
          <Text className="text-[20px] font-extrabold text-gray-600">
            Popular Companies
          </Text>
        </View>
      </View>

      <View className="flex-row flex-wrap justify-between gap-y-4">
        {companies.map((item) => (
          <View 
            key={item.id} 
            className="bg-white rounded-xl py-4 px-4 border border-gray-100 items-center justify-center w-[48%] mb-2"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 10,
              elevation: 3,
            }}
          >
            <View className="w-[72px] h-[72px] rounded-full border border-gray-200 items-center justify-center mb-4 bg-white overflow-hidden">
              <Image 
                source={{ uri: `${API_IMAGE_URL}/${item.image}` }} 
                className="w-12 h-12" 
                resizeMode="contain" 
              />
            </View>
            
            <Text className="text-[20px] font-extrabold text-gray-600 text-center mb-1.5" numberOfLines={1}>
              {item.name}
            </Text>
            <Text className="text-[16px] text-[#94A3B8] text-center">
              {item.jobs_count} Available Jobs
            </Text>
          </View>
        ))}
      </View>

      {allCompanies.length > 6 && (
        <View className="items-center mt-10">
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

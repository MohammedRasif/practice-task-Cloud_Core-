import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const COMPANIES = [
  {
    id: '1',
    name: 'HACC',
    jobs: 3,
    // Using a placeholder avatar API to generate a similar text logo
    logoUrl: 'https://ui-avatars.com/api/?name=HACC&background=fff&color=d97706&font-size=0.33&bold=true',
  },
  {
    id: '2',
    name: 'IHIS Compa...',
    jobs: 2,
    logoUrl: 'https://ui-avatars.com/api/?name=IHIS&background=fff&color=0f766e&font-size=0.33&bold=true',
  },
  {
    id: '3',
    name: "McDonald's",
    jobs: 4,
    // Original McDonald's logo
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png',
  },
  {
    id: '4',
    name: 'Jabco',
    jobs: 1,
    logoUrl: 'https://ui-avatars.com/api/?name=JABCO&background=fff&color=dc2626&font-size=0.33&bold=true',
  },
];

export default function PopularCompanieSection() {
  return (
    <View className="px-6 py-8 bg-white">
      {/* Title Pill */}
      <View className="items-center mb-8">
        <View className="bg-[#F0F6FF] px-5 py-2.5 rounded-full">
          <Text className="text-base font-bold text-[#334155]">
            Popular Companies
          </Text>
        </View>
      </View>

      {/* Grid */}
      <View className="flex-row flex-wrap justify-between gap-y-4">
        {COMPANIES.map((item) => (
          <View 
            key={item.id} 
            className="bg-white rounded-xl py-6 px-4 border border-gray-100 items-center justify-center w-[48%]"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 10,
              elevation: 3,
            }}
          >
            {/* Logo Container */}
            <View className="w-[72px] h-[72px] rounded-full border border-gray-200 items-center justify-center mb-4 bg-white overflow-hidden">
              <Image 
                source={{ uri: item.logoUrl }} 
                className="w-12 h-12" 
                resizeMode="contain" 
              />
            </View>
            
            {/* Company Info */}
            <Text className="text-[15px] font-extrabold text-[#1E293B] text-center mb-1.5" numberOfLines={1}>
              {item.name}
            </Text>
            <Text className="text-[13px] text-[#94A3B8] text-center">
              {item.jobs} Available Jobs
            </Text>
          </View>
        ))}
      </View>

      {/* Load More Button */}
      <View className="items-center mt-10">
        <TouchableOpacity 
          className="w-[56px] h-[40px] bg-white border border-[#93C5FD] rounded-lg items-center justify-center active:bg-blue-50"
          activeOpacity={0.7}
        >
          <Entypo name="chevron-down" size={20} color="#3B82F6" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

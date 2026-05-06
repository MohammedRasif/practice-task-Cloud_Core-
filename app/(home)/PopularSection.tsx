import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48 - 16) / 2;

const INDUSTRIES = [
  { id: '1', title: 'Construction', jobs: 6, icon: 'construction' },
  { id: '2', title: 'Facilities Managem...', jobs: 1, icon: 'groups' },
  { id: '3', title: 'Fast Food Restaura...', jobs: 4, icon: 'restaurant' },
  { id: '4', title: 'Cafés & Coffee Sho...', jobs: 0, icon: 'local-cafe' },
  { id: '5', title: 'Agriculture', jobs: 0, icon: 'agriculture' },
  { id: '6', title: 'Contracting & Main...', jobs: 2, icon: 'engineering' },
];

export default function PopularSection() {
  const router = useRouter();

  const handlePress = (id: string) => {
    router.push(`/(industry)/${id}` as any); 
  };

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
        {INDUSTRIES.map((item) => (
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
            <View className="mb-3 h-10 justify-center items-center">
              <MaterialIcons name={item.icon as any} size={32} color="#4A88FF" />
            </View>

            <Text 
              className="text-[18px] font-bold text-gray-600 text-center mb-1.5 h-14" 
              numberOfLines={2}
            >
              {item.title}
            </Text>

            <Text className="text-[16px] text-[#94A3B8] text-center">
              {item.jobs} Available Jobs
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
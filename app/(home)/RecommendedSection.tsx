import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';

const RECOMMENDED_JOBS = [
  {
    id: '1',
    deadline: '24 June, 2026',
    title: 'Service Crew',
    company: "McDonald's",
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png', 
    salarySAR: '900',
    salaryBDT: '29,700',
    foodAllowanceSAR: '250',
    foodAllowanceBDT: '8,250',
    jobType: 'OVERSEAS',
    location: 'SAUDI ARABIA'
  },
];

export default function RecommendedSection() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-3 py-10 bg-white border border-blue-700">
        
        <View className="items-center mb-7">
                <View className="bg-[#F0F6FF] px-5 py-2.5 rounded-full">
                  <Text className="text-[20px] font-extrabold text-gray-600">
                    Recommended Jobs
                  </Text>
                </View>
              </View>

        <View className="space-y-6">
          {RECOMMENDED_JOBS.map((job) => (
            <View 
              key={job.id} 
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 10,
                elevation: 3,
              }}
            >
              <View className="flex-row justify-between items-center mb-5">
                <View></View>
                <Text className="text-2xl font-extrabold text-[#1E293B]">
                  {job.title}
                </Text>
                <TouchableOpacity className="p-1">
                  <Ionicons name="star-outline" size={24} color="#3B82F6" />
                </TouchableOpacity>
              </View>

              <View className="flex-row items-center mb-6 gap-3">
                <View className="w-16 h-16 rounded-full border border-gray-100 items-center justify-center p-2 bg-white">
                  <Image 
                    source={{ uri: job.logoUrl }} 
                    className="w-12 h-12"
                    resizeMode="contain"
                  />
                </View>
                <Text className="text-[20px] font-semibold text-gray-800">
                  {job.company}
                </Text>
              </View>

              <View className="bg-[#E6F0FE] rounded-xl p-5 mb-6 space-y-2">
                <Text className="text-[15px] text-gray-600 leading-6 font-bold">
                  <Text className="font-bold">Salary: </Text>
                  SAR {job.salarySAR} (BDT {job.salaryBDT} approx.)
                </Text>
                <Text className="text-[15px] text-gray-600 leading-6 font-bold">
                  <Text className="font-bold">Food Allowance: </Text>
                  SAR {job.foodAllowanceSAR} (BDT {job.foodAllowanceBDT} approx.)
                </Text>
              </View>

              <View className="flex-row gap-3 mb-6">
                <View className="flex-row gap-1 items-center bg-white border border-[#93C5FD] rounded-lg px-2 py-[3px] space-x-2">
                  <FontAwesome5 name="briefcase" size={18} color="#3B82F6" />
                  <Text className="text-[16px]  font-semibold uppercase tracking-wider">
                    {job.jobType}
                  </Text>
                </View>
                <View className="flex-row gap-1 items-center bg-white border border-[#93C5FD] rounded-lg px-2 py-[3px] space-x-2">
                  <Ionicons name="location" size={18} color="#3B82F6" />
                  <Text className="text-[16px]  font-semibold uppercase tracking-wider">
                    {job.location}
                  </Text>
                </View>
              </View>

              <View className="flex-row items-center gap-3 mb-6">
                <Entypo name="clock" className="pt-[2px]" size={20} color="#EF4444" />
                <Text className="text-[16px] text-gray-500 font-bold">
                  <Text className="font-bold">Application Deadline: </Text>
                   {job.deadline}
                </Text>
              </View>

              <View className="flex-row    gap-3">
                <TouchableOpacity className="flex-1 bg-white border border-[#3B82F6] rounded-md py-2.5 items-center justify-center active:bg-blue-50">
                  <Text className="text-[#3B82F6] text-[18px] font-semibold">
                    View
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity className="flex-1 bg-[#2563EB] rounded-md py-2.6 items-center justify-center active:bg-blue-700">
                  <Text className="text-white text-[18px] font-semibold">
                    Apply Now
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
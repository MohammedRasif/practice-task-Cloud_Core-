import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons';
import { useGetJobsQuery } from '../../redux/features/home/homeApi';
import { API_IMAGE_URL } from '../../redux/api/baseApi';

export default function RecommendedSection() {
  const { data, isLoading } = useGetJobsQuery();
  const [showAll, setShowAll] = useState(false);
  
  const allJobs = data?.data || [];
  const jobs = showAll ? allJobs : allJobs.slice(0, 5);

  const convertSARtoBDT = (sar: number) => {
    return (sar * 33).toLocaleString();
  };

  if (isLoading) {
    return (
      <View className="px-6 py-10 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#4A88FF" />
      </View>
    );
  }

  return (
    <View className="px-3 py-10 bg-white dark:bg-slate-900">
      <View className="items-center mb-7">
        <View className="bg-[#F0F6FF] dark:bg-slate-800 px-5 py-2.5 rounded-full">
          <Text className="text-[20px] font-extrabold text-gray-600 dark:text-slate-300">
            Recommended Jobs
          </Text>
        </View>
      </View>

      <View className="space-y-6">
        {jobs.map((job) => (
          <View 
            key={job.id} 
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm relative mb-6"
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
              <Text className="text-2xl font-extrabold text-[#1E293B] dark:text-white flex-1 text-center" numberOfLines={1}>
                {job.job_title}
              </Text>
              <TouchableOpacity className="p-1">
                <Ionicons name="star-outline" size={24} color="#3B82F6" />
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center mb-6 gap-3">
              <View className="w-16 h-16 rounded-full border border-gray-100 dark:border-slate-700 items-center justify-center p-2 bg-white dark:bg-slate-700 overflow-hidden">
                <Image 
                  source={{ uri: `${API_IMAGE_URL}/${job.company?.image}` }} 
                  className="w-12 h-12"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-[20px] font-semibold text-gray-800 dark:text-slate-200 flex-1" numberOfLines={1}>
                {job.company_name}
              </Text>
            </View>

            <View className="bg-[#E6F0FE] dark:bg-slate-700 rounded-xl p-5 mb-6 space-y-2">
              <Text className="text-[15px] text-gray-600 dark:text-slate-300 leading-6 font-bold">
                <Text className="font-bold">Salary: </Text>
                {job.currency} {job.min_salary}{job.max_salary ? ` - ${job.max_salary}` : ''} (BDT {convertSARtoBDT(job.min_salary)} approx.)
              </Text>
              <Text className="text-[15px] text-gray-600 dark:text-slate-300 leading-6 font-bold">
                <Text className="font-bold">Type: </Text>
                {job.employment_type.replace('_', ' ').toUpperCase()}
              </Text>
            </View>

            <View className="flex-row gap-3 mb-6 flex-wrap">
              <View className="flex-row gap-1 items-center bg-white dark:bg-slate-800 border border-[#93C5FD] dark:border-slate-600 rounded-lg px-2 py-[3px]">
                <FontAwesome5 name="briefcase" size={18} color="#3B82F6" />
                <Text className="text-[14px] font-semibold dark:text-slate-300 uppercase tracking-wider">
                  {job.job_collar.toUpperCase()} COLLAR
                </Text>
              </View>
              <View className="flex-row gap-1 items-center bg-white dark:bg-slate-800 border border-[#93C5FD] dark:border-slate-600 rounded-lg px-2 py-[3px]">
                <Ionicons name="location" size={18} color="#3B82F6" />
                <Text className="text-[14px] font-semibold dark:text-slate-300 uppercase tracking-wider">
                  {job.country?.name.toUpperCase()}
                </Text>
              </View>
            </View>

            <View className="flex-row items-center gap-3 mb-6">
              <Entypo name="clock" className="pt-[2px]" size={20} color="#EF4444" />
              <Text className="text-[16px] text-gray-500 dark:text-slate-400 font-bold">
                <Text className="font-bold">Deadline: </Text>
                {job.expiry}
              </Text>
            </View>

            <View className="flex-row gap-3">
              <TouchableOpacity className="flex-1 bg-white dark:bg-slate-800 border border-[#3B82F6] rounded-md py-2.5 items-center justify-center active:bg-blue-50">
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

      {/* See All Button - Only show if more than 5 items */}
      {allJobs.length > 5 && (
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
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { jobs } from "../data/jobs";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function JobCardsSection() {
  const router = useRouter();

  const handleViewDetails = (jobId: string) => {
    router.push(`/(tabs)/job-details/${jobId}`);
  };

  return (
    <View className="px-4 py-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-gray-900 text-xl font-bold">Featured Jobs</Text>
        <TouchableOpacity onPress={() => router.push("/(tabs)/all-jobs")}>
          <Text className="text-blue-600 text-sm font-semibold">View All →</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{ gap: 12, paddingRight: 4 }}
      >
        {jobs.slice(0, 5).map((job) => (
          <TouchableOpacity
            key={job.id}
            onPress={() => handleViewDetails(job.id)}
            style={{ width: width - 40 }}
            className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm"
          >
            {/* Job Header */}
            <View className="flex-row justify-between items-start mb-3">
              <View className="flex-1">
                <Text className="text-gray-900 text-lg font-bold">
                  {job.title}
                </Text>
                <Text className="text-gray-600 text-sm mt-1">{job.company}</Text>
              </View>
              <Text className="text-3xl">{job.icon}</Text>
            </View>

            {/* Job Details */}
            <View className="gap-2 mb-4">
              <View className="flex-row items-center gap-2">
                <Text className="text-gray-500 text-xs">📍</Text>
                <Text className="text-gray-600 text-xs">{job.location}</Text>
              </View>
              <View className="flex-row items-center gap-2">
                <Text className="text-gray-500 text-xs">💰</Text>
                <Text className="text-gray-600 text-xs font-semibold">
                  {job.salary}
                </Text>
              </View>
              <View className="flex-row items-center gap-2">
                <Text className="text-gray-500 text-xs">⏱️</Text>
                <Text className="text-gray-600 text-xs">{job.type}</Text>
              </View>
            </View>

            {/* Tags */}
            <View className="flex-row gap-2 mb-4">
              <View className="bg-blue-100 rounded-full px-3 py-1">
                <Text className="text-blue-700 text-xs font-semibold">
                  {job.category}
                </Text>
              </View>
            </View>

            {/* Button */}
            <TouchableOpacity
              onPress={() => handleViewDetails(job.id)}
              className="bg-blue-600 rounded-lg py-3 items-center"
            >
              <Text className="text-white font-semibold text-sm">
                View Details
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

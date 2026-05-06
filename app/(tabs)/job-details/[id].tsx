import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { jobs } from "../../data/jobs";

export default function JobDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [isSaved, setIsSaved] = useState(false);

  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <Text className="text-gray-900 text-lg font-semibold">Job not found</Text>
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-4 bg-blue-600 px-6 py-2 rounded-lg"
        >
          <Text className="text-white font-semibold">Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Job Title */}
        <View className="bg-gradient-to-b from-blue-600 to-blue-400 px-4 pt-4 pb-8">
          <TouchableOpacity
            onPress={() => router.back()}
            className="mb-4 flex-row items-center gap-2"
          >
            <Text className="text-white text-2xl">←</Text>
            <Text className="text-white font-semibold">Back</Text>
          </TouchableOpacity>

          <View className="flex-row justify-between items-start">
            <View className="flex-1">
              <Text className="text-white text-3xl font-bold mb-2">
                {job.title}
              </Text>
              <Text className="text-white/90 text-lg font-semibold">
                {job.company}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setIsSaved(!isSaved)}
              className={`p-3 rounded-full ${
                isSaved ? "bg-white" : "bg-white/20"
              }`}
            >
              <Text className="text-2xl">{isSaved ? "❤️" : "🤍"}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Job Quick Info */}
        <View className="px-4 py-6 gap-4">
          <View className="flex-row gap-4">
            <View className="flex-1 bg-blue-50 rounded-lg p-4 items-center justify-center">
              <Text className="text-gray-500 text-xs mb-2">Salary</Text>
              <Text className="text-gray-900 text-lg font-bold text-center">
                {job.salary}
              </Text>
            </View>
            <View className="flex-1 bg-blue-50 rounded-lg p-4 items-center justify-center">
              <Text className="text-gray-500 text-xs mb-2">Type</Text>
              <Text className="text-gray-900 text-lg font-bold text-center">
                {job.type}
              </Text>
            </View>
          </View>

          <View className="bg-blue-50 rounded-lg p-4">
            <Text className="text-gray-500 text-xs mb-2">Location</Text>
            <Text className="text-gray-900 text-lg font-bold">
              📍 {job.location}
            </Text>
          </View>
        </View>

        {/* About the Job */}
        <View className="px-4 py-4">
          <Text className="text-gray-900 text-xl font-bold mb-3">
            About the Job
          </Text>
          <Text className="text-gray-700 text-base leading-6">
            {job.description}
          </Text>
        </View>

        {/* Requirements */}
        <View className="px-4 py-4">
          <Text className="text-gray-900 text-xl font-bold mb-3">
            Requirements
          </Text>
          <View className="gap-2">
            <View className="flex-row gap-3">
              <Text className="text-blue-600 text-lg">✓</Text>
              <Text className="text-gray-700 text-base flex-1">
                Fluent in English and Arabic
              </Text>
            </View>
            <View className="flex-row gap-3">
              <Text className="text-blue-600 text-lg">✓</Text>
              <Text className="text-gray-700 text-base flex-1">
                Customer service experience preferred
              </Text>
            </View>
            <View className="flex-row gap-3">
              <Text className="text-blue-600 text-lg">✓</Text>
              <Text className="text-gray-700 text-base flex-1">
                Valid work permit for Saudi Arabia
              </Text>
            </View>
            <View className="flex-row gap-3">
              <Text className="text-blue-600 text-lg">✓</Text>
              <Text className="text-gray-700 text-base flex-1">
                Willing to work flexible hours
              </Text>
            </View>
          </View>
        </View>

        {/* Company Info */}
        <View className="px-4 py-4">
          <Text className="text-gray-900 text-xl font-bold mb-3">
            About {job.company}
          </Text>
          <View className="bg-gray-50 rounded-lg p-4">
            <Text className="text-4xl mb-3">{job.icon}</Text>
            <Text className="text-gray-700 text-base mb-3">
              {job.company} is one of the leading organizations in {job.category} sector,
              committed to providing excellent opportunities for skilled professionals.
            </Text>
            <View className="flex-row gap-4">
              <TouchableOpacity className="flex-1 bg-gray-200 rounded-lg py-2 items-center">
                <Text className="text-gray-900 font-semibold text-sm">Website</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-gray-200 rounded-lg py-2 items-center">
                <Text className="text-gray-900 font-semibold text-sm">Contact</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Apply Button */}
        <View className="px-4 py-6">
          <TouchableOpacity className="bg-blue-600 rounded-lg py-4 items-center mb-3">
            <Text className="text-white text-lg font-bold">Apply Now</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 rounded-lg py-4 items-center">
            <Text className="text-gray-900 text-lg font-semibold">Share Job</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

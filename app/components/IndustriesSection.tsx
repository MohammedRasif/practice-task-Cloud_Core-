import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { industries } from "../data/jobs";

export default function IndustriesSection() {
  return (
    <View className="px-4 py-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-gray-900 text-xl font-bold">Popular Industries</Text>
        <TouchableOpacity>
          <Text className="text-blue-600 text-sm font-semibold">View All →</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="gap-3"
        contentContainerStyle={{ gap: 12 }}
      >
        {industries.map((industry) => (
          <TouchableOpacity
            key={industry.id}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 items-center justify-center"
            style={{ width: 100 }}
          >
            <Text className="text-3xl mb-2">{industry.icon}</Text>
            <Text className="text-gray-900 text-xs font-semibold text-center">
              {industry.name}
            </Text>
            <Text className="text-gray-500 text-xs mt-1">{industry.count}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

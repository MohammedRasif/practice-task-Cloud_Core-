import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { companies } from "../data/jobs";

export default function CompaniesSection() {
  return (
    <View className="px-4 py-6 bg-gray-50">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-gray-900 text-xl font-bold">Popular Companies</Text>
        <TouchableOpacity>
          <Text className="text-blue-600 text-sm font-semibold">View All →</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
      >
        {companies.map((company) => (
          <TouchableOpacity
            key={company.id}
            className="bg-white rounded-2xl p-6 border border-gray-200 items-center justify-center gap-2"
            style={{ width: 130 }}
          >
            <Text className="text-5xl">{company.logo}</Text>
            <Text className="text-gray-900 text-sm font-semibold text-center">
              {company.name}
            </Text>
            <Text className="text-gray-500 text-xs">45+ Jobs</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

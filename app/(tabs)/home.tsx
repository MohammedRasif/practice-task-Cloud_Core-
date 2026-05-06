import React from "react";
import {
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import HeroSection from "../components/HeroSection";
import IndustriesSection from "../components/IndustriesSection";
import JobCardsSection from "../components/JobCardsSection";
import CompaniesSection from "../components/CompaniesSection";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Industries Section */}
        <IndustriesSection />

        {/* Job Cards Section */}
        <JobCardsSection />

        {/* Companies Section */}
        <CompaniesSection />
      </ScrollView>
    </View>
  );
}

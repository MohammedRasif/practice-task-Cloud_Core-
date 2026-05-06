import React from "react";
import {
  ScrollView,
  View
} from "react-native";
import HeroSection from "../(home)/HeroSection";
import PopularSection from "../(home)/PopularSection";
import RecommendedSection from "../(home)/RecommendedSection";
import PopularCompanieSection from "../(home)/PopularCompanieSection";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white " showsVerticalScrollIndicator={false}>
      <HeroSection />
      <PopularSection />
      {/* <TrendingSection /> */}
      <RecommendedSection />
      <PopularCompanieSection />
    </ScrollView>
  );
}

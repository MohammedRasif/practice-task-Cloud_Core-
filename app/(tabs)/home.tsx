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
    <ScrollView 
      className="flex-1 bg-white dark:bg-slate-900" 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <HeroSection />
      <PopularSection />
      {/* <TrendingSection /> */}
      <RecommendedSection />
      <PopularCompanieSection />
    </ScrollView>
  );
}

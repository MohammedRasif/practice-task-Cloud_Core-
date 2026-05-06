import React from "react";
import {
  ScrollView,
  View
} from "react-native";
import { HeroSection } from "../(home)/HeroSection";
import PopularSection from "../(home)/PopularSection";
import TrendingSection from "../(home)/TrendingSection";
import RecommendedSection from "../(home)/RecommendedSection";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white " showsVerticalScrollIndicator={false}>
      <HeroSection />
      <PopularSection />
      <TrendingSection />
      <RecommendedSection />
    </ScrollView>
  );
}

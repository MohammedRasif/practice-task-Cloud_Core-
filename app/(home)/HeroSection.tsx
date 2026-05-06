import { Feather } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Dimensions, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

const { width } = Dimensions.get('window');

export default function HeroSection() {
  const wavePosition1 = useSharedValue(0);
  const wavePosition2 = useSharedValue(0);

  useEffect(() => {
    wavePosition1.value = withRepeat(
      withTiming(-width, { duration: 4000, easing: Easing.linear }),
      -1,
      false
    );
    wavePosition2.value = withRepeat(
      withTiming(-width, { duration: 3000, easing: Easing.linear }),
      -1,
      false
    );
  }, []);

  const animatedWaveStyle2 = useAnimatedStyle(() => ({
    transform: [{ translateX: wavePosition2.value }],
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: width * 3,
    height: 100,
  }));

  return (
    <View className="h-[400px] w-full relative overflow-hidden bg-white">
      {/* Background Gradient */}
      <View className="absolute inset-0">
        <Svg height="100%" width="100%">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#2563EB" stopOpacity="1" />
              <Stop offset="1" stopColor="#60A5FA" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#grad)" />
        </Svg>
      </View>

      <View className="flex-1 px-6 pt-[90px] items-center z-10">
        <Text className="text-3xl font-extrabold text-white text-center mb-4 tracking-wide">
          #1 Platform for Saudi Jobs
        </Text>
        <Text className="text-[16px] text-white/90 text-center leading-6 mb-8 px-2">
          Apply for jobs in Saudi Arabia with verified employers. We connect Bangladeshi workforce with high-demand Saudi Jobs.
        </Text>

        <View 
          className="flex-row items-center bg-white rounded-full w-full pl-5 pr-1.5 py-1.5 shadow-lg"
          style={{ elevation: 5 }}
        >
          <TextInput
            className="flex-1 text-base h-12 text-[20px] text-[#1F2937] pt-1"
            placeholder="Search Job"
            placeholderTextColor="#A0AEC0"
          />
          <TouchableOpacity 
            className="w-11 h-11 bg-[#4A88FF] rounded-full justify-center items-center ml-2" 
            activeOpacity={0.8}
          >
            <Feather name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Wave Container with Raw CSS for Animation Logic */}
      <View style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: 100, zIndex: 5 }}>
        {/* Single Front Wave that Animates */}
        <Animated.View style={animatedWaveStyle2}>
          <Svg height="100" width={width * 3} viewBox={`0 0 ${width * 3} 100`}>
            <Path
              d={`M0 65 Q ${width / 4} 45, ${width / 2} 65 T ${width} 65 T ${width * 1.5} 65 T ${width * 2} 65 T ${width * 2.5} 65 T ${width * 3} 65 V 100 H 0 Z`}
              fill="white"
            />
          </Svg>
        </Animated.View>
      </View>
    </View>
  );
};
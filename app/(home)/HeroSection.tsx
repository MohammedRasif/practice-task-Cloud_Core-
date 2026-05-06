import { Feather } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

const { width } = Dimensions.get('window');

export const HeroSection = () => {
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

  const animatedWaveStyle1 = useAnimatedStyle(() => ({
    transform: [{ translateX: wavePosition1.value }],
  }));

  const animatedWaveStyle2 = useAnimatedStyle(() => ({
    transform: [{ translateX: wavePosition2.value }],
  }));

  return (
    <View style={styles.container}>
      {/* Background Gradient */}
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#4A88FF" stopOpacity="1" />
            <Stop offset="1" stopColor="#7AB4FF" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>

      <View style={styles.content}>
        <Text style={styles.title}>#1 Platform for Saudi Jobs</Text>
        <Text style={styles.subtitle}>
          Apply for jobs in Saudi Arabia with verified employers. We connect Bangladeshi workforce with high-demand Saudi Jobs.
        </Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Job"
            placeholderTextColor="#A0AEC0"
          />
          <TouchableOpacity style={styles.searchButton} activeOpacity={0.8}>
            <Feather name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Animated Waves at Bottom */}
      <View style={styles.waveContainer}>
        {/* Back Wave (slower, semi-transparent) */}
        <Animated.View style={[styles.animatedWave, animatedWaveStyle1, { opacity: 0.4 }]}>
          <Svg height="100" width={width * 3} viewBox={`0 0 ${width * 3} 100`}>
            <Path
              d={`M0 50 Q ${width / 4} 30, ${width / 2} 50 T ${width} 50 T ${width * 1.5} 50 T ${width * 2} 50 T ${width * 2.5} 50 T ${width * 3} 50 V 100 H 0 Z`}
              fill="white"
            />
          </Svg>
        </Animated.View>

        {/* Front Wave (faster, solid) */}
        <Animated.View style={[styles.animatedWave, animatedWaveStyle2]}>
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

const styles = StyleSheet.create({
  container: {
    height: 380,
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 70,
    alignItems: 'center',
    zIndex: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 6,
    paddingVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    height: 44,
    fontSize: 16,
    color: '#1F2937',
  },
  searchButton: {
    width: 44,
    height: 44,
    backgroundColor: '#4A88FF',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  waveContainer: {
    position: 'absolute',
    bottom: -1, 
    left: 0,
    right: 0,
    height: 100,
    zIndex: 5,
  },
  animatedWave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: width * 3,
    height: 100,
  }
});
import { Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Platform, Dimensions, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring,
} from 'react-native-reanimated';
import { useColorScheme } from 'nativewind';

const { width } = Dimensions.get('window');
const TAB_BAR_HEIGHT = 65;

export default function _layout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} insets={insets} />}
      sceneContainerStyle={{ backgroundColor: 'transparent' }} // Ensure background doesn't interfere
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="checkin" options={{ title: 'Check-In' }} />
      <Tabs.Screen name="event" options={{ title: 'Event' }} />
      <Tabs.Screen name="history" options={{ title: 'History' }} />
      <Tabs.Screen name="message" options={{ title: 'Message' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}

function CustomTabBar({ state, descriptors, navigation, insets }: any) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const translateX = useSharedValue(0);
  const tabWidth = width / state.routes.length;

  useEffect(() => {
    translateX.value = withSpring(state.index * tabWidth, {
      damping: 20,
      stiffness: 150,
    });
  }, [state.index]);

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View 
      style={[
        styles.tabBarContainer, 
        { 
          height: TAB_BAR_HEIGHT + insets.bottom,
          paddingBottom: insets.bottom,
          backgroundColor: isDark ? '#1E293B' : 'transparent',
          borderTopColor: isDark ? '#334155' : 'transparent',
          borderTopWidth: isDark ? 1 : 0,
        }
      ]}
    >
      {!isDark && (
        <LinearGradient
          colors={['#1E3A8A', '#3B82F6']}
          style={styles.gradientBackground}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      )}
      
      {/* Sliding Indicator */}
      <Animated.View 
        style={[
          styles.indicator, 
          { 
            width: tabWidth - 16,
            backgroundColor: isDark ? '#3B82F6' : '#FFFFFF',
          }, 
          animatedIndicatorStyle
        ]} 
      />

      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const getIconName = (name: string, focused: boolean) => {
          switch (name) {
            case 'home': return focused ? 'home' : 'home-outline';
            case 'checkin': return focused ? 'grid' : 'grid-outline';
            case 'event': return focused ? 'calendar' : 'calendar-outline';
            case 'history': return focused ? 'time' : 'time-outline';
            case 'message': return focused ? 'chatbubble' : 'chatbubble-outline';
            case 'profile': return focused ? 'person' : 'person-outline';
            default: return 'help-circle-outline';
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabItem, { width: tabWidth }]}
            activeOpacity={0.7}
          >
            <View style={styles.iconWrapper}>
              <Ionicons 
                name={getIconName(route.name, isFocused)} 
                size={24} 
                color={isFocused ? (isDark ? '#FFFFFF' : '#1E3A8A') : (isDark ? '#94A3B8' : '#FFFFFF')} 
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  gradientBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  indicator: {
    position: 'absolute',
    height: 48,
    borderRadius: 24,
    left: 8,
    top: 8,
  },
  tabItem: {
    height: TAB_BAR_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function _layout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      sceneContainerStyle={{ paddingBottom: insets.bottom + 85 }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarActiveTintColor: '#2563EB', 
        tabBarInactiveTintColor: '#FFFFFF', 
        tabBarStyle: [styles.tabBar, { bottom: insets.bottom ? insets.bottom + 10 : Platform.OS === 'ios' ? 30 : 20 }],
        tabBarBackground: () => (
          <LinearGradient
            colors={['#1E3A8A', '#3B82F6']} // More professional deep blue gradient
            style={{ flex: 1, borderRadius: 30 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        ),
        tabBarIcon: ({ color, focused }) => {
          let iconName: any = 'help-circle-outline';

          switch (route.name) {
            case 'home': iconName = focused ? 'home' : 'home-outline'; break;
            case 'checkin': iconName = focused ? 'grid' : 'grid-outline'; break;
            case 'event': iconName = focused ? 'calendar' : 'calendar-outline'; break;
            case 'history': iconName = focused ? 'time' : 'time-outline'; break;
            case 'message': iconName = focused ? 'chatbubble' : 'chatbubble-outline'; break;
            case 'profile': iconName = focused ? 'person' : 'person-outline'; break;
          }

          return (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <Ionicons 
                name={iconName} 
                size={22} 
                color={focused ? '#1E3A8A' : '#FFFFFF'} 
              />
            </View>
          );
        },
      })}
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

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 20,
    right: 20,
    elevation: 8,
    height: 65,
    borderTopWidth: 0,
    borderRadius: 35, 
    backgroundColor: 'transparent', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  iconContainer: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22.5, 
  },
  activeIconContainer: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});
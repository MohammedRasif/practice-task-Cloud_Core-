import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function _layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarActiveTintColor: '#2563EB', 
        tabBarInactiveTintColor: '#FFFFFF', 
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          <LinearGradient
            colors={['#2563EB', '#60A5FA']}
            style={{ flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
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
            <View style={focused ? styles.activeIconContainer : null}>
              <Ionicons 
                name={iconName} 
                size={focused ? 24 : 22} 
                color={focused ? '#2563EB' : '#FFFFFF'} 
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
    top: 10,
    bottom: Platform.OS === 'ios' ? 25 : 15, 
    left: 15,
    right: 15,
    elevation: 5,
    height: 60,
    borderTopWidth: 0,
    borderRadius: 30, 
    backgroundColor: 'transparent', 
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  activeIconContainer: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 50, 
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
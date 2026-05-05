import { Tabs } from 'expo-router'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

export default function _layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#E6B84E',
        tabBarInactiveTintColor: '#A0A0A0',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },

        tabBarIcon: ({ color, focused }) => {
          let iconName: string = 'help-circle-outline'

          switch (route.name) {
            case 'home':
              iconName = focused ? 'home' : 'home-outline'
              break
            case 'checkin':
              iconName = focused ? 'grid' : 'grid-outline'
              break
            case 'event':
              iconName = focused ? 'calendar' : 'calendar-outline'
              break
            case 'history':
              iconName = focused ? 'time' : 'time-outline'
              break
            case 'message':
              iconName = focused ? 'chatbubble' : 'chatbubble-outline'
              break
            case 'profile':
              iconName = focused ? 'person' : 'person-outline'
              break
          }

          return <Ionicons name={iconName} size={22} color={color} />
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
  )
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 15,
    right: 15,
    elevation: 0,
    backgroundColor: '#1A1A1A',
    height: 70,
    borderTopWidth: 0,
    paddingTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 20,
  },
})
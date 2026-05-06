import { Tabs } from 'expo-router'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

export default function AuthLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#E6B84E',
        tabBarInactiveTintColor: '#A0A0A0',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
      })}
    >
      <Tabs.Screen name="login" options={{ title: 'Login' }} />
      <Tabs.Screen name="signup" options={{ title: 'Signup' }} />
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
import { Stack } from 'expo-router'
import React from 'react'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen 
        name="(tabs)/job-details/[id]" 
        options={{ 
          headerShown: false,
          animationEnabled: true 
        }} 
      />
    </Stack>
  )
}

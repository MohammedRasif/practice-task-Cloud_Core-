import React from 'react'
import { ImageBackground, StatusBar, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import bgImage from "../../assets/images/Container.png"

export default function Message() {
  return (
    <View className="flex-1 bg-[#241504]">
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        className="flex-1"
      >
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

        <ScrollView className="flex-1 px-5 pt-12 pb-20">
          
          {/* Header */}
          <View className="mb-6">
            <Text className="text-white text-4xl font-bold">Messages</Text>
            <Text className="text-[#E6B84E] text-lg mt-1">Stay Connected</Text>
          </View>

          {/* Search Bar */}
          <View className="bg-[#2A2419] flex-row items-center px-4 py-3 rounded-3xl mb-6">
            <Ionicons name="search" size={22} color="#A0A0A0" />
            <TextInput
              placeholder="Search messages..."
              placeholderTextColor="#A0A0A0"
              className="flex-1 ml-3 text-white text-base"
            />
          </View>

          {/* Messages List */}
          {[
            {
              name: "Rakib Hasan",
              lastMsg: "Bro, meeting ta koi?",
              time: "Now",
              unread: 3,
              avatarColor: "#E6B84E"
            },
            {
              name: "Sadia Ahmed",
              lastMsg: "Event registration done ✅",
              time: "10:45 AM",
              unread: 0,
              avatarColor: "#FF6B6B"
            },
            {
              name: "University Club",
              lastMsg: "Tomorrow's seminar at 3 PM",
              time: "Yesterday",
              unread: 1,
              avatarColor: "#4ECDC4"
            },
            {
              name: "Tanvir Khan",
              lastMsg: "See you at the check-in",
              time: "Apr 13",
              unread: 0,
              avatarColor: "#A78BFA"
            },
          ].map((chat, index) => (
            <TouchableOpacity 
              key={index}
              className="bg-[#2A2419] rounded-3xl p-4 mb-3 flex-row items-center"
            >
              {/* Avatar */}
              <View 
                className="w-14 h-14 rounded-2xl items-center justify-center"
                style={{ backgroundColor: chat.avatarColor + '30' }}
              >
                <Text className="text-2xl font-bold" style={{ color: chat.avatarColor }}>
                  {chat.name[0]}
                </Text>
              </View>

              {/* Message Info */}
              <View className="ml-4 flex-1">
                <View className="flex-row justify-between items-center">
                  <Text className="text-white font-semibold text-lg">{chat.name}</Text>
                  <Text className="text-gray-500 text-sm">{chat.time}</Text>
                </View>
                
                <Text 
                  className="text-gray-400 text-[15px] mt-1" 
                  numberOfLines={1}
                >
                  {chat.lastMsg}
                </Text>
              </View>

              {/* Unread Badge */}
              {chat.unread > 0 && (
                <View className="bg-[#E6B84E] w-6 h-6 rounded-full items-center justify-center ml-2">
                  <Text className="text-black text-xs font-bold">{chat.unread}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}

         

          <View className="h-20" />
        </ScrollView>
      </ImageBackground>
    </View>
  )
}
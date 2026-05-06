import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
// Calculate card width: screen width - horizontal padding (24*2) - gap between cards (16)
const cardWidth = (width - 48 - 16) / 2;

const INDUSTRIES = [
  { id: '1', title: 'Construction', jobs: 6, icon: 'construction' },
  { id: '2', title: 'Facilities Managem...', jobs: 1, icon: 'groups' },
  { id: '3', title: 'Fast Food Restaura...', jobs: 4, icon: 'restaurant' },
  { id: '4', title: 'Cafés & Coffee Sho...', jobs: 0, icon: 'local-cafe' },
  { id: '5', title: 'Agriculture', jobs: 0, icon: 'agriculture' },
  { id: '6', title: 'Contracting & Main...', jobs: 2, icon: 'engineering' },
];

export default function PopularSection() {
  const router = useRouter();

  const handlePress = (id: string) => {
    // Navigate using the ID as requested
    router.push(`/(industry)/${id}` as any); 
  };

  return (
    <View style={styles.container}>
      {/* Title Pill */}
      <View style={styles.titleContainer}>
        <View style={styles.titlePill}>
          <Text style={styles.titleText}>Popular Industries</Text>
        </View>
      </View>

      {/* Grid of Cards */}
      <View style={styles.grid}>
        {INDUSTRIES.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => handlePress(item.id)}
          >
            <View style={styles.iconContainer}>
              <MaterialIcons name={item.icon as any} size={32} color="#4A88FF" />
            </View>
            <Text style={styles.cardTitle} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.cardSubtitle}>
              {item.jobs} Available Jobs
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 28,
  },
  titlePill: {
    backgroundColor: '#F0F6FF', // Very light blue
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#334155', // Slate 700
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16, // Vertical gap between rows
  },
  card: {
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    // Elevation for Android
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F8FAFC', 
  },
  iconContainer: {
    marginBottom: 12,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#334155',
    textAlign: 'center',
    marginBottom: 6,
    minHeight: 40, // Ensures uniform height even if title is 1 line
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#94A3B8', // Slate 400
    textAlign: 'center',
  }
});
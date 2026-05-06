import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';

const RECOMMENDED_JOBS = [
  {
    id: '1',
    daysLeft: 49,
    title: 'Service Crew',
    company: "McDonald's",
    salary: 'SAR 900 Monthly',
    salaryEquivalent: 'Equivalent BDT 29,700',
    foodAllowance: 'SAR 250',
    foodAllowanceEquivalent: 'Equivalent BDT 8,250',
    jobType: 'OVERSEAS',
    location: 'SAUDI ARABIA'
  },
  {
    id: '2',
    daysLeft: 12,
    title: 'Construction Worker',
    company: "Saudi Binladin Group",
    salary: 'SAR 1200 Monthly',
    salaryEquivalent: 'Equivalent BDT 39,600',
    foodAllowance: 'SAR 300',
    foodAllowanceEquivalent: 'Equivalent BDT 9,900',
    jobType: 'OVERSEAS',
    location: 'SAUDI ARABIA'
  },
  {
    id: '3',
    daysLeft: 30,
    title: 'Delivery Driver',
    company: "HungerStation",
    salary: 'SAR 1500 Monthly',
    salaryEquivalent: 'Equivalent BDT 49,500',
    foodAllowance: 'SAR 0',
    foodAllowanceEquivalent: 'Included',
    jobType: 'OVERSEAS',
    location: 'SAUDI ARABIA'
  }
];

export default function RecommendedSection() {
  return (
    <View style={styles.container}>
      {/* Title Pill */}
      <View style={styles.titleContainer}>
        <View style={styles.titlePill}>
          <Text style={styles.titleText}>Recommended Jobs</Text>
        </View>
      </View>

      {/* Cards List */}
      <View style={styles.cardsContainer}>
        {RECOMMENDED_JOBS.map((job) => (
          <View key={job.id} style={styles.card}>
            {/* Top Right Badge */}
            <View style={styles.daysLeftBadge}>
              <Feather name="clock" size={14} color="#EF4444" />
              <Text style={styles.daysLeftText}>{job.daysLeft} DAYS LEFT</Text>
            </View>

            {/* Header */}
            <Text style={styles.jobTitle}>{job.title}</Text>
            <Text style={styles.companyName}>{job.company}</Text>

            {/* Details */}
            <View style={styles.detailsContainer}>
              <Text style={styles.detailText}>
                <Text style={styles.detailLabel}>Salary: </Text>
                {job.salary} ({job.salaryEquivalent})
              </Text>
              <Text style={styles.detailText}>
                <Text style={styles.detailLabel}>Food Allowance: </Text>
                {job.foodAllowance} ({job.foodAllowanceEquivalent})
              </Text>
            </View>

            {/* Info Tags */}
            <View style={styles.tagsContainer}>
              <View style={styles.infoTag}>
                <MaterialIcons name="work" size={14} color="#3B82F6" />
                <Text style={styles.infoTagText}>{job.jobType}</Text>
              </View>
              <View style={styles.infoTag}>
                <Ionicons name="location" size={14} color="#3B82F6" />
                <Text style={styles.infoTagText}>{job.location}</Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionsContainer}>
              <TouchableOpacity style={styles.viewButton} activeOpacity={0.7}>
                <Text style={styles.viewButtonText}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.applyButton} activeOpacity={0.7}>
                <Text style={styles.applyButtonText}>Apply Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  titlePill: {
    backgroundColor: '#F0F6FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#334155',
  },
  cardsContainer: {
    gap: 30, // Space between multiple cards
  },
  card: {
    backgroundColor: '#E6F0FE', 
    borderRadius: 12,
    padding: 20,
    position: 'relative',
    marginTop: 10, 
  },
  daysLeftBadge: {
    position: 'absolute',
    top: -16,
    right: 20,
    backgroundColor: '#FEE2E2', 
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    zIndex: 10,
  },
  daysLeftText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E293B',
  },
  jobTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 4,
  },
  companyName: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 20,
    fontWeight: '500',
  },
  detailsContainer: {
    gap: 10,
    marginBottom: 18,
  },
  detailText: {
    fontSize: 14,
    color: '#1E293B',
    lineHeight: 22,
    fontWeight: '600',
  },
  detailLabel: {
    fontWeight: '800',
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  infoTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#93C5FD',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 6,
  },
  infoTagText: {
    fontSize: 12,
    color: '#2563EB',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  viewButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3B82F6',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButtonText: {
    color: '#3B82F6',
    fontSize: 15,
    fontWeight: '600',
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#2563EB', 
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});

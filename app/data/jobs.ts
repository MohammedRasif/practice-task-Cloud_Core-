export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  icon: string;
  category: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Service Crew",
    company: "McDonald's",
    location: "Saudi Arabia",
    salary: "SAR 1,500-2,000",
    type: "Full-time",
    description: "Join our team as a Service Crew member. We're looking for enthusiastic individuals to deliver excellent customer service.",
    icon: "🍔",
    category: "Hospitality"
  },
  {
    id: "2",
    title: "Barista",
    company: "Starbucks",
    location: "Saudi Arabia",
    salary: "SAR 1,800-2,500",
    type: "Full-time",
    description: "Passionate about coffee? Join us as a Barista and create amazing drinks for our customers.",
    icon: "☕",
    category: "Hospitality"
  },
  {
    id: "3",
    title: "Kanela",
    company: "Local Restaurant",
    location: "Saudi Arabia",
    salary: "SAR 1,200-1,800",
    type: "Full-time",
    description: "Work in our kitchen and help prepare delicious meals for our guests.",
    icon: "👨‍🍳",
    category: "Hospitality"
  },
  {
    id: "4",
    title: "Driving Assistant",
    company: "Uber",
    location: "Saudi Arabia",
    salary: "SAR 2,000-3,000",
    type: "Flexible",
    description: "Become a delivery driver and earn flexible income with Uber.",
    icon: "🚗",
    category: "Transportation"
  },
  {
    id: "5",
    title: "Rice Bag Sticker",
    company: "Food Processing",
    location: "Saudi Arabia",
    salary: "SAR 1,200-1,500",
    type: "Full-time",
    description: "Help in our food processing facility with packaging and labeling tasks.",
    icon: "📦",
    category: "Manufacturing"
  },
  {
    id: "6",
    title: "Maintenance Man",
    company: "Building Services",
    location: "Saudi Arabia",
    salary: "SAR 1,600-2,200",
    type: "Full-time",
    description: "Maintain and repair building facilities. Experience preferred.",
    icon: "🔧",
    category: "Maintenance"
  },
  {
    id: "7",
    title: "Confidential Cook",
    company: "Private Kitchen",
    location: "Saudi Arabia",
    salary: "SAR 2,500-3,500",
    type: "Full-time",
    description: "Work as a private chef for high-profile clients.",
    icon: "👨‍🍳",
    category: "Hospitality"
  },
  {
    id: "8",
    title: "Electrical & Instrumentation Technician",
    company: "Industrial Services",
    location: "Saudi Arabia",
    salary: "SAR 2,800-4,000",
    type: "Full-time",
    description: "Specialized technical role for industrial facilities.",
    icon: "⚡",
    category: "Technical"
  }
];

export const industries: Industry[] = [
  { id: "1", name: "Hospitality", icon: "🏨", count: 128 },
  { id: "2", name: "Manufacturing", icon: "🏭", count: 92 },
  { id: "3", name: "Transportation", icon: "🚚", count: 67 },
  { id: "4", name: "Maintenance", icon: "🔧", count: 45 },
  { id: "5", name: "Healthcare", icon: "⚕️", count: 89 },
  { id: "6", name: "Construction", icon: "🏗️", count: 103 },
];

export const companies: Company[] = [
  { id: "1", name: "McDonald's", logo: "🍔" },
  { id: "2", name: "Starbucks", logo: "☕" },
  { id: "3", name: "Uber", logo: "🚗" },
  { id: "4", name: "ARAMCO", logo: "⚡" },
];

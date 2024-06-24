export interface CardData {
    id: number;
    image: string;
    alt: string;
    title: string;
    description: string[];
  }

export const cardData: CardData[] = [
    {
      id: 1,
      image: "/placeholder.svg",
      alt: "Real-time Monitoring",
      title: "Real-time Monitoring",
      description: ["Instant updates", "Data Accuracy", "Remote Accessibility"]
    },
    {
      id: 2,
      image: "/placeholder.svg",
      alt: "Usage Tracking",
      title: "Usage Tracking",
      description: ["Historical Data", "Usage Patterns", "Resource Optimization"]
    },
    {
      id: 3,
      image: "/placeholder.svg",
      alt: "Alerts",
      title: "Alerts",
      description: ["Immediate notifications", "Customizable Thresholds", "Preventive measures"]
    },
    {
      id: 4,
      image: "/placeholder.svg",
      alt: "Data Analysis",
      title: "Data Analysis",
      description: ["Comprehensive reports", "Trend analysis", "Predictive analytics"]
    },
    {
      id: 5,
      image: "/placeholder.svg",
      alt: "User Management",
      title: "User Management",
      description: ["Role-based access", "Secure authentication", "User activity logs"]
    },
    {
      id: 6,
      image: "/placeholder.svg",
      alt: "Mobile App Integration",
      title: "Mobile App Integration",
      description: ["Real-time alerts", "Remote Monitoring", "User-friendly interface"]
    },
    {
      id: 7,
      image: "/placeholder.svg",
      alt: "IoT Device Compatibility",
      title: "IoT Device Compatibility",
      description: ["Easy integration", "Wide device support", "Enhanced data collection"]
    }
  ];
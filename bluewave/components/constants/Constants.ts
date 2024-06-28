import realtime from "../../assets/realtime.png";
import usage from "../../assets/usagetracking.png";
import alerts from "../../assets/alerts.png";
import dataanalytics from "../../assets/data analytics.png";
import usermanagement from "../../assets/usermanagement.png";
import mobile from "../../assets/mobile.png";
import iot from "../../assets/iot.png";


import { StaticImageData } from "next/image";

export interface CardData {
    id: number;
    image: StaticImageData;
    alt: string;
    title: string;
    description: string[];
  }

export const cardData: CardData[] = [
    {
      id: 1,
      image: realtime,
      alt: "Real-time Monitoring",
      title: "Real-time Monitoring",
      description: ["Instant updates", "Data Accuracy", "Remote Accessibility"]
    },
    {
      id: 2,
      image: usage,
      alt: "Usage Tracking",
      title: "Usage Tracking",
      description: ["Historical Data", "Usage Patterns", "Resource Optimization"]
    },
    {
      id: 3,
      image: alerts,
      alt: "Alerts",
      title: "Alerts",
      description: ["Immediate notifications", "Customizable Thresholds", "Preventive measures"]
    },
    {
      id: 4,
      image: dataanalytics,
      alt: "Data Analysis",
      title: "Data Analysis",
      description: ["Comprehensive reports", "Trend analysis", "Predictive analytics"]
    },
    {
      id: 5,
      image: usermanagement,
      alt: "User Management",
      title: "User Management",
      description: ["Role-based access", "Secure authentication", "User activity logs"]
    },
    {
      id: 6,
      image: mobile,
      alt: "Mobile App Integration",
      title: "Mobile App Integration",
      description: ["Real-time alerts", "Remote Monitoring", "User-friendly interface"]
    },
    {
      id: 7,
      image: iot,
      alt: "IoT Device Compatibility",
      title: "IoT Device Compatibility",
      description: ["Easy integration", "Wide device support", "Enhanced data collection"]
    }
  ];
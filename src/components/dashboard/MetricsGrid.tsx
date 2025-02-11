import React from "react";
import MetricCard from "./MetricCard";

interface Platform {
  platform: string;
  metrics: {
    costPerLead: number;
    conversionRate: number;
    engagement: number;
    trend: "up" | "down";
    changePercentage: number;
  };
}

interface MetricsGridProps {
  platforms: Platform[];
}

const defaultPlatforms: Platform[] = [
  {
    platform: "Zillow",
    metrics: {
      costPerLead: 45.5,
      conversionRate: 2.8,
      engagement: 156,
      trend: "up",
      changePercentage: 12.5,
    },
  },
  {
    platform: "Apartments.com",
    metrics: {
      costPerLead: 38.75,
      conversionRate: 3.2,
      engagement: 203,
      trend: "up",
      changePercentage: 8.3,
    },
  },
  {
    platform: "Meta Ads",
    metrics: {
      costPerLead: 52.25,
      conversionRate: 1.9,
      engagement: 892,
      trend: "down",
      changePercentage: 4.7,
    },
  },
  {
    platform: "Google Ads",
    metrics: {
      costPerLead: 61.8,
      conversionRate: 2.4,
      engagement: 445,
      trend: "up",
      changePercentage: 15.2,
    },
  },
];

const MetricsGrid = ({ platforms = defaultPlatforms }: MetricsGridProps) => {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {platforms.map((platform, index) => (
          <MetricCard
            key={index}
            platform={platform.platform}
            metrics={platform.metrics}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricsGrid;

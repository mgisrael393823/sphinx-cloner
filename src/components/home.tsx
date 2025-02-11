import React from "react";
import MetricsGrid from "./dashboard/MetricsGrid";
import AIRecommendations from "./dashboard/AIRecommendations";
import AlertsPanel from "./dashboard/AlertsPanel";
import DataVisualizations from "./dashboard/DataVisualizations";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-[1512px] mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            Marketing Intelligence Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Performance Metrics Section */}
          <MetricsGrid />

          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Side - Data Visualizations */}
            <div className="lg:col-span-8">
              <DataVisualizations />
            </div>

            {/* Right Side - AI Recommendations and Alerts */}
            <div className="lg:col-span-4 space-y-6">
              <AIRecommendations />
              <AlertsPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

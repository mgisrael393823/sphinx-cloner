import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Download, Filter } from "lucide-react";

interface ChartData {
  platform: string;
  data: {
    date: string;
    value: number;
  }[];
}

interface DataVisualizationsProps {
  chartData?: ChartData[];
  timePeriods?: string[];
  platforms?: string[];
}

const defaultChartData: ChartData[] = [
  {
    platform: "Zillow",
    data: [
      { date: "2024-01", value: 1200 },
      { date: "2024-02", value: 1400 },
      { date: "2024-03", value: 1100 },
    ],
  },
  {
    platform: "Apartments.com",
    data: [
      { date: "2024-01", value: 800 },
      { date: "2024-02", value: 1000 },
      { date: "2024-03", value: 1300 },
    ],
  },
];

const defaultTimePeriods = [
  "Last 7 Days",
  "Last 30 Days",
  "Last 3 Months",
  "Last Year",
];
const defaultPlatforms = [
  "All Platforms",
  "Zillow",
  "Apartments.com",
  "Meta Ads",
  "Google Ads",
];

const DataVisualizations = ({
  chartData = defaultChartData,
  timePeriods = defaultTimePeriods,
  platforms = defaultPlatforms,
}: DataVisualizationsProps) => {
  return (
    <Card className="w-full h-full bg-white dark:bg-gray-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Performance Analytics</CardTitle>
        <div className="flex items-center space-x-4">
          <Select defaultValue={platforms[0]}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Platform" />
            </SelectTrigger>
            <SelectContent>
              {platforms.map((platform) => (
                <SelectItem key={platform} value={platform}>
                  {platform}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="metrics" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="comparison">Platform Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="metrics">
            <div className="h-[400px] w-full bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                Chart Placeholder - Key Metrics
              </p>
            </div>
          </TabsContent>

          <TabsContent value="trends">
            <div className="h-[400px] w-full bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                Chart Placeholder - Trends
              </p>
            </div>
          </TabsContent>

          <TabsContent value="comparison">
            <div className="h-[400px] w-full bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                Chart Placeholder - Platform Comparison
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-4 flex justify-center space-x-2">
          {timePeriods.map((period) => (
            <Button key={period} variant="outline" size="sm">
              {period}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DataVisualizations;

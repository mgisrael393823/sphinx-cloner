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
    <Card className="w-full bg-white dark:bg-gray-800">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-2">
        <CardTitle className="text-lg sm:text-xl">
          Performance Analytics
        </CardTitle>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
          <Select defaultValue={platforms[0]}>
            <SelectTrigger className="w-full sm:w-[160px]">
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
          <div className="flex space-x-2 w-full sm:w-auto justify-end sm:justify-start">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="metrics" className="w-full">
          <div className="overflow-x-auto -mx-1 px-1">
            <TabsList className="mb-4 w-full sm:w-auto inline-flex">
              <TabsTrigger value="metrics" className="flex-1 sm:flex-none">
                Key Metrics
              </TabsTrigger>
              <TabsTrigger value="trends" className="flex-1 sm:flex-none">
                Trends
              </TabsTrigger>
              <TabsTrigger value="comparison" className="flex-1 sm:flex-none">
                Platform Comparison
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="metrics">
            <div className="h-[200px] sm:h-[240px] lg:h-[280px] w-full bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                Chart Placeholder - Key Metrics
              </p>
            </div>
          </TabsContent>

          <TabsContent value="trends">
            <div className="h-[200px] sm:h-[240px] lg:h-[280px] w-full bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                Chart Placeholder - Trends
              </p>
            </div>
          </TabsContent>

          <TabsContent value="comparison">
            <div className="h-[200px] sm:h-[240px] lg:h-[280px] w-full bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                Chart Placeholder - Platform Comparison
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-4 overflow-x-auto -mx-1 px-1">
          <div className="flex flex-wrap sm:flex-nowrap justify-start gap-2 min-w-max sm:min-w-0">
            {timePeriods.map((period) => (
              <Button
                key={period}
                variant="outline"
                size="sm"
                className="flex-1 sm:flex-none whitespace-nowrap"
              >
                {period}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataVisualizations;

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowDown, ArrowUp, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface MetricCardProps {
  platform: string;
  metrics: {
    costPerLead: number;
    conversionRate: number;
    engagement: number;
    trend: "up" | "down";
    changePercentage: number;
  };
}

const defaultMetrics = {
  platform: "Zillow",
  metrics: {
    costPerLead: 45.5,
    conversionRate: 2.8,
    engagement: 156,
    trend: "up" as const,
    changePercentage: 12.5,
  },
};

const MetricCard = ({
  platform = defaultMetrics.platform,
  metrics = defaultMetrics.metrics,
}: MetricCardProps) => {
  const trendColor = metrics.trend === "up" ? "text-green-500" : "text-red-500";
  const TrendIcon = metrics.trend === "up" ? ArrowUp : ArrowDown;

  return (
    <Card className="w-[360px] h-[280px] bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">{platform}</CardTitle>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View on {platform}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Cost per Lead
            </span>
            <span className="text-2xl font-bold">
              ${metrics.costPerLead.toFixed(2)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Conversion Rate
              </span>
              <p className="text-xl font-semibold">{metrics.conversionRate}%</p>
            </div>
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Engagement
              </span>
              <p className="text-xl font-semibold">{metrics.engagement}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <TrendIcon className={`h-4 w-4 ${trendColor}`} />
            <span className={`${trendColor} font-medium`}>
              {metrics.changePercentage}%
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              vs last month
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;

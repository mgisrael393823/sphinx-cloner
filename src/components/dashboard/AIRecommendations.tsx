import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { ArrowUpDown, DollarSign, LineChart, Target } from "lucide-react";

interface Recommendation {
  type: "budget" | "listing";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  platform: string;
}

interface AIRecommendationsProps {
  recommendations?: Recommendation[];
}

const defaultRecommendations: Recommendation[] = [
  {
    type: "budget",
    title: "Increase Zillow Budget",
    description:
      "Based on current conversion rates, increasing Zillow budget by 20% could yield 15 more leads",
    impact: "high",
    platform: "Zillow",
  },
  {
    type: "listing",
    title: "Update Apartments.com Photos",
    description:
      "Listings with updated seasonal photos see 35% higher engagement",
    impact: "medium",
    platform: "Apartments.com",
  },
  {
    type: "budget",
    title: "Optimize Meta Ads Targeting",
    description:
      "Current demographic targeting is too broad. Refining could reduce CPC by 25%",
    impact: "high",
    platform: "Meta Ads",
  },
];

const AIRecommendations = ({
  recommendations = defaultRecommendations,
}: AIRecommendationsProps) => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "budget":
        return <DollarSign className="h-4 w-4" />;
      case "listing":
        return <LineChart className="h-4 w-4" />;
      default:
        return <Target className="h-4 w-4" />;
    }
  };

  return (
    <Card className="w-[400px] h-[600px] bg-white dark:bg-gray-800">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <ArrowUpDown className="h-5 w-5" />
          AI Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[520px] w-full pr-4">
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(rec.type)}
                    <span className="font-semibold">{rec.title}</span>
                  </div>
                  <Badge className={getImpactColor(rec.impact)}>
                    {rec.impact} impact
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {rec.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{rec.platform}</Badge>
                  <Button variant="ghost" size="sm">
                    Apply
                  </Button>
                </div>
                {index < recommendations.length - 1 && (
                  <Separator className="my-4" />
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AIRecommendations;

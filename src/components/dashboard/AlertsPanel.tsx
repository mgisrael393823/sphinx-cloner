import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AlertCircle, Bell, CheckCircle2, XCircle } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

type AlertSeverity = "critical" | "warning" | "success";

interface Alert {
  id: string;
  severity: AlertSeverity;
  message: string;
  timestamp: string;
  platform: string;
}

interface AlertsPanelProps {
  alerts?: Alert[];
}

const defaultAlerts: Alert[] = [
  {
    id: "1",
    severity: "critical",
    message: "Zillow conversion rate dropped by 25%",
    timestamp: "2 minutes ago",
    platform: "Zillow",
  },
  {
    id: "2",
    severity: "warning",
    message: "Meta Ads budget near daily limit",
    timestamp: "15 minutes ago",
    platform: "Meta Ads",
  },
  {
    id: "3",
    severity: "success",
    message: "Google Ads performance improved by 15%",
    timestamp: "1 hour ago",
    platform: "Google Ads",
  },
];

const getSeverityIcon = (severity: AlertSeverity) => {
  switch (severity) {
    case "critical":
      return <XCircle className="h-5 w-5 text-red-500" />;
    case "warning":
      return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    case "success":
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
  }
};

const getSeverityColor = (severity: AlertSeverity) => {
  switch (severity) {
    case "critical":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    case "warning":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "success":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
  }
};

const AlertsPanel = ({ alerts = defaultAlerts }: AlertsPanelProps) => {
  return (
    <Card className="w-[400px] h-[300px] bg-white dark:bg-gray-800">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Real-time Alerts
        </CardTitle>
        <Badge variant="secondary">{alerts.length} New</Badge>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[220px] w-full pr-4">
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={alert.id}>
                <div className="flex items-start space-x-3">
                  {getSeverityIcon(alert.severity)}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className={getSeverityColor(alert.severity)}
                      >
                        {alert.platform}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {alert.timestamp}
                      </span>
                    </div>
                    <p className="mt-1 text-sm">{alert.message}</p>
                  </div>
                </div>
                {index < alerts.length - 1 && <Separator className="my-4" />}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;

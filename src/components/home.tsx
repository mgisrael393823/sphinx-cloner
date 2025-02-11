import React, { useState } from "react";
import MetricsGrid from "./dashboard/MetricsGrid";
import AIRecommendations from "./dashboard/AIRecommendations";
import AlertsPanel from "./dashboard/AlertsPanel";
import DataVisualizations from "./dashboard/DataVisualizations";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { MessageCircle, Send } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const defaultMessages: Message[] = [
  {
    id: "1",
    type: "assistant",
    content:
      "Hello! I'm your AI Marketing Assistant. How can I help you analyze your marketing performance today?",
    timestamp: new Date(),
  },
];

const Home = () => {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      type: "assistant",
      content: "Based on the current data, I can see that...",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, aiResponse]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-[1512px] mx-auto space-y-4 px-2 sm:px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            Marketing Intelligence Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Performance Metrics Section */}
          <MetricsGrid />

          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left Side - Data Visualizations */}
            <div className="lg:col-span-8">
              <div className="space-y-4">
                <DataVisualizations />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AIRecommendations />
                  <AlertsPanel />
                </div>
              </div>
            </div>

            {/* Right Side - AI Chat */}
            <div className="lg:col-span-4">
              <Card className="w-full min-h-[600px] lg:h-[800px] bg-white dark:bg-gray-800">
                <CardContent className="p-4 h-full">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2 font-semibold">
                      <MessageCircle className="h-5 w-5" />
                      AI Marketing Assistant
                    </div>
                  </div>
                  <div className="flex flex-col h-[calc(100%-4rem)]">
                    <ScrollArea className="flex-1 pr-4">
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[80%] rounded-lg p-3 ${
                                message.type === "user"
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-100 dark:bg-gray-700"
                              }`}
                            >
                              <p className="text-sm">{message.content}</p>
                              <span className="text-xs opacity-70 mt-1 block">
                                {message.timestamp.toLocaleTimeString()}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <div className="flex items-center gap-2 mt-4">
                      <Input
                        placeholder="Ask about your marketing performance..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSend()}
                        className="flex-1"
                      />
                      <Button size="icon" onClick={handleSend}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

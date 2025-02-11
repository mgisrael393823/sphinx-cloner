import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { MessageCircle, Send, X } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const defaultMessages: Message[] = [
  {
    id: "1",
    type: "assistant",
    content: "I can help you analyze this data. What would you like to know?",
    timestamp: new Date(),
  },
];

const ChatOverlay = ({ isOpen, onClose }: ChatOverlayProps) => {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [input, setInput] = useState("");

  if (!isOpen) return null;

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
    <Card className="absolute right-4 bottom-4 w-[350px] h-[500px] bg-white dark:bg-gray-800 shadow-xl">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <MessageCircle className="h-4 w-4" />
            AI Assistant
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-col h-[400px]">
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
              placeholder="Ask about this data..."
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
  );
};

export default ChatOverlay;

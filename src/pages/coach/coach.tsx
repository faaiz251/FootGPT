// pages/coach.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BotIcon, SendIcon, UserIcon } from "lucide-react";
import Navbar from "@/components/ui/navbar";

export default function Coach() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([
    {
      sender: "ai",
      message: "Hi there! Ready to train today? Tell me what you want to focus on — dribbling, stamina, passing?",
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", message: input };
    const aiReply = {
      sender: "ai",
      message: "Great! Here's a quick 15-minute dribbling drill for today: 🟢 5 min cone zig-zag, 🟢 5 min speed change with ball, 🟢 5 min tight control turns. Let's go!",
    };

    setChat([...chat, userMessage, aiReply]);
    setInput("");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-[85vh] flex flex-col items-center px-4 py-8 bg-gradient-to-br from-white to-green-50">
        <Card className="w-full max-w-3xl shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-green-700 flex items-center gap-2 text-xl">
              <BotIcon className="w-5 h-5" /> Your AI Football Coach
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {chat.map((msg, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                {msg.sender === "ai" ? (
                  <BotIcon className="w-5 h-5 mt-1 text-green-600" />
                ) : (
                  <UserIcon className="w-5 h-5 mt-1 text-gray-600" />
                )}
                <div
                  className={`p-3 rounded-xl text-sm max-w-md ${
                    msg.sender === "ai"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            ))}
          </CardContent>

          <div className="flex items-center gap-2 p-4 border-t">
            <Input
              placeholder="Ask your coach..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1"
            />
            <Button onClick={handleSend}>
              <SendIcon className="w-4 h-4 mr-1" />
              Send
            </Button>
          </div>
        </Card>
      </main>
    </>
  );
}

import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Paperclip,
  MoreVertical,
  Search,
  Phone,
  Video,
  ChevronDown,
  Image,
  File,
  Link,
  Smile,
} from "lucide-react";

// Type definitions
interface Message {
  id: number;
  sender: string;
  avatar: string;
  message: string;
  time: string;
  type: "text" | "file";
  fileName?: string;
  isReply?: boolean;
}

interface Channel {
  id: number;
  name: string;
  unread: number;
  isActive: boolean;
}

const ChatComponent: React.FC = () => {
  // State management with type definitions
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "Sarah Connor",
      avatar: "/api/placeholder/32/32",
      message:
        "Good morning team! Just a reminder about today's practice schedule changes.",
      time: "9:00 AM",
      type: "text",
    },
    {
      id: 2,
      sender: "John Smith",
      avatar: "/api/placeholder/32/32",
      message:
        "Thanks coach! Will the pool temperature be adjusted for the sprint session?",
      time: "9:02 AM",
      type: "text",
      isReply: true,
    },
    {
      id: 3,
      sender: "Emma Thompson",
      avatar: "/api/placeholder/32/32",
      message: "I've shared the latest competition results in the team folder.",
      time: "9:15 AM",
      type: "file",
      fileName: "Competition_Results.pdf",
    },
    {
      id: 4,
      sender: "Sarah Connor",
      avatar: "/api/placeholder/32/32",
      message:
        "Yes, maintenance has confirmed the temperature will be at 78°F for the session.",
      time: "9:20 AM",
      type: "text",
    },
  ]);

  const [channels, setChannels] = useState<Channel[]>([
    { id: 1, name: "Team Announcements", unread: 2, isActive: true },
    { id: 2, name: "Varsity Squad", unread: 0, isActive: false },
    { id: 3, name: "Competition Updates", unread: 5, isActive: false },
    { id: 4, name: "Training Schedule", unread: 1, isActive: false },
  ]);

  const [newMessage, setNewMessage] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState<boolean>(false);

  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when new messages arrive
  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle sending new message
  const handleSendMessage = (): void => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        sender: "John Smith", // Current user
        avatar: "/api/placeholder/32/32",
        message: newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "text",
        isReply: true,
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  // Handle file upload
  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const newMsg: Message = {
        id: messages.length + 1,
        sender: "John Smith",
        avatar: "/api/placeholder/32/32",
        message: `Uploaded file: ${file.name}`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "file",
        fileName: file.name,
        isReply: true,
      };
      setMessages([...messages, newMsg]);
    }
  };

  // Handle channel selection
  const handleChannelSelect = (selectedId: number): void => {
    setChannels(
      channels.map((channel) => ({
        ...channel,
        isActive: channel.id === selectedId,
        unread: channel.id === selectedId ? 0 : channel.unread,
      }))
    );
  };

  // Handle key press for sending message
  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  // Filter messages based on search
  const filteredMessages = messages.filter(
    (message) =>
      message.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.sender.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeChannel = channels.find((channel) => channel.isActive);

  return (
    <div className="h-screen w-full flex flex-row-reverse">
      {/* Channels Sidebar */}
      <div className="w-64 bg-gray-50 border-l border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {channels.map((channel) => (
            <button
              key={channel.id}
              className={`w-full p-3 flex items-center justify-between transition-colors ${
                channel.isActive
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleChannelSelect(channel.id)}
            >
              <span className="font-medium">{channel.name}</span>
              {channel.unread > 0 && (
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  {channel.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="h-16 border-b border-gray-200 px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold">{activeChannel?.name}</h2>
            <span className="text-sm text-gray-500">32 members</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
              <Phone className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
              <Video className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isReply ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex ${
                  message.isReply ? "flex-row-reverse" : "flex-row"
                } items-start space-x-3 max-w-2xl`}
              >
                <img
                  src={message.avatar}
                  alt={message.sender}
                  className="w-8 h-8 rounded-full"
                />
                <div className={`${message.isReply ? "mr-3" : "ml-3"}`}>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-sm">
                      {message.sender}
                    </span>
                    <span className="text-xs text-gray-500">
                      {message.time}
                    </span>
                  </div>
                  {message.type === "text" ? (
                    <div
                      className={`p-3 rounded-lg ${
                        message.isReply
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.message}
                    </div>
                  ) : (
                    <div className="p-3 bg-gray-100 rounded-lg flex items-center space-x-3">
                      <File className="h-5 w-5 text-blue-500" />
                      <span className="text-blue-500">{message.fileName}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileUpload}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                <Paperclip className="h-5 w-5" />
              </button>
            </label>
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewMessage(e.target.value)
                }
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
              >
                <Smile className="h-5 w-5" />
              </button>
            </div>
            <button
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;

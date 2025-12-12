import { useState } from "react";
import { Send, Search, MoreVertical, Phone, Video, Image, Paperclip, Smile } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const conversations = [
  { id: 1, name: "Marie Dupont", lastMessage: "D'accord, à demain alors !", time: "10:30", unread: 2, online: true },
  { id: 2, name: "Groupe Projet IA", lastMessage: "Pierre: J'ai terminé ma partie", time: "09:15", unread: 5, online: false },
  { id: 3, name: "Prof. Martin", lastMessage: "Les résultats seront publiés demain", time: "Hier", unread: 0, online: false },
  { id: 4, name: "Lucas Bernard", lastMessage: "Tu as compris l'exercice 5 ?", time: "Hier", unread: 0, online: true },
  { id: 5, name: "Sophie Laurent", lastMessage: "Merci pour ton aide !", time: "Lun", unread: 0, online: false },
];

const messages = [
  { id: 1, sender: "Marie Dupont", content: "Salut ! Tu as eu le temps de regarder le cours de maths ?", time: "10:15", isMe: false },
  { id: 2, sender: "Me", content: "Oui, j'ai regardé hier soir. C'est vraiment complexe cette partie sur les intégrales !", time: "10:18", isMe: true },
  { id: 3, sender: "Marie Dupont", content: "Je suis d'accord... Tu veux qu'on révise ensemble demain ?", time: "10:22", isMe: false },
  { id: 4, sender: "Me", content: "Bonne idée ! On se retrouve à la bibliothèque vers 14h ?", time: "10:25", isMe: true },
  { id: 5, sender: "Marie Dupont", content: "D'accord, à demain alors !", time: "10:30", isMe: false },
];

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="h-[calc(100vh-4rem)] md:h-screen flex">
      {/* Conversations List */}
      <div className={`w-full md:w-80 lg:w-96 border-r border-border/50 flex flex-col bg-background ${showChat ? 'hidden md:flex' : 'flex'}`}>
        <div className="p-4 border-b border-border/50">
          <h1 className="font-display text-xl font-bold mb-4">Messages</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Rechercher une conversation..." 
              className="pl-10 glass"
            />
          </div>
        </div>
        
        <ScrollArea className="flex-1">
          <div className="p-2">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => {
                  setSelectedChat(conv);
                  setShowChat(true);
                }}
                className={`w-full p-3 rounded-xl flex items-center gap-3 transition-all duration-200 ${
                  selectedChat.id === conv.id 
                    ? 'bg-primary/10 border border-primary/20' 
                    : 'hover:bg-muted'
                }`}
              >
                <div className="relative">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {conv.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {conv.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-success border-2 border-background" />
                  )}
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">{conv.name}</p>
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                    {conv.unread > 0 && (
                      <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className={`flex-1 flex flex-col bg-background ${!showChat ? 'hidden md:flex' : 'flex'}`}>
        {/* Chat Header */}
        <div className="p-4 border-b border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setShowChat(false)}
            >
              ←
            </Button>
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                {selectedChat.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{selectedChat.name}</p>
              <p className="text-xs text-muted-foreground">
                {selectedChat.online ? 'En ligne' : 'Hors ligne'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] md:max-w-[60%] p-3 rounded-2xl ${
                    msg.isMe 
                      ? 'bg-gradient-primary text-primary-foreground rounded-br-md' 
                      : 'glass rounded-bl-md'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${msg.isMe ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t border-border/50">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Image className="w-5 h-5" />
            </Button>
            <Input 
              placeholder="Écrivez un message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 glass"
            />
            <Button variant="ghost" size="icon">
              <Smile className="w-5 h-5" />
            </Button>
            <Button size="icon" className="shadow-glow-sm">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

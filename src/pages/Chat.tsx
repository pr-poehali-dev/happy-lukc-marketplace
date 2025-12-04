import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

const Chat = () => {
  const { chatId } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [selectedChat, setSelectedChat] = useState<string | null>(chatId || 'support');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chats = [
    {
      id: 'support',
      name: 'Поддержка 24/7',
      avatar: '🤖',
      lastMessage: 'Здравствуйте! Чем могу помочь?',
      time: 'сейчас',
      unread: 0,
      online: true,
      isSupport: true
    },
    {
      id: 'seller1',
      name: 'GameShop',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GameShop',
      lastMessage: 'Товар в наличии',
      time: '5 мин',
      unread: 2,
      online: true,
      isSupport: false
    },
    {
      id: 'buyer1',
      name: 'Алексей',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexey',
      lastMessage: 'Когда можете передать?',
      time: '1 час',
      unread: 1,
      online: false,
      isSupport: false
    }
  ];

  const chatData: any = {
    support: [
      { id: 1, sender: 'bot', text: 'Здравствуйте! Я ассистент поддержки HappyLukc. Чем могу помочь?', time: '14:30' },
      { id: 2, sender: 'user', text: 'Как купить робуксы?', time: '14:31' },
      { id: 3, sender: 'bot', text: 'Выберите нужное предложение, нажмите "Купить", оплатите удобным способом. После оплаты продавец свяжется с вами для передачи товара.', time: '14:31' },
      { id: 4, sender: 'bot', text: 'Все сделки защищены. Если возникнут проблемы, мы вернём деньги.', time: '14:31' }
    ],
    seller1: [
      { id: 1, sender: 'other', text: 'Здравствуйте! Интересует товар?', time: '15:20' },
      { id: 2, sender: 'user', text: 'Да, робуксы в наличии?', time: '15:22' },
      { id: 3, sender: 'other', text: 'Товар в наличии', time: '15:23' },
      { id: 4, sender: 'other', text: 'Могу передать сразу после оплаты', time: '15:23' }
    ],
    buyer1: [
      { id: 1, sender: 'other', text: 'Здравствуйте, заказал у вас скины', time: '13:15' },
      { id: 2, sender: 'user', text: 'Да, вижу заказ', time: '13:20' },
      { id: 3, sender: 'other', text: 'Когда можете передать?', time: '13:25' }
    ]
  };

  const currentChat = chats.find(c => c.id === selectedChat);
  const currentMessages = chatData[selectedChat || 'support'] || [];

  useEffect(() => {
    setMessages(currentMessages);
  }, [selectedChat]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: message,
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    if (currentChat?.isSupport) {
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          sender: 'bot',
          text: 'Спасибо за ваш вопрос! Наш специалист свяжется с вами в ближайшее время. Обычно ответ занимает 1-5 минут.',
          time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <span className="text-primary">✨</span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              HappyLukc
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">
              Каталог
            </Link>
            <Link to="/premium" className="text-sm font-medium hover:text-primary transition-colors">
              Premium
            </Link>
            <Link to="/chat" className="text-sm font-medium text-primary transition-colors">
              Чаты
            </Link>
            <Link to="/profile" className="text-sm font-medium hover:text-primary transition-colors">
              Профиль
            </Link>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </header>

      <main className="py-8 px-4">
        <div className="container max-w-7xl">
          <div className="mb-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2 mb-4">
              <Icon name="ArrowLeft" size={16} />
              Назад
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Сообщения
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-6 h-[calc(100vh-250px)]">
            <Card className="md:col-span-1 border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Чаты
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(100vh-350px)]">
                  <div className="space-y-2 p-4">
                    {chats.map(chat => (
                      <div
                        key={chat.id}
                        onClick={() => setSelectedChat(chat.id)}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                          selectedChat === chat.id 
                            ? 'bg-primary/10 border-2 border-primary/50' 
                            : 'hover:bg-primary/5 border-2 border-transparent'
                        }`}
                      >
                        <div className="relative">
                          {chat.isSupport ? (
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-2xl">
                              {chat.avatar}
                            </div>
                          ) : (
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={chat.avatar} />
                              <AvatarFallback>{chat.name[0]}</AvatarFallback>
                            </Avatar>
                          )}
                          {chat.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold truncate">{chat.name}</h3>
                            <span className="text-xs text-muted-foreground">{chat.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                        </div>
                        {chat.unread > 0 && (
                          <Badge className="bg-accent">{chat.unread}</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 border-2 flex flex-col">
              {currentChat ? (
                <>
                  <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {currentChat.isSupport ? (
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-2xl">
                            {currentChat.avatar}
                          </div>
                        ) : (
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={currentChat.avatar} />
                            <AvatarFallback>{currentChat.name[0]}</AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <h3 className="font-semibold flex items-center gap-2">
                            {currentChat.name}
                            {currentChat.online && (
                              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            )}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {currentChat.online ? 'В сети' : 'Был(а) недавно'}
                          </p>
                        </div>
                      </div>
                      {currentChat.isSupport && (
                        <Badge className="bg-gradient-to-r from-primary to-accent">
                          <Icon name="Headphones" size={14} className="mr-1" />
                          24/7
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                              msg.sender === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : msg.sender === 'bot'
                                ? 'bg-gradient-to-r from-accent/20 to-primary/20 border-2 border-primary/30'
                                : 'bg-muted'
                            }`}
                          >
                            <p className="text-sm">{msg.text}</p>
                            <span className={`text-xs mt-1 block ${
                              msg.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                            }`}>
                              {msg.time}
                            </span>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>

                  <div className="p-4 border-t">
                    <div className="flex gap-2">
                      <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Введите сообщение..."
                        className="flex-1"
                      />
                      <Button onClick={handleSend} size="icon">
                        <Icon name="Send" size={20} />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {currentChat.isSupport 
                        ? '🤖 Поддержка работает 24/7. Обычно отвечаем за 1-5 минут'
                        : 'Будьте вежливы и соблюдайте правила площадки'
                      }
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-muted-foreground">
                    <Icon name="MessageCircle" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Выберите чат для начала общения</p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;

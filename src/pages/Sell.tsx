import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Sell = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isGoogleConnected, setIsGoogleConnected] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [profileAvatar, setProfileAvatar] = useState<string | null>(null);
  
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState<string | null>(null);

  const games = [
    { id: 'roblox', name: 'Roblox', categories: ['Робуксы', 'Аккаунты', 'Вещи'] },
    { id: 'minecraft', name: 'Minecraft', categories: ['Донаты', 'Сервера', 'Лицензии'] },
    { id: 'standoff2', name: 'Standoff 2', categories: ['Скины', 'Аккаунты', 'Кланы'] },
    { id: 'like', name: 'Like', categories: ['Накрутка', 'Аккаунты', 'СуперЛайки'] },
    { id: 'youtube', name: 'YouTube', categories: ['Накрутка', 'Аккаунты', 'Модераторы-Админы-Монтажёры'] },
    { id: 'rutube', name: 'Rutube', categories: ['Накрутка', 'Аккаунты', 'Продвижение'] }
  ];

  const selectedGameData = games.find(g => g.id === selectedGame);

  const handleGoogleConnect = () => {
    setIsGoogleConnected(true);
    setProfileName('Иван Петров');
    setProfileAvatar('https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan');
    toast({
      title: "Google аккаунт подключен",
      description: "Теперь вы можете продавать услуги"
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'product') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'profile') {
          setProfileAvatar(reader.result as string);
        } else {
          setProductImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!selectedGame || !selectedCategory || !productTitle || !productPrice) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Объявление создано!",
      description: "Ваше объявление опубликовано и доступно покупателям"
    });

    setTimeout(() => {
      navigate('/');
    }, 1500);
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
            <Link to="/chat" className="text-sm font-medium hover:text-primary transition-colors">
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

      <main className="py-16 px-4">
        <div className="container max-w-3xl">
          <div className="mb-8">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2 mb-4">
              <Icon name="ArrowLeft" size={16} />
              Назад
            </Link>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Разместить услугу
            </h1>
            <p className="text-muted-foreground">
              Заполните информацию о вашей услуге или товаре
            </p>
          </div>

          {!isGoogleConnected ? (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Key" size={24} />
                  Подключите Google аккаунт
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Для размещения объявлений необходимо привязать Google аккаунт. Это обеспечивает безопасность и доверие между пользователями.
                </p>
                <Button size="lg" onClick={handleGoogleConnect} className="w-full">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Подключить Google
                </Button>
              </CardContent>
            </Card>
          ) : step === 1 ? (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="User" size={24} />
                  Профиль продавца
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Аватар</Label>
                  <div className="flex items-center gap-4">
                    {profileAvatar && (
                      <img src={profileAvatar} alt="Avatar" className="w-20 h-20 rounded-full" />
                    )}
                    <div>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, 'profile')}
                        className="mb-2"
                      />
                      <p className="text-xs text-muted-foreground">Загрузите новое фото профиля</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profileName">Имя продавца *</Label>
                  <Input
                    id="profileName"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    placeholder="Введите ваше имя"
                  />
                </div>

                <Button onClick={() => setStep(2)} className="w-full" size="lg">
                  Продолжить
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Package" size={24} />
                  Информация о товаре/услуге
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="game">Игра/Платформа *</Label>
                  <Select value={selectedGame} onValueChange={setSelectedGame}>
                    <SelectTrigger id="game">
                      <SelectValue placeholder="Выберите игру" />
                    </SelectTrigger>
                    <SelectContent>
                      {games.map(game => (
                        <SelectItem key={game.id} value={game.id}>{game.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedGame && (
                  <div className="space-y-2">
                    <Label htmlFor="category">Категория *</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedGameData?.categories.map(cat => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="title">Название *</Label>
                  <Input
                    id="title"
                    value={productTitle}
                    onChange={(e) => setProductTitle(e.target.value)}
                    placeholder="Например: 1000 Робуксов"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Цена (₽) *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    placeholder="990"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Описание</Label>
                  <Textarea
                    id="description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    placeholder="Подробное описание товара или услуги..."
                    rows={5}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Изображение</Label>
                  <div className="flex items-center gap-4">
                    {productImage && (
                      <img src={productImage} alt="Product" className="w-32 h-32 object-cover rounded-lg" />
                    )}
                    <div className="flex-1">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, 'product')}
                      />
                      <p className="text-xs text-muted-foreground mt-2">Загрузите фото товара</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    <Icon name="ArrowLeft" size={20} className="mr-2" />
                    Назад
                  </Button>
                  <Button onClick={handleSubmit} className="flex-1" size="lg">
                    <Icon name="Check" size={20} className="mr-2" />
                    Опубликовать
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Sell;

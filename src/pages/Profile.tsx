import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Profile = () => {
  const purchases = [
    {
      id: 1,
      title: 'Наушники Premium',
      price: 5990,
      date: '2024-12-01',
      status: 'Доставлено',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      title: 'Кроссовки Nike Air',
      price: 8990,
      date: '2024-11-28',
      status: 'В пути',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop'
    }
  ];

  const sales = [
    {
      id: 1,
      title: 'Рюкзак городской',
      price: 3490,
      date: '2024-11-30',
      status: 'Продано',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop'
    }
  ];

  const cards = [
    {
      id: 1,
      last4: '4242',
      brand: 'Visa',
      isDefault: true
    },
    {
      id: 2,
      last4: '5555',
      brand: 'Mastercard',
      isDefault: false
    }
  ];

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
            <Link to="/profile" className="text-sm font-medium text-primary">
              Профиль
            </Link>
            <a 
              href="https://t.me/happylukc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
            >
              <Icon name="Send" size={16} />
              Telegram
            </a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </header>

      <main className="container py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-8 mb-8">
            <Avatar className="h-24 w-24 border-4 border-primary">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
              <AvatarFallback className="text-2xl">ИП</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">Иван Петров</h1>
              <p className="text-muted-foreground mb-4">ivan.petrov@example.com</p>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Icon name="Settings" size={16} className="mr-2" />
                  Настройки
                </Button>
                <Button variant="outline">
                  <Icon name="LogOut" size={16} className="mr-2" />
                  Выйти
                </Button>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">24</div>
                <div className="text-sm text-muted-foreground">Покупок</div>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-accent">12</div>
                <div className="text-sm text-muted-foreground">Продаж</div>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-secondary">4.8</div>
                <div className="text-sm text-muted-foreground">Рейтинг</div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="purchases" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="purchases">
                <Icon name="ShoppingBag" size={16} className="mr-2" />
                Покупки
              </TabsTrigger>
              <TabsTrigger value="sales">
                <Icon name="Store" size={16} className="mr-2" />
                Продажи
              </TabsTrigger>
              <TabsTrigger value="payment">
                <Icon name="CreditCard" size={16} className="mr-2" />
                Оплата
              </TabsTrigger>
            </TabsList>

            <TabsContent value="purchases" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>История покупок</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {purchases.map((purchase) => (
                    <div key={purchase.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <img
                        src={purchase.image}
                        alt={purchase.title}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{purchase.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          Дата: {new Date(purchase.date).toLocaleDateString('ru-RU')}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg mb-2">
                          {purchase.price.toLocaleString('ru-RU')} ₽
                        </div>
                        <Badge variant={purchase.status === 'Доставлено' ? 'default' : 'secondary'}>
                          {purchase.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        Детали
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sales" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Мои товары</span>
                    <Button>
                      <Icon name="Plus" size={16} className="mr-2" />
                      Добавить товар
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {sales.map((sale) => (
                    <div key={sale.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <img
                        src={sale.image}
                        alt={sale.title}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{sale.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          Дата: {new Date(sale.date).toLocaleDateString('ru-RU')}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg mb-2">
                          {sale.price.toLocaleString('ru-RU')} ₽
                        </div>
                        <Badge variant="default">
                          {sale.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        Редактировать
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payment" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Привязанные карты</span>
                    <Button>
                      <Icon name="Plus" size={16} className="mr-2" />
                      Добавить карту
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cards.map((card) => (
                    <div key={card.id} className="flex items-center gap-4 p-6 border-2 rounded-lg hover:border-primary transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                        <Icon name="CreditCard" size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg mb-1">
                          {card.brand} •••• {card.last4}
                        </div>
                        {card.isDefault && (
                          <Badge variant="secondary" className="text-xs">
                            Основная карта
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {!card.isDefault && (
                          <Button variant="outline" size="sm">
                            Сделать основной
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>История платежей</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                          <Icon name="ArrowDownLeft" size={20} className="text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <div className="font-semibold">Покупка: Наушники Premium</div>
                          <div className="text-sm text-muted-foreground">01 декабря 2024</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600 dark:text-green-400">-5 990 ₽</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <Icon name="ArrowUpRight" size={20} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <div className="font-semibold">Продажа: Рюкзак городской</div>
                          <div className="text-sm text-muted-foreground">30 ноября 2024</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-blue-600 dark:text-blue-400">+3 490 ₽</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Profile;

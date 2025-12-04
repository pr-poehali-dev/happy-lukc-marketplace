import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const games = [
    {
      id: 'roblox',
      name: 'Roblox',
      icon: '🎮',
      color: 'from-red-500 to-red-600',
      categories: ['Робуксы', 'Аккаунты', 'Вещи']
    },
    {
      id: 'minecraft',
      name: 'Minecraft',
      icon: '⛏️',
      color: 'from-green-500 to-green-600',
      categories: ['Донаты', 'Сервера', 'Лицензии']
    },
    {
      id: 'standoff2',
      name: 'Standoff 2',
      icon: '🔫',
      color: 'from-orange-500 to-orange-600',
      categories: ['Скины', 'Аккаунты', 'Кланы']
    },
    {
      id: 'like',
      name: 'Like',
      icon: '❤️',
      color: 'from-pink-500 to-pink-600',
      categories: ['Накрутка', 'Аккаунты', 'СуперЛайки']
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: '▶️',
      color: 'from-red-500 to-red-700',
      categories: ['Накрутка', 'Аккаунты', 'Модераторы-Админы-Монтажёры']
    },
    {
      id: 'rutube',
      name: 'Rutube',
      icon: '📺',
      color: 'from-blue-500 to-blue-600',
      categories: ['Накрутка', 'Аккаунты', 'Продвижение']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <span className="text-primary">✨</span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                HappyLukc
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-primary transition-colors">
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

          <div className="flex items-center gap-3">
            <Link to="/chat">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="MessageCircle" size={20} />
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-xs text-accent-foreground flex items-center justify-center">
                  2
                </span>
              </Button>
            </Link>
            <Link to="/sell">
              <Button variant="default" className="hidden sm:flex">
                <Icon name="Plus" size={16} className="mr-2" />
                Продавать
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="py-16 px-4">
          <div className="container">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-700">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Покупай и продавай
                <br />игровые услуги! 🎮
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Маркетплейс игровых услуг с безопасными платежами и защитой сделок
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/sell">
                  <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-shadow">
                    <Icon name="Plus" size={20} className="mr-2" />
                    Разместить услугу
                  </Button>
                </Link>
                <Link to="/catalog">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти услугу
                  </Button>
                </Link>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск услуг..."
                  className="pl-12 h-14 text-lg shadow-md"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center">🎯 Выберите игру</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game) => (
                <Link key={game.id} to={`/game/${game.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 cursor-pointer">
                    <div className={`h-32 bg-gradient-to-br ${game.color} flex items-center justify-center text-6xl`}>
                      {game.icon}
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-2xl mb-3 text-center">{game.name}</h3>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {game.categories.map((category) => (
                          <span
                            key={category}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8 border-2 hover:border-primary transition-colors">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3">Безопасность</h3>
                <p className="text-muted-foreground">
                  Защита всех сделок и гарантия возврата средств
                </p>
              </Card>

              <Card className="text-center p-8 border-2 hover:border-primary transition-colors">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3">Быстро</h3>
                <p className="text-muted-foreground">
                  Мгновенная передача товаров и услуг
                </p>
              </Card>

              <Card className="text-center p-8 border-2 hover:border-primary transition-colors">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-3">Поддержка 24/7</h3>
                <p className="text-muted-foreground">
                  Всегда готовы помочь в чате и решить любой вопрос
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">📊 Статистика платформы</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">12,847</div>
                <div className="text-sm text-muted-foreground">Активных объявлений</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-accent mb-2">45,231</div>
                <div className="text-sm text-muted-foreground">Пользователей</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-secondary mb-2">98.7%</div>
                <div className="text-sm text-muted-foreground">Успешных сделок</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 px-4 mt-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 text-2xl font-bold mb-4">
                <span className="text-primary">✨</span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  HappyLukc
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Маркетплейс с яркими эмоциями и безопасными покупками
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link></li>
                <li><Link to="/how-to-buy" className="hover:text-primary transition-colors">Как купить</Link></li>
                <li><Link to="/payment" className="hover:text-primary transition-colors">Оплата</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продавцам</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/sell" className="hover:text-primary transition-colors">Начать продавать</Link></li>
                <li><Link to="/seller-guide" className="hover:text-primary transition-colors">Руководство</Link></li>
                <li><Link to="/fees" className="hover:text-primary transition-colors">Комиссии</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://t.me/happylukc" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Icon name="Send" size={16} />
                    Telegram канал
                  </a>
                </li>
                <li><Link to="/support" className="hover:text-primary transition-colors">Поддержка</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">О нас</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 HappyLukc. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
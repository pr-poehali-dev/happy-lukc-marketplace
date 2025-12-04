import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const products = [
    {
      id: 1,
      title: 'Наушники Premium',
      price: 5990,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      category: 'Электроника',
      seller: 'TechStore'
    },
    {
      id: 2,
      title: 'Кроссовки Nike Air',
      price: 8990,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
      category: 'Обувь',
      seller: 'SneakerShop'
    },
    {
      id: 3,
      title: 'Рюкзак городской',
      price: 3490,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
      category: 'Аксессуары',
      seller: 'BagStore'
    },
    {
      id: 4,
      title: 'Умные часы',
      price: 12990,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
      category: 'Электроника',
      seller: 'GadgetHub'
    },
    {
      id: 5,
      title: 'Толстовка унисекс',
      price: 2990,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop',
      category: 'Одежда',
      seller: 'FashionPlace'
    },
    {
      id: 6,
      title: 'Игровая мышь',
      price: 4490,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop',
      category: 'Электроника',
      seller: 'GamersWorld'
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
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">
              Каталог
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
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-xs text-accent-foreground flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="default" className="hidden sm:flex">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
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
                <br />с радостью! 🎉
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Маркетплейс нового поколения с безопасными платежами и дружелюбным сообществом
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-shadow">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Разместить товар
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти товар
                </Button>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск товаров..."
                  className="pl-12 h-14 text-lg shadow-md"
                />
              </div>
            </div>

            <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
              {['Все', 'Электроника', 'Одежда', 'Обувь', 'Аксессуары', 'Дом'].map((category) => (
                <Button
                  key={category}
                  variant={category === 'Все' ? 'default' : 'outline'}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">🔥 Популярные товары</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                      {product.category}
                    </Badge>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Icon name="Store" size={16} />
                      <span>{product.seller}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {product.price.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button className="flex-1" variant="default">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 mt-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8 border-2 hover:border-primary transition-colors">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3">Безопасные платежи</h3>
                <p className="text-muted-foreground">
                  Привязка карт с защитой данных. Гарантия возврата средств.
                </p>
              </Card>
              <Card className="text-center p-8 border-2 hover:border-accent transition-colors">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3">Быстрые сделки</h3>
                <p className="text-muted-foreground">
                  Мгновенная оплата и уведомления о статусе заказа.
                </p>
              </Card>
              <Card className="text-center p-8 border-2 hover:border-secondary transition-colors">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3">Сообщество</h3>
                <p className="text-muted-foreground">
                  Присоединяйся к нашему Telegram-каналу с 10 000+ участников!
                </p>
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

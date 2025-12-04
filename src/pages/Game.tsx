import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Game = () => {
  const { gameId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const gamesData: any = {
    roblox: {
      name: 'Roblox',
      icon: '🎮',
      color: 'from-red-500 to-red-600',
      categories: ['Робуксы', 'Аккаунты', 'Вещи'],
      products: [
        { id: 1, title: '1000 Робуксов', price: 790, category: 'Робуксы', seller: 'GameShop', rating: 4.9 },
        { id: 2, title: 'Аккаунт 50 LVL + 5000 робуксов', price: 2990, category: 'Аккаунты', seller: 'ProGamer', rating: 4.8 },
        { id: 3, title: 'Набор редких вещей', price: 1490, category: 'Вещи', seller: 'ItemStore', rating: 4.7 }
      ]
    },
    minecraft: {
      name: 'Minecraft',
      icon: '⛏️',
      color: 'from-green-500 to-green-600',
      categories: ['Донаты', 'Сервера', 'Лицензии'],
      products: [
        { id: 1, title: 'Premium донат на сервер', price: 590, category: 'Донаты', seller: 'MCShop', rating: 4.9 },
        { id: 2, title: 'Готовый сервер под ключ', price: 4990, category: 'Сервера', seller: 'ServerHost', rating: 4.8 },
        { id: 3, title: 'Лицензия Minecraft', price: 1790, category: 'Лицензии', seller: 'GameKey', rating: 4.9 }
      ]
    },
    standoff2: {
      name: 'Standoff 2',
      icon: '🔫',
      color: 'from-orange-500 to-orange-600',
      categories: ['Скины', 'Аккаунты', 'Кланы'],
      products: [
        { id: 1, title: 'Легендарный скин AWP', price: 990, category: 'Скины', seller: 'SkinShop', rating: 4.9 },
        { id: 2, title: 'Аккаунт с редкими скинами', price: 3490, category: 'Аккаунты', seller: 'ProPlayer', rating: 4.7 },
        { id: 3, title: 'Топ клан с базой', price: 1990, category: 'Кланы', seller: 'ClanMaster', rating: 4.8 }
      ]
    },
    like: {
      name: 'Like',
      icon: '❤️',
      color: 'from-pink-500 to-pink-600',
      categories: ['Накрутка', 'Аккаунты', 'СуперЛайки'],
      products: [
        { id: 1, title: '1000 лайков на видео', price: 290, category: 'Накрутка', seller: 'LikeBoost', rating: 4.9 },
        { id: 2, title: 'Аккаунт с подписчиками', price: 1490, category: 'Аккаунты', seller: 'AccStore', rating: 4.6 },
        { id: 3, title: '500 СуперЛайков', price: 590, category: 'СуперЛайки', seller: 'LikePro', rating: 4.8 }
      ]
    },
    youtube: {
      name: 'YouTube',
      icon: '▶️',
      color: 'from-red-500 to-red-700',
      categories: ['Накрутка', 'Аккаунты', 'Модераторы-Админы-Монтажёры'],
      products: [
        { id: 1, title: '1000 подписчиков YouTube', price: 1990, category: 'Накрутка', seller: 'YTBoost', rating: 4.8 },
        { id: 2, title: 'Канал с монетизацией 10к', price: 9990, category: 'Аккаунты', seller: 'ChannelSale', rating: 4.9 },
        { id: 3, title: 'Монтажёр для видео', price: 2500, category: 'Модераторы-Админы-Монтажёры', seller: 'VideoEditor', rating: 4.7 }
      ]
    },
    rutube: {
      name: 'Rutube',
      icon: '📺',
      color: 'from-blue-500 to-blue-600',
      categories: ['Накрутка', 'Аккаунты', 'Продвижение'],
      products: [
        { id: 1, title: '5000 просмотров Rutube', price: 490, category: 'Накрутка', seller: 'RTBoost', rating: 4.7 },
        { id: 2, title: 'Аккаунт с подписчиками', price: 1990, category: 'Аккаунты', seller: 'RutubeShop', rating: 4.8 },
        { id: 3, title: 'Продвижение канала', price: 3990, category: 'Продвижение', seller: 'PromoRu', rating: 4.9 }
      ]
    }
  };

  const game = gamesData[gameId || 'roblox'];
  const filteredProducts = selectedCategory === 'all' 
    ? game.products 
    : game.products.filter((p: any) => p.category === selectedCategory);

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

          <div className="flex items-center gap-3">
            <Link to="/chat">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="MessageCircle" size={20} />
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
        <section className="py-8 px-4">
          <div className="container">
            <div className="mb-8">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2 mb-4">
                <Icon name="ArrowLeft" size={16} />
                Назад к играм
              </Link>
              <div className={`inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r ${game.color} text-white`}>
                <span className="text-5xl">{game.icon}</span>
                <h1 className="text-4xl font-bold">{game.name}</h1>
              </div>
            </div>

            <div className="max-w-2xl mb-8">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder={`Поиск услуг в ${game.name}...`}
                  className="pl-12 h-12 text-lg shadow-md"
                />
              </div>
            </div>

            <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className="whitespace-nowrap"
              >
                Все
              </Button>
              {game.categories.map((category: string) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product: any) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <div className={`h-32 bg-gradient-to-br ${game.color} flex items-center justify-center text-5xl`}>
                    {game.icon}
                  </div>
                  <CardContent className="pt-4">
                    <Badge className="mb-2">{product.category}</Badge>
                    <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Icon name="Store" size={16} />
                      <span>{product.seller}</span>
                      <Icon name="Star" size={16} className="ml-auto text-yellow-500" />
                      <span className="text-foreground">{product.rating}</span>
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
                    <Link to="/chat/seller">
                      <Button variant="outline" size="icon">
                        <Icon name="MessageCircle" size={16} />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Game;

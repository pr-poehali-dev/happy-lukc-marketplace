import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Premium = () => {
  const premiumFeatures = [
    {
      icon: 'Crown',
      title: 'Приоритет в поиске',
      description: 'Ваши объявления будут выше в результатах поиска'
    },
    {
      icon: 'Zap',
      title: 'Продвижение товаров',
      description: 'Автоматическое продвижение ваших объявлений'
    },
    {
      icon: 'Shield',
      title: 'Защита сделок',
      description: 'Расширенная защита покупок и возвратов'
    },
    {
      icon: 'TrendingUp',
      title: 'Аналитика продаж',
      description: 'Подробная статистика по вашим товарам'
    },
    {
      icon: 'MessageCircle',
      title: 'Приоритетная поддержка',
      description: 'Быстрые ответы от службы поддержки'
    },
    {
      icon: 'Gift',
      title: 'Эксклюзивные предложения',
      description: 'Доступ к закрытым распродажам и акциям'
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
            <Link to="/premium" className="text-sm font-medium text-primary transition-colors">
              Premium
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

      <main>
        <section className="py-16 px-4">
          <div className="container max-w-5xl">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-700">
              <Badge className="mb-4 text-lg px-4 py-2 bg-gradient-to-r from-primary to-accent">
                <Icon name="Crown" size={16} className="mr-2" />
                Premium
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Продавай быстрее
                <br />с Premium! 👑
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Получи все преимущества для успешной торговли всего за 590₽ в месяц
              </p>
            </div>

            <Card className="mb-12 border-4 border-primary/50 shadow-2xl overflow-hidden bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="text-center pb-4 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
                <CardTitle className="text-4xl font-bold">
                  590 ₽
                  <span className="text-lg text-muted-foreground font-normal ml-2">/месяц</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {premiumFeatures.map((feature) => (
                    <div key={feature.title} className="flex gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Icon name={feature.icon as any} size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="w-full text-xl py-6 shadow-lg hover:shadow-2xl transition-all">
                  <Icon name="Sparkles" size={24} className="mr-2" />
                  Оформить Premium
                </Button>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  Отменить подписку можно в любой момент
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center p-6 border-2 hover:border-primary transition-colors">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-semibold mb-2">Быстрые продажи</h3>
                <p className="text-sm text-muted-foreground">
                  Товары с Premium продаются на 3x быстрее
                </p>
              </Card>

              <Card className="text-center p-6 border-2 hover:border-primary transition-colors">
                <div className="text-4xl mb-3">📈</div>
                <h3 className="font-semibold mb-2">Больше просмотров</h3>
                <p className="text-sm text-muted-foreground">
                  До 10x больше людей увидят ваши объявления
                </p>
              </Card>

              <Card className="text-center p-6 border-2 hover:border-primary transition-colors">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-semibold mb-2">Выше доход</h3>
                <p className="text-sm text-muted-foreground">
                  Пользователи Premium зарабатывают на 50% больше
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-r from-accent/10 to-primary/10 border-2">
              <h2 className="text-2xl font-bold mb-6 text-center">Часто задаваемые вопросы</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="HelpCircle" size={18} className="text-primary" />
                    Как оплатить подписку?
                  </h3>
                  <p className="text-sm text-muted-foreground ml-7">
                    Вы можете оплатить банковской картой, через СБП или электронные кошельки
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="HelpCircle" size={18} className="text-primary" />
                    Можно ли отменить подписку?
                  </h3>
                  <p className="text-sm text-muted-foreground ml-7">
                    Да, вы можете отменить подписку в любой момент в настройках профиля
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="HelpCircle" size={18} className="text-primary" />
                    Что будет после отмены?
                  </h3>
                  <p className="text-sm text-muted-foreground ml-7">
                    Premium функции останутся доступны до конца оплаченного периода
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 px-4 bg-background/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="text-primary">✨</span>
                HappyLukc
              </h3>
              <p className="text-sm text-muted-foreground">
                Маркетплейс нового поколения
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Площадка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link></li>
                <li><Link to="/premium" className="hover:text-primary transition-colors">Premium</Link></li>
                <li><a href="https://t.me/happylukc" className="hover:text-primary transition-colors">Telegram</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 HappyLukc. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Premium;

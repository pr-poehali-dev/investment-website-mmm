import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const [investment, setInvestment] = useState([100000]);
  const [months, setMonths] = useState([12]);

  const calculateReturn = () => {
    const rate = 0.15;
    const totalReturn = investment[0] * Math.pow(1 + rate, months[0] / 12);
    const profit = totalReturn - investment[0];
    return { totalReturn, profit };
  };

  const { totalReturn, profit } = calculateReturn();

  const projects = [
    {
      title: 'Цифровая Недвижимость',
      description: 'Инвестиции в коммерческую недвижимость через цифровые активы',
      roi: '15% в месяц',
      minInvestment: '50 000 ₽',
      term: 'от 3 месяцев',
      icon: 'Building2'
    },
    {
      title: 'Технологические Стартапы',
      description: 'Портфель перспективных IT-компаний на стадии роста',
      roi: '20% в месяц',
      minInvestment: '100 000 ₽',
      term: 'от 3 месяцев',
      icon: 'Rocket'
    },
    {
      title: 'Зеленая Энергетика',
      description: 'Экологичные проекты в области возобновляемой энергии',
      roi: '20% в месяц',
      minInvestment: '75 000 ₽',
      term: 'от 3 месяцев',
      icon: 'Zap'
    }
  ];

  const stats = [
    { value: '500 млн ₽', label: 'Капитализация', icon: 'TrendingUp' },
    { value: '1 000+', label: 'Инвесторов', icon: 'Users' },
    { value: '120+', label: 'Проектов', icon: 'Briefcase' },
    { value: '99.5%', label: 'Возврат средств', icon: 'Shield' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Gem" size={32} className="text-gold" />
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                МММ
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'projects', 'analytics', 'about', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-all hover:text-gold ${
                    activeSection === section ? 'text-gold' : 'text-foreground/70'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'projects' && 'Проекты'}
                  {section === 'analytics' && 'Аналитика'}
                  {section === 'about' && 'О компании'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="bg-gold hover:bg-gold-dark text-background font-semibold">
              Войти в кабинет
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent leading-tight">
              Мы Можем Многое
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
              Инвестируйте в будущее с премиальной платформой, которая открывает доступ к эксклюзивным проектам
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-background font-semibold text-lg px-8 py-6 animate-glow"
                onClick={() => scrollToSection('projects')}
              >
                Начать инвестировать
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold/10 font-semibold text-lg px-8 py-6"
                onClick={() => scrollToSection('analytics')}
              >
                Рассчитать доход
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon name={stat.icon as any} size={40} className="mx-auto mb-3 text-gold" />
                <div className="text-3xl font-heading font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gold">
              Инвестиционные Проекты
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Тщательно отобранные возможности для роста вашего капитала
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-gold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 animate-fade-in hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <Icon name={project.icon as any} size={24} className="text-gold" />
                  </div>
                  <CardTitle className="text-xl font-heading">{project.title}</CardTitle>
                  <CardDescription className="text-foreground/60">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground/60">Доходность:</span>
                      <span className="font-semibold text-gold">{project.roi}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground/60">Мин. вложение:</span>
                      <span className="font-semibold">{project.minInvestment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground/60">Срок:</span>
                      <span className="font-semibold">{project.term}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gold hover:bg-gold-dark text-background"
                    onClick={() => navigate(`/application?project=${encodeURIComponent(project.title)}`)}
                  >
                    Инвестировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="analytics" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gold">
              Калькулятор Доходности
            </h2>
            <p className="text-lg text-foreground/70">
              Рассчитайте потенциальный доход от ваших инвестиций
            </p>
          </div>
          <Card className="bg-card border-gold/30 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">Ваши параметры</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-sm font-medium">Сумма инвестиций</label>
                  <span className="text-gold font-bold">{investment[0].toLocaleString('ru-RU')} ₽</span>
                </div>
                <Slider
                  value={investment}
                  onValueChange={setInvestment}
                  min={10000}
                  max={10000000}
                  step={10000}
                  className="[&_[role=slider]]:bg-gold [&_[role=slider]]:border-gold"
                />
                <div className="flex justify-between text-xs text-foreground/50 mt-2">
                  <span>10 000 ₽</span>
                  <span>10 000 000 ₽</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-sm font-medium">Срок инвестирования</label>
                  <span className="text-gold font-bold">{months[0]} мес.</span>
                </div>
                <Slider
                  value={months}
                  onValueChange={setMonths}
                  min={3}
                  max={60}
                  step={3}
                  className="[&_[role=slider]]:bg-gold [&_[role=slider]]:border-gold"
                />
                <div className="flex justify-between text-xs text-foreground/50 mt-2">
                  <span>3 мес.</span>
                  <span>60 мес.</span>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Ваша инвестиция:</span>
                  <span className="text-xl font-bold">{investment[0].toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Прибыль:</span>
                  <span className="text-xl font-bold text-gold">+{profit.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Итого к получению:</span>
                    <span className="text-2xl font-heading font-bold text-gold">
                      {totalReturn.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-foreground/50 text-center">
                * Расчет основан на средней доходности 15% годовых. Фактическая доходность может отличаться.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gold">
              О компании МММ
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border animate-fade-in">
              <CardHeader>
                <Icon name="Target" size={40} className="text-gold mb-3" />
                <CardTitle className="text-xl font-heading">Наша миссия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Сделать профессиональные инвестиции доступными каждому через инновационные технологии и прозрачные условия.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <Icon name="Award" size={40} className="text-gold mb-3" />
                <CardTitle className="text-xl font-heading">Наши преимущества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Более 10 лет опыта, портфель проверенных проектов и команда экспертов мирового уровня.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <Icon name="Lock" size={40} className="text-gold mb-3" />
                <CardTitle className="text-xl font-heading">Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Все средства защищены современными технологиями шифрования и страховыми гарантиями.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <Icon name="HeartHandshake" size={40} className="text-gold mb-3" />
                <CardTitle className="text-xl font-heading">Поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Персональный менеджер и круглосуточная техническая поддержка для каждого клиента.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gold">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Готовы начать инвестировать? Наши специалисты помогут вам выбрать оптимальную стратегию
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Phone" size={24} className="text-gold" />
                <span className="text-xl">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Mail" size={24} className="text-gold" />
                <span className="text-xl">info@mmm-invest.ru</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="MapPin" size={24} className="text-gold" />
                <span className="text-xl">Москва, ул. Пресненская набережная, 12</span>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-background font-semibold text-lg px-8 py-6"
            >
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-foreground/50 text-sm">
          <p>© 2026 МММ. Мы Можем Многое. Все права защищены.</p>
          <p className="mt-2">Инвестиции сопряжены с рисками. Проконсультируйтесь со специалистом.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
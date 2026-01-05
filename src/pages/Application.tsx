import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Application = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const projectName = searchParams.get('project') || 'Инвестиционный проект';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    amount: '',
    term: '3'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
    alert('Заявка успешно отправлена! Наш менеджер свяжется с вами в ближайшее время.');
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Icon name="Gem" size={32} className="text-gold" />
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                МММ
              </span>
            </button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="border-gold text-gold hover:bg-gold/10"
            >
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gold">
              Заявка на инвестирование
            </h1>
            <p className="text-lg text-foreground/70">
              Проект: <span className="text-gold font-semibold">{projectName}</span>
            </p>
          </div>

          <Card className="bg-card border-gold/30">
            <CardHeader>
              <CardTitle className="text-2xl font-heading flex items-center gap-2">
                <Icon name="FileText" size={24} className="text-gold" />
                Заполните данные
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">ФИО</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Иванов Иван Иванович"
                    className="bg-background border-border focus:border-gold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 123-45-67"
                    className="bg-background border-border focus:border-gold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@mail.ru"
                    className="bg-background border-border focus:border-gold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Сумма инвестиций (₽)</Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    required
                    min="10000"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="100000"
                    className="bg-background border-border focus:border-gold"
                  />
                  <p className="text-xs text-foreground/50">Минимальная сумма: 10 000 ₽</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="term">Срок инвестирования</Label>
                  <select
                    id="term"
                    name="term"
                    value={formData.term}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:border-gold text-foreground"
                  >
                    <option value="3">3 месяца</option>
                    <option value="6">6 месяцев</option>
                    <option value="12">12 месяцев</option>
                    <option value="24">24 месяца</option>
                    <option value="36">36 месяцев</option>
                  </select>
                </div>

                <div className="bg-muted rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <Icon name="Info" size={16} className="text-gold" />
                    <span>После отправки заявки наш менеджер свяжется с вами для уточнения деталей</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gold hover:bg-gold-dark text-background font-semibold text-lg"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <Card className="bg-card/50 border-border">
              <CardContent className="pt-6 text-center">
                <Icon name="Shield" size={32} className="mx-auto mb-2 text-gold" />
                <p className="text-sm text-foreground/70">Безопасность данных</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border">
              <CardContent className="pt-6 text-center">
                <Icon name="Clock" size={32} className="mx-auto mb-2 text-gold" />
                <p className="text-sm text-foreground/70">Быстрое рассмотрение</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border">
              <CardContent className="pt-6 text-center">
                <Icon name="HeartHandshake" size={32} className="mx-auto mb-2 text-gold" />
                <p className="text-sm text-foreground/70">Поддержка 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;

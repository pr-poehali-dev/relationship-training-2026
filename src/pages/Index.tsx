import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-orange bg-clip-text text-transparent">
            МУЖЧИНА и ЖЕНЩИНА
          </h1>
          <div className="hidden md:flex gap-6">
            {['about', 'leader', 'reviews', 'register'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                {section === 'about' && 'О тренинге'}
                {section === 'leader' && 'Ведущий'}
                {section === 'reviews' && 'Отзывы'}
                {section === 'register' && 'Регистрация'}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-orange bg-clip-text text-transparent">
              МУЖЧИНА и ЖЕНЩИНА
            </h2>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-8 font-semibold">
              Тренинг отношений
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-lg">
                <Icon name="Calendar" className="text-gradient-purple" size={24} />
                <span className="font-semibold">9, 11, 12 января 2026</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Icon name="Clock" className="text-gradient-pink" size={24} />
                <span className="font-semibold">Начало: 19:00</span>
              </div>
            </div>
            <Button
              size="lg"
              onClick={() => window.open('https://t.me/Yurij5544', '_blank')}
              className="bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-orange hover:opacity-90 transition-opacity text-white font-semibold px-8 py-6 text-lg animate-scale-in"
            >
              Зарегистрироваться на тренинг
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
          <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto animate-scale-in">
            <img
              src="https://cdn.poehali.dev/projects/c127ec41-c6a9-48db-8943-34f6ef837612/files/af48acba-5148-425a-a5e4-ab92c99ce81d.jpg"
              alt="Тренинг отношений"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-gradient-purple to-gradient-pink bg-clip-text text-transparent">
            О тренинге
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: 'Heart',
                title: 'Глубокое понимание',
                description: 'Узнайте, как мужчины и женщины по-разному воспринимают мир и отношения',
              },
              {
                icon: 'Users',
                title: 'Практические навыки',
                description: 'Получите инструменты для построения гармоничных отношений',
              },
              {
                icon: 'Sparkles',
                title: 'Трансформация',
                description: 'Измените качество вашей личной жизни и взаимоотношений',
              },
              {
                icon: 'Target',
                title: 'Результаты',
                description: 'Конкретные техники и упражнения для применения уже на следующий день',
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-gradient-purple/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-gradient-purple/10 to-gradient-pink/10">
                    <Icon name={item.icon} className="text-gradient-purple" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="leader" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-gradient-pink to-gradient-orange bg-clip-text text-transparent">
            Ведущий тренинга
          </h3>
          <Card className="p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gradient-purple via-gradient-pink to-gradient-orange p-1 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/евгений3 (1).jpg" 
                  alt="Ведущий тренинга"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-3xl font-bold mb-4">Евгений Афанасьев</h4>
                <p className="text-lg text-foreground/80 mb-4">
                  Сертифицированный психолог и коуч по отношениям с 15-летним опытом работы
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-gradient-purple" size={20} />
                    <span>Провел более 200 тренингов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-gradient-purple" size={20} />
                    <span>Более 7000 участников по всей России</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-gradient-purple" size={20} />
                    <span>Автор тренинга Мужчина и Женщина</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-gradient-orange to-gradient-blue bg-clip-text text-transparent">
            Отзывы участников
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Анна',
                text: 'Тренинг полностью изменил мое восприятие отношений. Наконец-то я поняла, почему мы с мужем так по-разному реагируем на одни и те же ситуации!',
                rating: 5,
              },
              {
                name: 'Дмитрий',
                text: 'Практические инструменты, которые реально работают. Начал применять уже на следующий день, и результаты просто удивительные.',
                rating: 5,
              },
              {
                name: 'Елена',
                text: 'Очень душевная атмосфера и профессиональный подход. Рекомендую всем, кто хочет построить счастливые отношения.',
                rating: 5,
              },
            ].map((review, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-purple-50/30"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-gradient-orange fill-current" size={20} />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-gradient-purple">— {review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-orange bg-clip-text text-transparent">
            Регистрация
          </h3>
          <p className="text-center text-foreground/70 mb-8 text-lg">
            Заполните форму, и мы свяжемся с вами для подтверждения участия
          </p>
          <Card className="p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold">Ваше имя</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Введите ваше имя"
                  className="border-purple-200 focus:border-gradient-purple"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Телефон</label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="border-purple-200 focus:border-gradient-purple"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@email.com"
                  className="border-purple-200 focus:border-gradient-purple"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Комментарий (необязательно)</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Есть вопросы или пожелания?"
                  className="border-purple-200 focus:border-gradient-purple min-h-[100px]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-orange hover:opacity-90 transition-opacity text-white font-semibold text-lg"
              >
                Отправить заявку
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-orange text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4">МУЖЧИНА и ЖЕНЩИНА</h4>
          <p className="text-white/90 mb-6">Тренинг отношений • 9, 11, 12 января 2026</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:scale-110 transition-transform">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Icon name="Phone" size={24} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
          <p className="mt-8 text-white/70 text-sm">© 2026 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const aiTools = [
    {
      id: 1,
      name: 'ChatGPT',
      description: 'Универсальный ИИ-помощник для текстов, кода, переводов',
      category: 'Текст',
      isPopular: true,
      url: 'https://chat.openai.com',
      icon: '💬'
    },
    {
      id: 2,
      name: 'Claude',
      description: 'Продвинутый ИИ для анализа, рассуждений и творчества',
      category: 'Текст',
      isPopular: true,
      url: 'https://claude.ai',
      icon: '🤖'
    },
    {
      id: 3,
      name: 'MidJourney',
      description: 'Генерация изображений и арта высокого качества',
      category: 'Изображения',
      isPopular: true,
      url: 'https://midjourney.com',
      icon: '🎨'
    },
    {
      id: 4,
      name: 'Gemini',
      description: 'ИИ от Google для работы с текстом и изображениями',
      category: 'Мультимодал',
      isPopular: false,
      url: 'https://gemini.google.com',
      icon: '✨'
    },
    {
      id: 5,
      name: 'DeepSeek',
      description: 'Мощный ИИ для программирования и анализа',
      category: 'Код',
      isPopular: false,
      url: 'https://deepseek.ai',
      icon: '💻'
    },
    {
      id: 6,
      name: 'Grok',
      description: 'ИИ с доступом к актуальной информации',
      category: 'Текст',
      isPopular: false,
      url: 'https://grok.x.ai',
      icon: '🚀'
    },
    {
      id: 7,
      name: 'Stable Diffusion',
      description: 'Открытый ИИ для генерации изображений',
      category: 'Изображения',
      isPopular: false,
      url: 'https://stability.ai',
      icon: '🖼️'
    },
    {
      id: 8,
      name: 'GitHub Copilot',
      description: 'ИИ-ассистент программиста прямо в редакторе',
      category: 'Код',
      isPopular: true,
      url: 'https://github.com/features/copilot',
      icon: '👨‍💻'
    }
  ];

  const freelanceCategories = [
    {
      title: 'Копирайтинг',
      tools: ['ChatGPT', 'Claude', 'Gemini'],
      description: 'Создание продающих текстов, статей, постов',
      icon: '✍️'
    },
    {
      title: 'Дизайн',
      tools: ['MidJourney', 'Stable Diffusion'],
      description: 'Генерация логотипов, иллюстраций, концептов',
      icon: '🎨'
    },
    {
      title: 'Программирование',
      tools: ['GitHub Copilot', 'ChatGPT', 'DeepSeek'],
      description: 'Написание и отладка кода, создание приложений',
      icon: '💻'
    },
    {
      title: 'Переводы',
      tools: ['ChatGPT', 'Claude', 'Gemini'],
      description: 'Профессиональные переводы с контекстом',
      icon: '🌐'
    },
    {
      title: 'SEO',
      tools: ['ChatGPT', 'Claude', 'Grok'],
      description: 'Оптимизация контента, анализ конкурентов',
      icon: '📈'
    },
    {
      title: 'Анализ данных',
      tools: ['ChatGPT', 'Claude', 'Gemini'],
      description: 'Обработка и визуализация данных',
      icon: '📊'
    }
  ];

  const faqItems = [
    {
      question: 'Все инструменты действительно бесплатные?',
      answer: 'Большинство ИИ-инструментов имеют бесплатные тарифы с ограничениями. Мы собрали именно те, которые можно использовать без оплаты для старта.'
    },
    {
      question: 'Как выбрать подходящий ИИ для моей задачи?',
      answer: 'Используйте поиск или посмотрите раздел "Для фрилансеров" — там мы разбираем, какой ИИ лучше для каждого типа задач.'
    },
    {
      question: 'Нужна ли регистрация для использования?',
      answer: 'На нашей платформе регистрация не нужна. Но для использования самих ИИ-инструментов может потребоваться создание аккаунта на их сайтах.'
    },
    {
      question: 'Добавите ли новые инструменты?',
      answer: 'Конечно! Мы постоянно отслеживаем появление новых ИИ-инструментов и добавляем лучшие из них на платформу.'
    }
  ];

  const filteredTools = aiTools.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">AI Freelance Hub</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a href="#tools" className="text-slate-600 hover:text-indigo-600 transition-colors">Инструменты</a>
              <a href="#freelance" className="text-slate-600 hover:text-indigo-600 transition-colors">Фрилансеру</a>
              <a href="#faq" className="text-slate-600 hover:text-indigo-600 transition-colors">FAQ</a>
              <a href="#contacts" className="text-slate-600 hover:text-indigo-600 transition-colors">Контакты</a>
            </div>
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
              Начать бесплатно
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Все лучшие ИИ в одном месте —{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              бесплатно
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Единый инструмент для любого заказа на фрилансе. 
            Используйте лучшие ИИ для написания текстов, перевода, дизайна, кода и анализа.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input 
                placeholder="Найти ИИ-инструмент..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base border-slate-200 focus:border-indigo-500"
              />
            </div>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-8">
              Найти
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="text-sm">ChatGPT</Badge>
            <Badge variant="secondary" className="text-sm">Claude</Badge>
            <Badge variant="secondary" className="text-sm">MidJourney</Badge>
            <Badge variant="secondary" className="text-sm">Gemini</Badge>
            <Badge variant="secondary" className="text-sm">DeepSeek</Badge>
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section id="tools" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Популярные ИИ-инструменты</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Тщательно отобранная коллекция лучших ИИ-сервисов для решения любых задач
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool) => (
              <Card key={tool.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-2xl">{tool.icon}</div>
                    {tool.isPopular && (
                      <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-700">
                        Популярный
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg text-slate-900">{tool.name}</CardTitle>
                  <CardDescription className="text-sm text-slate-600 line-clamp-2">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {tool.category}
                    </Badge>
                    <Button 
                      size="sm" 
                      className="bg-indigo-600 hover:bg-indigo-700 text-xs px-4"
                      onClick={() => window.open(tool.url, '_blank')}
                    >
                      Использовать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Freelance Section */}
      <section id="freelance" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Для фрилансеров</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Узнайте, какие ИИ лучше всего подходят для вашей специализации
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freelanceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-2xl">{category.icon}</div>
                    <CardTitle className="text-xl text-slate-900">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Частые вопросы</h2>
            <p className="text-slate-600">
              Ответы на популярные вопросы о платформе
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
                <AccordionTrigger className="text-left text-slate-900 hover:text-indigo-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Начните использовать ИИ для своих проектов уже сегодня
          </h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Присоединяйтесь к тысячам фрилансеров, которые ускорили свою работу с помощью ИИ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-50 px-8">
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8">
              Смотреть инструменты
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="py-12 px-4 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">AI Freelance Hub</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Все лучшие ИИ-инструменты в одном месте для успешного фрилансинга
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">Платформа</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#tools" className="hover:text-white transition-colors">Инструменты</a></li>
                <li><a href="#freelance" className="hover:text-white transition-colors">Для фрилансеров</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">Сообщество</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="mailto:support@aifreelancehub.ru" className="hover:text-white transition-colors">support@aifreelancehub.ru</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обратная связь</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2024 AI Freelance Hub. Все права защищены.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Icon name="Twitter" className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Icon name="Github" className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Icon name="Linkedin" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
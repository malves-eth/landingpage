"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5618231966";
const whatsappUrl = `https://wa.me/${whatsappPhone}`;

function Header() {
  return (
    <header className="bg-gray-800 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <Image
            src="/images/logo-white.png"
            alt="Alves Cury Financial - Especialistas em Seguros de Vida nos Estados Unidos"
            width={1600}
            height={400}
            className="h-20 w-auto"
            priority
            loading="eager"
            sizes="(max-width: 768px) 200px, 300px"
          />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20" role="banner">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              SEGURO DE VIDA NOS<br />
              <span className="text-blue-700">ESTADOS UNIDOS</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" role="subtitle">
              Tudo que você precisa saber sobre proteção financeira:<br />
              <span className="font-medium">(Benefício em vida, preços, prazos, coberturas e mais)</span>
            </p>
          </header>
          
          
          <div className="call-to-action">
            <Button 
              size="lg" 
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 text-lg rounded-full"
            >
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Entrar em contato via WhatsApp para cotação de seguro de vida"
              >
                QUERO FAZER MEU SEGURO DE VIDA
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50" itemScope itemType="https://schema.org/HowTo">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" itemProp="name">
            Como Contratar Seu Seguro de Vida nos EUA em 4 Passos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" itemProp="description">
            Processo simples e rápido para brasileiros. Do primeiro contato até a aprovação da apólice.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center" itemScope itemType="https://schema.org/HowToStep">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">
                Consulta Gratuita
              </h3>
              <p className="text-gray-600" itemProp="text">
                Conversa inicial por WhatsApp para entender suas necessidades e situação atual nos EUA.
              </p>
            </div>
            
            <div className="text-center" itemScope itemType="https://schema.org/HowToStep">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">
                Cotação Personalizada
              </h3>
              <p className="text-gray-600" itemProp="text">
                Análise de perfil e cotação com as melhores seguradoras americanas para seu caso específico.
              </p>
            </div>
            
            <div className="text-center" itemScope itemType="https://schema.org/HowToStep">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">
                Aplicação e Exames
              </h3>
              <p className="text-gray-600" itemProp="text">
                Preenchimento da aplicação e exames médicos (se necessário). Tudo agendado para sua conveniência.
              </p>
            </div>
            
            <div className="text-center" itemScope itemType="https://schema.org/HowToStep">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">
                Aprovação e Ativação
              </h3>
              <p className="text-gray-600" itemProp="text">
                Aprovação da seguradora e ativação da apólice. Sua família protegida em 30-60 dias.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button 
              size="lg" 
              asChild
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 text-lg rounded-full"
            >
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Iniciar processo de contratação via WhatsApp"
              >
                INICIAR MINHA COTAÇÃO GRATUITA
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityGrowth() {
  return (
    <section className="py-20 bg-white" itemScope itemType="https://schema.org/Article">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900" itemProp="headline">
            POR QUE MAIS BRASILEIROS ESCOLHEM SEGURO DE VIDA NOS EUA
          </h2>
          
          <article className="space-y-8 text-left max-w-5xl mx-auto" itemProp="articleBody">
            <p className="text-gray-700 leading-relaxed text-lg">
              A proteção financeira familiar ganhou uma nova dimensão entre os brasileiros nos Estados Unidos. <strong itemProp="about">Mais de 70 mil famílias</strong> já descobriram os benefícios únicos que só o sistema americano oferece.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              No passado, muitos brasileiros hesitavam em contratar seguros de vida por desconhecimento das vantagens ou por experiências negativas no Brasil.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Atualmente, com <strong>orientação especializada em português</strong>, as famílias compreendem como garantir estabilidade financeira diante de situações inesperadas. Os produtos americanos oferecem benefícios únicos, incluindo <mark>acesso ao dinheiro ainda em vida</mark> para emergências médicas ou outras necessidades.
            </p>
            
            <aside className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500" role="complementary">
              <p className="text-gray-700 text-lg">
                Quer garantir proteção financeira para sua família? Fale conosco{" "}
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-medium hover:text-blue-800"
                  aria-label="Entrar em contato via WhatsApp"
                >
                  pelo WhatsApp!
                </a>
              </p>
            </aside>
          </article>
        </div>
      </div>
    </section>
  );
}



function Benefits() {
  const benefits = [
    {
      icon: "🛡️",
      title: "Proteção Garantida",
      description: "Sua família protegida financeiramente em caso de falecimento, com valores que podem chegar a milhões de dólares."
    },
    {
      icon: "💰",
      title: "Benefício em Vida",
      description: "Acesso ao dinheiro do seguro ainda em vida para emergências médicas ou outras necessidades urgentes."
    },
    {
      icon: "🌍",
      title: "Cobertura Mundial",
      description: "Proteção válida em qualquer lugar do mundo, incluindo o Brasil. Sua família recebe independente de onde você estiver."
    },
    {
      icon: "📋",
      title: "Sem Burocracia",
      description: "Processo simples em português. Cuidamos de toda a documentação e acompanhamos você do início ao fim."
    },
    {
      icon: "💵",
      title: "Livre de Impostos",
      description: "O benefício é pago diretamente aos beneficiários, livre de impostos federais americanos."
    },
    {
      icon: "⚡",
      title: "Aprovação Rápida",
      description: "Na maioria dos casos, aprovação em 30-60 dias. Alguns casos podem ser aprovados ainda mais rápido."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Por Que Escolher Nosso Seguro de Vida?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Benefícios únicos que só o sistema americano oferece para brasileiros
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Quer saber qual seguro é ideal para seu perfil?
          </p>
          <Button 
            size="lg" 
            asChild
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 text-lg rounded-full"
          >
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Solicitar análise personalizada via WhatsApp"
            >
              SOLICITAR ANÁLISE PERSONALIZADA
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "Estou fora de status, posso contratar um seguro de vida?",
      answer: "Sim, é possível contratar seguro de vida mesmo estando fora de status. Muitas seguradoras nos EUA oferecem produtos específicos para pessoas em diferentes situações migratórias."
    },
    {
      question: "O seguro de vida pode ser usado em vida?",
      answer: "Sim, alguns tipos de seguro de vida oferecem benefícios em vida, como acesso antecipado à cobertura em casos de doenças críticas, crônicas ou terminais, proporcionando suporte financeiro quando mais se precisa."
    },
    {
      question: "Quanto custa um seguro de vida nos EUA?",
      answer: "O custo varia conforme idade, saúde, cobertura desejada e tipo de seguro. Seguros temporários (Term) custam menos, enquanto seguros permanentes (como IUL) têm prêmios maiores mas oferecem mais benefícios. Fazemos cotações personalizadas gratuitas."
    },
    {
      question: "Quais são os tipos de seguro de vida disponíveis?",
      answer: "Os principais tipos são: Term Life (temporário, mais barato), Whole Life (permanente com valor garantido), Universal Life (flexível) e IUL (Indexed Universal Life, com potencial de crescimento baseado em índices)."
    },
    {
      question: "O seguro de vida nos EUA cobre falecimento no Brasil?",
      answer: "Sim, a maioria dos seguros de vida americanos oferece cobertura mundial, incluindo falecimento no Brasil. Isso é uma grande vantagem para brasileiros que mantêm vínculos com o país de origem."
    },
    {
      question: "Preciso fazer exame médico para contratar um seguro?",
      answer: "Depende da idade, valor da cobertura e histórico de saúde. Para coberturas menores ou idades mais jovens, muitas vezes não é necessário. Para valores maiores, podem ser solicitados exames médicos básicos."
    },
    {
      question: "Como meus beneficiários recebem o dinheiro do seguro?",
      answer: "Os beneficiários recebem o valor diretamente da seguradora após apresentar os documentos necessários (certidão de óbito, formulários da seguradora). O processo é direto e não passa por inventário, sendo livre de impostos federais."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes sobre Seguro de Vida nos EUA
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} itemScope itemType="https://schema.org/Question">
                <AccordionTrigger className="text-left" itemProp="name">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600" itemScope itemType="https://schema.org/Answer">
                  <div itemProp="text">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}


function WhatsAppFloating() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

function AboutConsultants() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Quem Somos
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Foto */}
              <div className="p-8 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <Image
                    src="/images/marcos-taciana.jpg"
                    alt="Marcos Alves e Taciana Cury - Fundadores e Especialistas Licenciados em Seguros de Vida nos EUA pela Alves Cury Financial"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 400px"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBobHBwf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwCdABmPfn..."
                  />
                </div>
              </div>
              
              {/* Texto */}
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Marcos Alves & Taciana Cury
                    </h3>
                    <p className="text-blue-600 font-medium">Fundadores da Alves Cury Financial</p>
                  </div>
                  
                  <div className="text-gray-600 space-y-4 leading-relaxed">
                    <p>
                      Marcos e Taciana são especialistas licenciados em seguros de vida com 4 anos de experiência no mercado americano. Juntos, fundaram a Alves Cury Financial com a missão de proteger financeiramente as famílias brasileiras nos Estados Unidos.
                    </p>
                    
                    <p>
                      Licenciados pelo governo americano para atender em todos os estados dos EUA, eles se dedicam a orientar famílias sobre as melhores estratégias de proteção financeira.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Image
              src="/images/logo-white.png"
              alt="Alves Cury Financial - Logo da empresa especializada em seguros de vida nos EUA"
              width={200}
              height={50}
              className="h-12 w-auto"
              loading="lazy"
              sizes="200px"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Especialistas em seguros de vida para a comunidade brasileira nos Estados Unidos. 
              Mais de 70 mil famílias protegidas com orientação em português.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contato</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">
                📱 WhatsApp: <a href={whatsappUrl} className="text-green-400 hover:text-green-300">(561) 823-1966</a>
              </p>
              <p className="text-gray-300">
                📧 Email: contato@alvescuryfinancial.com
              </p>
              <p className="text-gray-300">
                📷 Instagram: <a href="https://www.instagram.com/alvescury.financial" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300">@alvescury.financial</a>
              </p>
              <p className="text-gray-300">
                📍 Atendemos todos os estados dos EUA
              </p>
            </div>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Nossos Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Seguro de Vida Term Life</li>
              <li>• Seguro de Vida IUL</li>
              <li>• Benefícios em Vida</li>
              <li>• Planejamento Financeiro</li>
              <li>• Consultoria Especializada</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Alves Cury Financial. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>Licenciados nos EUA</span>
              <span>•</span>
              <span>Atendimento em Português</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <CommunityGrowth />
        <FAQ />
        <AboutConsultants />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
"use client";

import { Suspense } from "react";
import { MessageCircle, Shield, TrendingUp, Users, Clock, Award, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import LeadForm from "@/components/LeadForm";

const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "15618231966";
const whatsappUrl = `https://wa.me/${whatsappPhone}`;

function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
            AC
          </div>
          <span className="text-xl font-bold text-gray-900">Alves Cury Financial</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection("beneficios")} className="text-gray-600 hover:text-blue-700 transition-colors">
            Benefícios
          </button>
          <button onClick={() => scrollToSection("como-funciona")} className="text-gray-600 hover:text-blue-700 transition-colors">
            Como funciona
          </button>
          <button onClick={() => scrollToSection("depoimentos")} className="text-gray-600 hover:text-blue-700 transition-colors">
            Depoimentos
          </button>
          <button onClick={() => scrollToSection("faq")} className="text-gray-600 hover:text-blue-700 transition-colors">
            FAQ
          </button>
          <Button onClick={() => scrollToSection("cotacao")} className="bg-blue-700 hover:bg-blue-800">
            Quero minha cotação
          </Button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const scrollToForm = () => {
    const element = document.getElementById("cotacao");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-blue-700 bg-blue-100">
                Proteção e Crescimento
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Seguro de vida com{" "}
                <span className="text-blue-700">BENEFÍCIO EM VIDA</span> nos EUA
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Proteja seu presente e planeje seu futuro com soluções de proteção de renda e acumulação.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Cobertura para doenças críticas, crônicas e terminais</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Opções Term e IUL com foco em proteção + crescimento</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Atendimento consultivo 100% personalizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Cotação gratuita e sem compromisso</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToForm} className="bg-blue-700 hover:bg-blue-800">
                Solicitar cotação
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:block">
            <Suspense fallback={<div className="h-96 bg-gray-100 rounded-2xl animate-pulse" />}>
              <LeadForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Benefício em Vida",
      description: "Acesso a parte da cobertura em vida em condições elegíveis."
    },
    {
      icon: TrendingUp,
      title: "Proteção de Renda",
      description: "Segurança para sua família com coberturas que cabem no bolso."
    },
    {
      icon: Users,
      title: "Acumulação Inteligente",
      description: "IUL com foco no longo prazo e proteção ao principal (conforme apólice)."
    },
    {
      icon: Award,
      title: "Atendimento Consultivo",
      description: "Opções claras e alinhadas ao seu momento."
    },
    {
      icon: Clock,
      title: "Processo Rápido",
      description: "Cotação em minutos e emissão simplificada quando aplicável."
    },
    {
      icon: Phone,
      title: "Suporte Contínuo",
      description: "Acompanhamento pós-contratação."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a Alves Cury Financial
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas de proteção e crescimento patrimonial, 
            com foco na sua tranquilidade e objetivos de longo prazo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Análise rápida",
      description: "Perfil, necessidades e orçamento."
    },
    {
      number: "2", 
      title: "Cotações personalizadas",
      description: "Comparamos Term, IUL e riders de benefício em vida."
    },
    {
      number: "3",
      title: "Aplicação e aprovação",
      description: "Acompanhamos até a emissão."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-gray-600">
            Um processo simples e transparente para sua proteção
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const examples = [
    { coverage: "$250.000", price: "$35,20/mês" },
    { coverage: "$500.000", price: "$63,80/mês" },
    { coverage: "$800.000", price: "$98,12/mês" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Quanto custa?
          </h2>
          <p className="text-xl text-gray-600">
            Exemplos ilustrativos de proteção acessível
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {examples.map((example, index) => (
            <Card key={index} className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-700">
                  {example.coverage}
                </CardTitle>
                <CardDescription className="text-lg">
                  de cobertura
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold text-gray-900">
                  {example.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-sm text-gray-500 text-center mt-8 max-w-2xl mx-auto">
          *Exemplos ilustrativos. Não constituem oferta. Sujeito a elegibilidade e análise.
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Maria S.",
      location: "Florida",
      text: "Processo muito transparente e rápido. Em poucos dias já tinha minha apólice aprovada."
    },
    {
      name: "João P.",
      location: "California", 
      text: "Atendimento excepcional em português. Me senti seguro durante todo o processo."
    },
    {
      name: "Ana R.",
      location: "Texas",
      text: "Consegui uma cobertura excelente por um preço que cabe no meu orçamento."
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-700 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "O que é benefício em vida?",
      answer: "É a possibilidade de acessar parte da cobertura do seguro de vida ainda em vida, em casos de doenças críticas, crônicas ou terminais, proporcionando suporte financeiro quando mais se precisa."
    },
    {
      question: "Term x IUL: qual a diferença?",
      answer: "Term Life é temporário e focado apenas em proteção, com prêmios menores. IUL (Indexed Universal Life) combina proteção com acumulação de valor em dinheiro, oferecendo flexibilidade e potencial de crescimento."
    },
    {
      question: "Existe carência?",
      answer: "Para morte por doença, geralmente há carência de 2 anos. Para acidentes, a cobertura é imediata. Benefícios de doenças críticas podem ter carências específicas conforme a apólice."
    },
    {
      question: "Atendem em quais estados?",
      answer: "Atendemos na maioria dos estados americanos. Durante a cotação, verificamos a disponibilidade dos produtos para seu estado específico."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const scrollToForm = () => {
    const element = document.getElementById("cotacao");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Pronto(a) para proteger quem você ama?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Receba sua cotação gratuita agora.
        </p>
        <Button size="lg" variant="secondary" onClick={scrollToForm} className="text-blue-700">
          Solicitar Cotação Gratuita
        </Button>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                AC
              </div>
              <span className="text-lg font-bold">Alves Cury Financial</span>
            </div>
            <p className="text-gray-400 text-sm">
              Proteção e crescimento patrimonial para brasileiros nos EUA.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contato@alvescuryfinancial.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +1 (561) 823-1966
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></div>
              <div><a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a></div>
              <div><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></div>
              <div><a href="#faq" className="hover:text-white transition-colors">FAQ</a></div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">WhatsApp</h3>
            <Button variant="outline" size="sm" asChild className="text-gray-900">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Falar agora
              </a>
            </Button>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="text-center text-sm text-gray-400">
          <p>
            © {currentYear} Alves Cury Financial. Conteúdo informativo; verifique elegibilidade com agente licenciado.
          </p>
        </div>
      </div>
    </footer>
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

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
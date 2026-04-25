import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Heart, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  CheckCircle2, 
  Smartphone, 
  Sparkles, 
  ArrowRight,
  Star,
  Image as ImageIcon,
  MessageSquare,
  Lock,
  Shield,
  MessageCircle,
  PlayCircle,
  Check
} from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Base Components ---
const SectionHeading = ({ title, subtitle, light = false }: { title: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-8 md:mb-12 px-4 relative z-10 max-w-3xl mx-auto">
    <h2 className={`text-[28px] leading-[1.1] md:text-5xl font-black tracking-tight ${light ? 'text-white' : 'text-slate-900'} mb-3 md:mb-4`}>{title}</h2>
    {subtitle && <p className={`text-base md:text-xl font-medium ${light ? 'text-white/80' : 'text-slate-600'}`}>{subtitle}</p>}
  </div>
);

const CTAButton = ({ text, href = "#oferta", className = "" }: { text: string, href?: string, className?: string }) => (
  <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }} className="flex justify-center w-full">
    <a 
      href={href} 
      className={`inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-base md:text-xl px-6 py-4 md:px-10 md:py-5 rounded-full font-black transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] uppercase tracking-wide w-full sm:w-auto text-center ${className}`}
    >
      <span className="truncate whitespace-normal leading-tight">{text}</span>
      <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 shrink-0" />
    </a>
  </motion.div>
);

const UrgencyHeader = () => (
  <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-[10px] md:text-xs lg:text-sm font-bold text-center py-2.5 z-50 shadow-md">
    <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto px-4">
      <Clock className="w-4 h-4 animate-pulse shrink-0" />
      <span className="tracking-wide uppercase">ÚLTIMAS HORAS DA OFERTA: LEVE TODO O MATERIAL POR APENAS <span className="text-yellow-300 font-black">R$9,90</span></span>
    </div>
  </div>
);

// --- 1. Hero Section ---
const Hero = () => (
  <section className="pt-20 pb-16 md:pt-24 md:pb-20 px-4 bg-[#FAFAF7]">
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
      <div className="mb-6 flex items-center justify-center text-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider max-w-full leading-tight">
        <Star className="w-4 h-4 shrink-0" /> <span className="truncate whitespace-normal">Para mães cristãs com filhos de 4 a 10 anos</span>
      </div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight sm:leading-[1.1] mb-5 md:mb-6 text-slate-900 max-w-4xl tracking-tight"
      >
        Ensine <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">valores bíblicos</span> ao seu filho em poucos minutos por dia
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 mb-8 sm:mb-10 max-w-3xl font-medium px-2"
      >
        Histórias Bíblicas Ilustradas em 3D para criar momentos de fé, conversa e conexão em casa, mesmo que você não saiba por onde começar.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative mb-12 sm:mb-16 w-full max-w-2xl px-2 sm:px-0"
      >
        <img 
          src="https://i.pinimg.com/736x/ae/fd/cd/aefdcd3766de065284eec5bb4ca77288.jpg" 
          alt="Material Completo Histórias Bíblicas" 
          className="rounded-3xl sm:rounded-[2rem] shadow-2xl border-4 sm:border-8 border-white w-full h-auto relative z-0"
          referrerPolicy="no-referrer"
        />
        
        {/* Price Tag Hero */}
        <div className="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-6 bg-slate-900 text-white p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl transform sm:rotate-3 border-2 sm:border-4 border-[#FAFAF7] z-10">
          <p className="text-[10px] sm:text-xs text-slate-400 font-bold line-through mb-1 text-center">De R$67</p>
          <p className="font-black text-xl sm:text-2xl text-green-400 leading-none">R$9,90</p>
        </div>
      </motion.div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-col items-center w-full max-w-md mx-auto">
        <CTAButton text="QUERO COMEÇAR HOJE" href="#oferta" className="w-full" />
        
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] sm:text-xs text-slate-500 font-semibold w-full">
          <span className="flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5 text-green-500 shrink-0" /> Acesso imediato</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-green-500 shrink-0" /> Compra segura</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 text-green-500 shrink-0" /> Material digital</span>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- 3. Preview do material (Carousel 1) ---
const PreviewCarousel1 = () => {
  const row1 = [
    "https://i.pinimg.com/736x/b8/1f/bd/b81fbdaab159800bbaea5a456681601a.jpg",
    "https://i.pinimg.com/736x/7b/88/91/7b8891afd667ca889e48f99450a7c200.jpg",
    "https://i.pinimg.com/736x/ef/af/c3/efafc30cc8992fd3724ff9b241504bac.jpg",
    "https://i.pinimg.com/736x/c0/ee/b7/c0eeb7ea3fe60fd27733ec6fd8679079.jpg",
    "https://i.pinimg.com/736x/87/5e/6f/875e6f8e962276d32f902b7ca2aa33d6.jpg",
    "https://i.pinimg.com/736x/43/6b/19/436b19bf51acda50511f2fa3ea2f959b.jpg",
    "https://i.pinimg.com/736x/d9/81/e1/d981e18b768931e92ecf05c80ac481c8.jpg"
  ];
  
  const row2 = [
    "https://i.pinimg.com/736x/a7/64/dc/a764dcc8020a9e3191928b409a607391.jpg",
    "https://i.pinimg.com/736x/01/f5/87/01f587f9fa42e85485b3f0b9d19298b6.jpg",
    "https://i.pinimg.com/736x/90/5f/3d/905f3daf2b3002de2d2f5ea0788eeaaa.jpg",
    "https://i.pinimg.com/736x/f6/f5/4f/f6f54fcc9b49b9c946d0504e92a35c57.jpg",
    "https://i.pinimg.com/736x/88/81/94/888194fa2ee0fae3ed15daad2b565ab9.jpg",
    "https://i.pinimg.com/736x/90/5d/9c/905d9c25e0c464bca43e15f41e600a47.jpg",
    "https://i.pinimg.com/736x/8c/8d/d1/8c8dd157c0d2361bf43a14021e2ac51a.jpg"
  ];

  return (
    <section id="preview" className="pt-16 md:pt-24 pb-10 md:pb-12 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 mb-8 md:mb-12 text-center">
        <SectionHeading 
          title="Veja por dentro do material" 
          subtitle="Páginas ilustradas, histórias, atividades e perguntas prontas para você usar com seu filho."
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-6 w-full relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="flex overflow-hidden relative w-full">
          <motion.div
            className="flex gap-4 md:gap-6 min-w-max px-2 md:px-3 py-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            style={{ willChange: "transform" }}
          >
            {[...row1, ...row1].map((img, i) => (
              <img 
                key={i} 
                src={img} 
                alt="Preview" 
                className="h-48 sm:h-64 md:h-80 w-auto rounded-2xl shadow-md border-2 border-slate-100 shrink-0" 
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            ))}
          </motion.div>
        </div>

        <div className="flex overflow-hidden relative w-full">
          <motion.div
            className="flex gap-4 md:gap-6 min-w-max px-2 md:px-3 py-2"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            style={{ willChange: "transform" }}
          >
            {[...row2, ...row2].map((img, i) => (
              <img 
                key={i} 
                src={img} 
                alt="Preview" 
                className="h-48 sm:h-64 md:h-80 w-auto rounded-2xl shadow-md border-2 border-slate-100 shrink-0" 
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- 3.1. Preview do material (Carousel 2) ---
const PreviewCarousel2 = () => {
  const images = [
    "https://i.pinimg.com/736x/d7/7e/49/d77e49da53f4dd533aaffd031200df2e.jpg",
    "https://i.pinimg.com/736x/17/be/59/17be5933394073d17dcfa599dccb9abf.jpg",
    "https://i.pinimg.com/736x/03/8b/a8/038ba8c2621bbd48dd104eb40c763387.jpg",
    "https://i.pinimg.com/736x/62/ee/02/62ee02d345e1ca2f14b7d032833df6b2.jpg",
    "https://i.pinimg.com/736x/6e/75/0b/6e750bcc226f839f04c54ef673a1f008.jpg",
    "https://i.pinimg.com/736x/5a/71/01/5a71014b1d0e638d85a86c5be2274174.jpg",
    "https://i.pinimg.com/736x/bd/4b/b3/bd4bb3f711aa992d27128bb8c151784d.jpg"
  ];

  return (
    <section className="pb-16 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 mb-8 md:mb-12 text-center">
        <SectionHeading 
          title="Visual criado para prender a atenção em segundos" 
          subtitle="Ilustrações encantadoras e linguagem simples que competem de frente com as telas e trazem a Bíblia para a realidade do seu filho."
        />
      </div>
      <div className="flex overflow-hidden relative w-full mb-8 md:mb-12">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 md:gap-8 min-w-max px-4 py-4 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }}
          style={{ willChange: "transform" }}
        >
          {[...images, ...images].map((img, i) => (
            <img 
              key={i} 
              src={img} 
              alt="Conteúdo em tamanho real" 
              className="w-[85vw] md:w-auto h-auto md:max-h-[85vh] max-w-none shrink-0 rounded-2xl shadow-xl border border-slate-200" 
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          ))}
        </motion.div>
      </div>
      
      <div className="max-w-3xl mx-auto text-center px-4">
        <p className="text-lg md:text-xl font-medium text-slate-700 mb-10">
          Um material visual, simples e envolvente para transformar o aprendizado bíblico em um momento especial dentro de casa.
        </p>
        <CTAButton text="QUERO ACESSAR O MATERIAL" href="#oferta" />
      </div>
    </section>
  );
};

// --- 4. Dor / Identificação ---
const PainSection = () => (
  <section className="py-16 md:py-28 bg-[#FAFAF7] px-4">
    <div className="max-w-3xl mx-auto">
      <SectionHeading title="Você sente que deveria ensinar mais sobre Deus ao seu filho, mas a rotina sempre empurra isso para depois?" />
      <div className="space-y-5 md:space-y-6 text-base md:text-xl text-slate-600 font-medium leading-relaxed bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
        <p>O dia passa rápido. Você trabalha, cuida da casa, resolve mil coisas e, quando percebe, mais uma noite chegou sem aquele momento de fé que você gostaria de viver com seu filho.</p>
        <p>E junto vem aquela sensação:<br/><strong className="text-slate-800">“Eu queria fazer mais, mas não sei por onde começar.”</strong></p>
        <p>A verdade é que muitas mães cristãs sentem isso. Não por falta de amor. Mas por falta de tempo, direção e um material simples para conduzir esse momento.</p>
      </div>
    </div>
  </section>
);

// --- 5. Urgência / Consequência ---
const ConsequenceSection = () => (
  <section className="py-16 md:py-28 bg-slate-900 text-white px-4 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-500/10 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <SectionHeading title="Seu filho já está aprendendo valores todos os dias" light />
      <div className="space-y-5 md:space-y-6 text-base md:text-xl text-slate-300 font-medium leading-relaxed mb-8 md:mb-10">
        <p>Na escola, nos desenhos, nos vídeos e nas conversas, a mente dele está sendo formada o tempo todo.</p>
        <p>A pergunta é: quais valores estão ocupando espaço no coração dele?</p>
        <p>Você não precisa esperar uma fase perfeita para começar. Poucos minutos por dia já podem plantar sementes de fé, amor e obediência que ele vai levar para a vida.</p>
      </div>
      <div className="bg-orange-500 text-white p-5 md:p-6 rounded-2xl font-black text-lg md:text-2xl inline-block shadow-lg">
        O melhor momento para começar é agora.
      </div>
    </div>
  </section>
);

// --- 6. Solução ---
const SolutionSection = () => (
  <section className="py-16 md:py-28 bg-orange-50 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <SectionHeading title="Tudo pronto para você ensinar a Bíblia com leveza" />
      <div className="space-y-5 md:space-y-6 text-base md:text-xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto mb-10 md:mb-12">
        <p>O Histórias Bíblicas foi criado para ajudar mães cristãs a viverem momentos bíblicos com os filhos sem complicação.</p>
        <p className="font-bold text-lg md:text-xl text-slate-900 space-y-2">
          <span className="block">Você não precisa preparar aula.</span>
          <span className="block">Não precisa saber explicar tudo sozinha.</span>
          <span className="block">Não precisa improvisar.</span>
        </p>
        <p>É só abrir o material, escolher uma história, ler com seu filho e usar as perguntas e atividades para transformá-la em uma conversa especial.</p>
      </div>
      <CTAButton text="QUERO ESSA PRATICIDADE" href="#oferta" />
    </div>
  </section>
);

// --- 7. Como funciona ---
const HowItWorks = () => {
  const steps = [
    { num: "1", title: "Escolha uma história", text: "Abra no celular, tablet ou imprima. Escolha uma das histórias bíblicas ilustradas." },
    { num: "2", title: "Leia com seu filho", text: "Textos curtos, linguagem simples e ilustrações que prendem a atenção da criança." },
    { num: "3", title: "Converse sobre a lição", text: "Use as perguntas guiadas para transformar a história em uma conversa de fé." },
    { num: "4", title: "Reforce com atividades", text: "Desenhos e atividades ajudam seu filho a fixar o valor bíblico de forma leve." },
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="Como criar esse momento em 4 passos simples" 
          subtitle="Um caminho pronto para mães ocupadas que querem ensinar valores bíblicos em casa."
        />
        
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mt-8 md:mt-12">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-3 md:gap-4 bg-[#FAFAF7] p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group hover:border-orange-200 transition-colors">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl shadow-lg shadow-orange-500/30">
                {step.num}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-1 md:mb-2">Passo {step.num}: {step.title}</h3>
                <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 8. O que você recebe ---
const Deliverables = () => {
  const items = [
    { icon: PlayCircle, title: "Histórias Bíblicas Ilustradas em 3D", desc: "Visual encantador para prender a atenção da criança e tornar a Bíblia mais próxima da realidade dela." },
    { icon: MessageSquare, title: "Linguagem simples para crianças", desc: "Textos leves, curtos e fáceis de entender, pensados para crianças de 4 a 10 anos." },
    { icon: MessageCircle, title: "Perguntas guiadas para os pais", desc: "Você não trava sem saber o que falar. O material já traz perguntas para conduzir a conversa." },
    { icon: Sparkles, title: "Moral da história", desc: "Cada história termina com uma lição bíblica clara para aplicar no dia a dia." },
    { icon: CheckCircle2, title: "Atividades práticas", desc: "Atividades simples para reforçar o aprendizado e deixar o momento mais divertido." },
    { icon: ImageIcon, title: "Desenhos para colorir", desc: "Seu filho continua envolvido com a história mesmo depois da leitura." },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading 
          title="Tudo o que você precisa para começar hoje" 
          light
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
          {items.map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <item.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 leading-snug">{item.title}</h3>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 md:mt-16 text-center">
          <CTAButton text="QUERO TER ACESSO A TUDO ISSO" />
        </div>
      </div>
    </section>
  );
};

// --- 9. Transformação ---
const Transformation = () => {
  const cards = [
    { icon: Heart, title: "Menos culpa", text: "Você sente a paz de estar ensinando o que realmente importa." },
    { icon: Smartphone, title: "Menos tela", text: "O tempo de distração começa a dar espaço para momentos com propósito." },
    { icon: MessageCircle, title: "Mais conexão", text: "Você cria conversas, presença e memórias que ficam no coração." },
    { icon: BookOpen, title: "Mais fé na rotina", text: "A Bíblia deixa de ser algo distante e passa a fazer parte do dia a dia da família." },
    { icon: ShieldCheck, title: "Mais segurança para ensinar", text: "Você tem um caminho pronto para conduzir esse momento sem complicação." },
    { icon: Star, title: "Mais valores plantados", text: "Seu filho aprende princípios bíblicos que vão acompanhá-lo por toda a vida." },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAFAF7] px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="O que muda dentro da sua casa" />
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mt-8 md:mt-12">
          {cards.map((card, i) => (
            <div key={i} className="bg-white p-5 md:p-8 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4 md:gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                <card.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 10. Bônus ---
const Bonus = () => {
  const bonuses = [
    { title: "Desenhos Bíblicos para Colorir", text: "Mais criatividade e envolvimento enquanto seu filho aprende.", img: "https://i.pinimg.com/736x/af/70/b3/af70b37bb79dda24ec11496391e9c167.jpg", oldPrice: "De R$29,90" },
    { title: "Guia de Leitura em Família", text: "Um roteiro simples para manter constância e criar o hábito bíblico em casa.", img: "https://i.pinimg.com/736x/00/82/b2/0082b27088df4a1a15aa3273854dadea.jpg", oldPrice: "De R$47,00" },
    { title: "Certificado de Conclusão", text: "Para seu filho sentir orgulho da jornada de fé que está vivendo.", img: "https://i.pinimg.com/736x/ed/00/af/ed00afed8dc5f9ea583f15b7797f09a7.jpg", oldPrice: "De R$9,90" },
    { title: "Grupo VIP de Mães", text: "Um espaço para troca, apoio e incentivo com outras mães no mesmo propósito.", img: "https://i.pinimg.com/736x/29/0a/04/290a0442e95e30109e59e0a913663af1.jpg", oldPrice: "De R$97,00" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Além das histórias, você também recebe bônus especiais" 
          subtitle="Ferramentas extras para tornar esse momento ainda mais leve, completo e divertido."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-8 md:mt-12">
          {bonuses.map((bonus, i) => (
            <div key={i} className="bg-[#FAFAF7] rounded-[2rem] p-5 md:p-6 border border-slate-100 flex flex-col items-center text-center h-full shadow-sm">
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-2xl shadow-md border border-slate-200">
                <img src={bonus.img} alt={bonus.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Bônus
                </div>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{bonus.title}</h3>
              <p className="text-slate-600 text-sm mb-6 font-medium leading-relaxed">{bonus.text}</p>
              
              <div className="mt-auto flex flex-col items-center bg-white w-full py-3 rounded-xl border border-slate-100 shadow-sm">
                <span className="text-xs font-bold text-slate-400 line-through">{bonus.oldPrice}</span>
                <span className="text-lg font-black text-green-500 uppercase tracking-widest mt-0.5">GRÁTIS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 11. Prova Social ---
const Testimonials = () => {
  const tests = [
    { 
      text: "Depois das histórias, a gente conversa sobre Deus de um jeito que nunca acontecia antes.",
      author: "Nathalia, mãe da Maria, 6 anos",
      img: "https://api.dicebear.com/7.x/notionists/svg?seed=Nathalia&backgroundColor=ffedd5"
    },
    { 
      text: "Meu filho começou a pedir esse momento todos os dias.",
      author: "Juliana, mãe do Pedro, 5 anos",
      img: "https://api.dicebear.com/7.x/notionists/svg?seed=Juliana&backgroundColor=ffedd5"
    },
    { 
      text: "Eu não sabia como ensinar a Bíblia para minha filha. Agora ficou simples.",
      author: "Camila, mãe da Alice, 7 anos",
      img: "https://api.dicebear.com/7.x/notionists/svg?seed=Camila&backgroundColor=ffedd5"
    },
    { 
      text: "Em 15 minutos, conseguimos criar um momento de fé que mudou o clima da nossa casa.",
      author: "Fernanda, mãe do Davi, 8 anos",
      img: "https://api.dicebear.com/7.x/notionists/svg?seed=Fernanda&backgroundColor=ffedd5"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Lares que já começaram esse momento" 
          subtitle="Veja o que mães cristãs estão dizendo depois de usar o material em casa."
          light
        />
        
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto mt-8 md:mt-12">
          {tests.map((t, i) => (
            <div key={i} className="bg-white/10 p-6 md:p-8 rounded-[2rem] border border-white/10 relative flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-orange-400 mb-4 md:mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 md:w-5 md:h-5 fill-current" />)}
                </div>
                <p className="text-base md:text-xl font-medium leading-relaxed italic mb-6 md:mb-8">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.author} className="w-12 h-12 rounded-full border-2 border-white/20 bg-white" />
                <span className="font-bold text-sm text-white/90">{t.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 12 & 13. Oferta & Garantia ---
const CardCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(7 * 60 + 49);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="absolute top-0 left-0 w-full bg-red-600 text-white py-2 text-center text-[10px] sm:text-xs font-bold shadow-md z-20 uppercase tracking-wide">
      A OFERTA ACABA EM: <span className="text-yellow-300 ml-1 font-black">{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
    </div>
  );
};

const OfferSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAFAF7] px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading 
          title="Comece hoje a ensinar valores bíblicos ao seu filho" 
          subtitle="Por apenas R$9,90, você leva um material completo, visual e pronto para criar momentos bíblicos em família."
        />
        
        <div id="oferta" className="max-w-xl mx-auto bg-slate-900 rounded-3xl md:rounded-[3rem] shadow-[0_0_60px_rgba(34,197,94,0.35)] border-2 border-green-500/50 overflow-hidden relative mt-8 md:mt-12 scroll-mt-10 md:scroll-mt-11 p-6 pt-14 sm:p-8 sm:pt-16 md:p-12 md:pt-20 text-center text-white">
          <CardCountdown />
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            
            <img 
              src="https://i.pinimg.com/736x/2f/b4/8a/2fb48a9818f0dbcbb70a7843ae60644f.jpg" 
              alt="Histórias Bíblicas para Crianças" 
              className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] mb-6 md:mb-8 rounded-[2rem] shadow-xl hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6 md:mb-8 tracking-tight">Material completo para ensinar valores bíblicos ao seu filho</h3>
            
            <p className="text-slate-400 line-through text-lg sm:text-xl font-bold mb-1">De R$67</p>
            
            <div className="flex items-center justify-center text-green-400 mb-1">
              <span className="text-base sm:text-lg font-black uppercase tracking-wider">Por apenas</span>
            </div>
            <div className="flex justify-center items-start text-green-400 mb-8 sm:mb-10 gap-2 sm:gap-3">
              <span className="text-3xl sm:text-5xl font-black mt-3 sm:mt-4">R$</span>
              <span className="text-8xl sm:text-[9rem] font-black leading-none drop-shadow-xl">9</span>
              <span className="text-3xl sm:text-5xl font-black mt-3 sm:mt-4">,90</span>
            </div>
            
            <div className="w-full max-w-sm sm:max-w-md mx-auto mb-8 md:mb-10">
              <CTAButton text="GARANTIR ACESSO" href="https://pay.wiapy.com/zm9woP1NAS" className="w-full shadow-[0_0_40px_rgba(34,197,94,0.3)] !py-4 sm:!py-5 !text-base sm:!text-xl" />

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 gap-y-2 text-[10px] sm:text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5 text-green-400 shrink-0" /> Pagamento único</span>
                <span className="text-slate-600 hidden sm:inline-block">•</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-green-400 shrink-0" /> Acesso imediato</span>
                <span className="text-slate-600 hidden sm:inline-block">•</span>
                <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 text-green-400 shrink-0" /> Material digital</span>
              </div>
            </div>

            <div className="w-full h-px bg-slate-800 mb-8 md:mb-10" />

            <div className="w-full max-w-sm mx-auto text-left">
              <p className="text-slate-400 font-bold mb-5 text-center text-xs sm:text-sm tracking-widest uppercase">O que você vai receber:</p>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Histórias bíblicas ilustradas em 3D",
                  "Perguntas guiadas para os pais",
                  "Atividades práticas",
                  "Desenhos para colorir",
                  "Guia de leitura em família",
                  "Certificado de conclusão",
                  "Grupo VIP de mães",
                  "Acesso vitalício"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white/5 p-3 md:p-4 rounded-xl border border-white/10 font-bold text-slate-200 text-xs sm:text-sm md:text-base hover:bg-white/10 transition-colors">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-8 md:mt-12 bg-white p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[3rem] border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left relative overflow-hidden">
          <div className="absolute -right-12 -top-12 text-slate-50">
            <Shield className="w-80 h-80" />
          </div>
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-white shadow-lg">
            <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <div className="z-10 relative w-full">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">Teste sem risco por 7 dias</h3>
            <p className="text-slate-600 leading-relaxed mb-6 font-medium text-sm sm:text-base md:text-lg">Baixe o material, escolha uma história e use com seu filho.<br/>Se você sentir que o material não ajudou a criar um momento mais leve, prático e especial em família, é só pedir reembolso dentro de 7 dias.<br/><br/>Você recebe 100% do valor de volta.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <span className="bg-slate-50 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-2 border border-slate-200">
                <Check className="w-4 h-4 text-green-500" /> Garantia de 7 dias
              </span>
              <span className="bg-slate-50 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-2 border border-slate-200">
                <Check className="w-4 h-4 text-green-500" /> Compra segura
              </span>
              <span className="bg-slate-50 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-2 border border-slate-200">
                <Check className="w-4 h-4 text-green-500" /> Reembolso fácil
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- 14. FAQ ---
const FAQ = () => {
  const faqs = [
    { q: "Meu filho não gosta de ler. Vai funcionar?", a: "Sim. As ilustrações em 3D ajudam a prender a atenção, e as perguntas transformam a leitura em uma conversa mais leve e participativa." },
    { q: "Eu não tenho tempo. Como vou usar?", a: "O material foi feito para rotinas corridas. Em poucos minutos por dia, você consegue escolher uma história, ler e conversar com seu filho." },
    { q: "Eu não sei explicar a Bíblia. Serve para mim?", a: "Sim. O material foi criado justamente para mães que querem ensinar, mas precisam de um caminho simples e guiado." },
    { q: "É físico ou digital?", a: "É um material digital com acesso imediato. Você pode usar no celular, tablet, computador ou imprimir." },
    { q: "Posso imprimir?", a: "Sim. Você pode imprimir histórias, atividades e desenhos para usar como preferir." },
    { q: "Serve para qual idade?", a: "Foi pensado principalmente para crianças de 4 a 10 anos." },
    { q: "Tem garantia?", a: "Sim. Você tem 7 dias de garantia para testar sem risco." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Talvez você esteja pensando..." />
        <div className="space-y-3 md:space-y-4 mt-8 md:mt-10">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-[#FAFAF7]">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-base md:text-lg text-slate-800 hover:text-orange-500 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${openIndex === i ? 'rotate-180 text-orange-500' : 'text-slate-400'}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                    <p className="p-6 pt-0 text-slate-600 font-medium leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 15. CTA Final ---
const FinalCTA = () => (
  <section className="py-16 md:py-32 bg-slate-900 relative overflow-hidden px-4">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0,transparent_100%)] pointer-events-none" />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight leading-tight">
        Seu filho está crescendo. Os valores dele também.
      </h2>
      <p className="text-lg md:text-2xl text-slate-300 font-medium mb-8 md:mb-10">
        Comece hoje a plantar fé, amor e princípios bíblicos no coração do seu filho.
      </p>
      
      <div className="bg-orange-500 text-white p-5 md:p-8 rounded-3xl mb-10 md:mb-12 font-black text-lg md:text-2xl inline-block shadow-2xl border-4 border-orange-400">
        Poucos minutos por dia podem criar memórias que ele vai levar para a vida inteira.
      </div>

      <div>
        <CTAButton text="QUERO COMEÇAR HOJE" href="#oferta" className="text-lg md:text-2xl !px-12 !py-6" />
      </div>
    </div>
  </section>
);

// --- Footer ---
const Footer = () => (
  <footer className="py-12 bg-white border-t border-slate-100 pb-28 md:pb-12">
    <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm font-medium">
      <div className="flex items-center justify-center gap-2 mb-4 text-slate-800">
        <BookOpen className="w-6 h-6 text-orange-500" />
        <span className="font-black text-xl tracking-tight">Histórias Bíblicas</span>
      </div>
      <p className="mb-4">© 2026 Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans text-slate-800 selection:bg-orange-500/30">
      <UrgencyHeader />
      <Hero />
      <PreviewCarousel1 />
      <PreviewCarousel2 />
      <PainSection />
      <ConsequenceSection />
      <SolutionSection />
      <HowItWorks />
      <Deliverables />
      <Transformation />
      <Bonus />
      <Testimonials />
      <OfferSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

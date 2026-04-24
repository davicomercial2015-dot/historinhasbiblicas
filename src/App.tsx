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
  Smile,
  Check
} from "lucide-react";
import React, { useState } from "react";

// --- Base Components ---
const SectionHeading = ({ title, subtitle, light = false }: { title: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-10 px-4 relative z-10 max-w-3xl mx-auto">
    <h2 className={`text-3xl md:text-5xl font-black tracking-tight leading-tight ${light ? 'text-white' : 'text-slate-900'} mb-4`}>{title}</h2>
    {subtitle && <p className={`text-lg md:text-xl font-medium ${light ? 'text-white/80' : 'text-slate-600'}`}>{subtitle}</p>}
  </div>
);

const CTAButton = ({ text, href = "#oferta", className = "" }: { text: string, href?: string, className?: string }) => (
  <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }}>
    <a 
      href={href} 
      className={`inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-[15px] sm:text-lg md:text-xl px-6 py-4 md:px-10 md:py-5 rounded-full font-black transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] uppercase tracking-wide w-full sm:w-auto ${className}`}
    >
      {text}
      <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 shrink-0" />
    </a>
  </motion.div>
);

const UrgencyHeader = () => (
  <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-[10px] md:text-xs lg:text-sm font-bold text-center py-2.5 z-50 shadow-md">
    <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto px-4">
      <Clock className="w-4 h-4 animate-pulse shrink-0" />
      <span className="tracking-wide uppercase">ÚLTIMAS HORAS DA OFERTA: LEVE TODO O MATERIAL POR APENAS <span className="text-yellow-300 font-black">R$ 19,90</span></span>
    </div>
  </div>
);

// --- 1. Hero Section ---
const Hero = () => (
  <section className="pt-24 pb-20 px-4 bg-[#FAFAF7]">
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
      <div className="mb-6 flex items-center justify-center text-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider max-w-full leading-tight">
        <Star className="w-4 h-4 shrink-0" /> <span className="truncate whitespace-normal">Para mães que desejam fortalecer a fé dos filhos</span>
      </div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight sm:leading-[1.1] mb-6 text-slate-900 max-w-4xl tracking-tight"
      >
        O mundo já está ensinando o seu filho. <span className="text-orange-500 block mt-1">O que você está ensinando a ele?</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 mb-8 sm:mb-10 max-w-3xl font-medium px-2"
      >
        Em apenas 15 minutos por dia, você pode criar momentos bíblicos especiais em casa e ensinar valores eternos ao seu filho com um material pronto, visual e fácil de usar.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative mb-12 sm:mb-16 w-full max-w-2xl px-2 sm:px-0"
      >
        <div className="absolute -top-4 -left-4 bg-orange-500 text-white px-4 py-2 rounded-xl font-bold transform -rotate-6 shadow-lg z-10 text-sm">
          Material Completo
        </div>
        <img 
          src="https://i.pinimg.com/736x/ae/fd/cd/aefdcd3766de065284eec5bb4ca77288.jpg" 
          alt="Material Completo Histórias Bíblicas" 
          className="rounded-3xl sm:rounded-[2rem] shadow-2xl border-4 sm:border-8 border-white w-full h-auto relative z-0"
          referrerPolicy="no-referrer"
        />
        
        {/* Price Tag Hero */}
        <div className="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-6 bg-slate-900 text-white p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl transform sm:rotate-3 border-2 sm:border-4 border-[#FAFAF7] z-10">
          <p className="text-[10px] sm:text-xs text-slate-400 font-bold line-through mb-1 text-center">De R$ 67</p>
          <p className="font-black text-xl sm:text-2xl text-green-400 leading-none">R$ 19,90</p>
        </div>
      </motion.div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-col items-center w-full max-w-md mx-auto">
        <CTAButton text="QUERO PROTEGER MEU FILHO AGORA" className="w-full" />
        <p className="mt-3 text-sm text-slate-500 font-medium italic">Comece hoje mesmo, sem complicação.</p>
        
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] sm:text-xs text-slate-500 font-semibold w-full">
          <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-green-500 shrink-0" /> Compra Segura</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5 text-green-500 shrink-0" /> Acesso imediato</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-green-500 shrink-0" /> Feito para mães</span>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- 2. Pain Section ---
const PainSection = () => (
  <section className="py-20 md:py-28 bg-white px-4">
    <div className="max-w-3xl mx-auto">
      <SectionHeading title="A rotina engole suas intenções todos os dias, não é?" />
      <div className="space-y-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
        <p>O cansaço bate. Quando você vê, mais um dia terminou e a Bíblia continuou fechada.</p>
        <p>Aí vem aquela culpa silenciosa. O medo de estar deixando para depois algo que você sabe que é importante. O aperto no peito ao ver quanto do coração do seu filho já está sendo ocupado por telas, distrações e outras influências.</p>
        <p>Você quer ensinar a Palavra. Quer fazer isso com amor. Mas a verdade é que falta tempo para planejar, falta um material certo e às vezes parece difícil prender a atenção dele do jeito que você gostaria.</p>
        
        <div className="mt-8 bg-green-50 text-green-800 p-5 rounded-2xl border border-green-200 font-bold text-center">
          E a boa notícia é que isso não precisa ser complicado para começar.
        </div>
      </div>
    </div>
  </section>
);

// --- 3. Consequence Section ---
const ConsequenceSection = () => (
  <section className="py-20 md:py-28 bg-slate-900 text-white px-4 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-500/10 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <SectionHeading title="A formação espiritual do seu filho já está acontecendo." light />
      <div className="space-y-6 text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
        <p>A visão de mundo de uma criança de 4 a 10 anos está sendo moldada todos os dias.</p>
        <p>Na escola, nos desenhos, nos vídeos, nas conversas e nas pequenas rotinas, ela está aprendendo o que amar, em quem confiar e como enxergar a vida.</p>
        <p>Por isso, o melhor momento para plantar a Palavra de Deus no coração do seu filho não é depois. <strong className="text-orange-400">É agora.</strong></p>
        <p className="text-xl md:text-2xl font-bold text-white pt-4">O que ele aprende hoje vai acompanhar quem ele será amanhã.</p>
      </div>
    </div>
  </section>
);

// --- 4. Solution Section ---
const SolutionSection = () => (
  <section className="py-20 md:py-28 bg-orange-50 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <SectionHeading title="E se ensinar a Bíblia fosse o momento mais leve e especial do dia de vocês?" />
      <div className="space-y-6 text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
        <p>Você não precisa ser teóloga. Não precisa passar horas planejando atividades. Não precisa improvisar.</p>
        <p className="font-bold text-2xl text-slate-900">Você só precisa da ferramenta certa.</p>
        <p>O Histórias Bíblicas é um material pronto para ajudar mães cristãs a viverem momentos de fé, conversa e conexão com os filhos dentro de casa.</p>
        <p>É só abrir, ler, conversar e viver esse momento.</p>
      </div>
      <CTAButton text="QUERO ESSA PRATICIDADE" />
    </div>
  </section>
);

// --- 5.1 Preview Carousel 1 ---
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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <SectionHeading 
          title="Veja por dentro do material" 
          subtitle="Histórias, atividades e momentos prontos para viver em família."
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

// --- 5.2 Preview Carousel 2 ---
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
    <section className="py-24 bg-[#FAFAF7] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 mb-12 md:mb-16">
        <SectionHeading 
          title="Visual criado para prender a atenção em segundos" 
          subtitle="Ilustrações encantadoras e linguagem simples que competem de frente com as telas e trazem a Bíblia para a realidade do seu filho."
        />
      </div>
      <div className="flex overflow-hidden relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-[#FAFAF7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-[#FAFAF7] to-transparent z-10 pointer-events-none" />

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
      
      <div className="mt-12 flex justify-center px-4">
         <CTAButton text="QUERO O MATERIAL COMPLETO" />
      </div>
    </section>
  );
};

// --- 6. HowItWorks ---
const HowItWorks = () => {
  const steps = [
    { num: "1", title: "Tela ou impresso", text: "Abra no celular, tablet ou imprima. O visual 3D prende a atenção na hora." },
    { num: "2", title: "Leiam juntos", text: "Textos curtos, linguagem simples e histórias que a criança entende com facilidade." },
    { num: "3", title: "Conversem com profundidade", text: "As perguntas guiadas ajudam você a transformar a leitura em um momento real de conexão." },
    { num: "4", title: "Reforcem o aprendizado", text: "Atividades e desenhos para colorir ajudam a fixar a lição de forma leve e natural." },
  ];

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="Tão simples que seu filho vai pedir para fazer" 
          subtitle="Pensado para mães ocupadas que querem viver algo especial sem complicação."
        />
        
        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4 bg-[#FAFAF7] p-8 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group hover:border-orange-200 transition-colors">
              <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg shadow-orange-500/30">
                {step.num}
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 7. Deliverables ---
const Deliverables = () => {
  const items = [
    { icon: PlayCircle, title: "Prende a atenção da criança logo no começo", desc: "Histórias ilustradas em 3D com visual forte, bonito e envolvente." },
    { icon: MessageSquare, title: "Ajuda você a conduzir sem travar", desc: "Perguntas guiadas para facilitar a conversa depois da história." },
    { icon: Sparkles, title: "Mostra o valor bíblico de forma clara", desc: "Moral e lições práticas para a vida real da criança." },
    { icon: ImageIcon, title: "O ensino continua mesmo depois da leitura", desc: "Atividades e desenhos para colorir que reforçam a mensagem." },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading 
          title="Tudo o que você precisa para ensinar a Bíblia com leveza dentro da sua casa" 
          light
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {items.map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-3 leading-snug">{item.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <CTAButton text="QUERO TER ACESSO A TUDO ISSO" />
        </div>
      </div>
    </section>
  );
};

// --- 8. Transformation ---
const Transformation = () => {
  const cards = [
    { icon: Heart, title: "Menos culpa", text: "Você vai sentir a paz de estar ensinando o que realmente importa." },
    { icon: Smartphone, title: "Menos tela", text: "O tempo gasto em distração começa a dar lugar a momentos com propósito." },
    { icon: MessageCircle, title: "Mais conexão", text: "Você vai viver conversas, presença e memórias que ficam no coração." },
    { icon: Smile, title: "Mais paz", text: "Dormir com a sensação de estar cumprindo seu papel espiritual muda tudo." },
  ];

  return (
    <section className="py-24 bg-[#FAFAF7] px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="O que vai começar a mudar dentro da sua casa" />
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {cards.map((card, i) => (
            <div key={i} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-5">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                <card.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base font-medium">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 9. Bonus ---
const Bonus = () => {
  const bonuses = [
    { title: "Desenhos para Colorir", text: "Mais envolvimento e criatividade enquanto aprende.", img: "https://i.pinimg.com/736x/af/70/b3/af70b37bb79dda24ec11496391e9c167.jpg", oldPrice: "De R$ 29,90" },
    { title: "Guia de Leitura em Família", text: "O mapa para manter a constância e não parar na primeira semana.", img: "https://i.pinimg.com/736x/00/82/b2/0082b27088df4a1a15aa3273854dadea.jpg", oldPrice: "De R$ 47,00" },
    { title: "Certificado de Conclusão", text: "Para o seu filho sentir orgulho da jornada com Deus.", img: "https://i.pinimg.com/736x/ed/00/af/ed00afed8dc5f9ea583f15b7797f09a7.jpg", oldPrice: "De R$ 19,90" },
    { title: "Grupo VIP de Mães", text: "Você não está sozinha. Caminhe com outras mães no mesmo propósito.", img: "https://i.pinimg.com/736x/29/0a/04/290a0442e95e30109e59e0a913663af1.jpg", oldPrice: "De R$ 97,00" },
  ];

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="E para tornar esse momento ainda mais especial, você leva estes bônus" 
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {bonuses.map((bonus, i) => (
            <div key={i} className="bg-[#FAFAF7] rounded-[2rem] p-6 border border-slate-100 flex flex-col items-center text-center h-full shadow-sm">
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

// --- 10. Social Proof ---
const Testimonials = () => {
  const tests = [
    { 
      text: "Depois das histórias, a gente conversa sobre Deus de um jeito que nunca acontecia antes.",
      author: "Nathalia, mãe da Maria (6 anos)",
      img: "https://api.dicebear.com/7.x/notionists/svg?seed=Nathalia&backgroundColor=ffedd5"
    },
    { 
      text: "Meu filho começou a pedir esse momento todos os dias.",
      author: "Juliana, mãe do Pedro (5 anos)",
      img: "https://api.dicebear.com/7.x/notionists/svg?seed=Juliana&backgroundColor=ffedd5"
    },
    { 
      text: "Eu não sabia como ensinar a Bíblia para minha filha. Agora ficou simples.",
      author: "Camila, mãe da Alice (7 anos)",
      img: "https://api.dicebear.com/7.x/notionists/svg?seed=Camila&backgroundColor=ffedd5"
    },
    { 
      text: "A melhor decisão que tomei. Em 15 minutos mudamos o clima da nossa casa.",
      author: "Fernanda, mãe do Davi (8 anos)",
      img: "https://api.dicebear.com/7.x/notionists/svg?seed=Fernanda&backgroundColor=ffedd5"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Lares transformados" 
          subtitle="Veja o que pais e mães cristãos estão vivendo depois de começar esse momento em casa."
          light
        />
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {tests.map((t, i) => (
            <div key={i} className="bg-white/10 p-8 rounded-[2rem] border border-white/10 relative flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-orange-400 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg md:text-xl font-medium leading-relaxed italic mb-8">"{t.text}"</p>
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

// --- 11. Offer & Guarantee ---
const OfferSection = () => {
  return (
    <section className="py-24 bg-[#FAFAF7] px-4" id="oferta">
      <div className="max-w-5xl mx-auto">
        <SectionHeading 
          title="Quanto vale o futuro espiritual do seu filho?" 
          subtitle="Hoje, por menos do que um lanche, você leva o material completo para ensinar a Bíblia ao seu filho de forma leve, visual e prática."
        />
        
        <div className="bg-white rounded-3xl md:rounded-[3rem] shadow-2xl border-4 border-slate-100 overflow-hidden relative mt-12">
          <div className="absolute top-0 left-0 w-full h-3 bg-orange-500" />
          <div className="p-6 sm:p-10 md:p-12 flex flex-col lg:flex-row gap-10 items-center">
            
            {/* Imagem + Inclusão */}
            <div className="flex-1 w-full flex flex-col items-center">
              <img 
                src="https://i.pinimg.com/736x/2f/b4/8a/2fb48a9818f0dbcbb70a7843ae60644f.jpg" 
                alt="Histórias Bíblicas" 
                className="w-full max-w-[280px] md:max-w-sm rounded-[2rem] shadow-xl mb-8 border-4 border-slate-50"
                referrerPolicy="no-referrer"
              />
              <div className="w-full max-w-sm mx-auto">
                <h3 className="text-2xl font-black text-slate-900 mb-1 text-center">Histórias Bíblicas</h3>
                <p className="text-base font-medium text-slate-500 mb-6 text-center">Tudo pronto para você começar hoje mesmo.</p>
                <ul className="space-y-4">
                  {[
                    "Histórias bíblicas ilustradas em 3D",
                    "Roteiro de Perguntas Guiadas",
                    "Atividades e Desenhos para colorir",
                    "Certificado + Grupo VIP",
                    "Acesso Vitalício Completo"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 font-bold text-slate-700 text-sm md:text-base">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price Box */}
            <div className="flex-1 w-full lg:max-w-md bg-slate-900 p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden text-center text-white border-4 border-slate-800">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
              
              <div className="inline-block bg-orange-500 text-white font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6">
                Oferta Especial
              </div>
              
              <p className="text-slate-400 line-through text-xl font-bold mb-2">De R$67</p>
              
              <div className="flex items-center justify-center text-green-400 mb-1">
                <span className="text-lg font-black uppercase tracking-wider">Por apenas</span>
              </div>
              <div className="flex justify-center items-start text-green-400 mb-6">
                <span className="text-2xl md:text-3xl font-black mt-2 md:mt-3 mr-1">R$</span>
                <span className="text-[4.5rem] md:text-[5.5rem] font-black leading-none tracking-tighter">19</span>
                <span className="text-2xl md:text-3xl font-black mt-2 md:mt-3">,90</span>
              </div>
              <p className="text-sm text-slate-300 font-bold uppercase tracking-widest mb-8">Pagamento único</p>
              
              <CTAButton text="GARANTIR ACESSO" href="https://pay.wiapy.com/zm9woP1NAS" className="w-full shadow-[0_0_40px_rgba(34,197,94,0.3)] !py-3.5 md:!py-4 !text-base md:!text-lg" />
              
              <div className="mt-5 text-sm font-medium text-slate-300">O acesso chegará no seu e-mail em menos de 2 minutos.</div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-xs font-bold text-slate-300">
                <div className="flex items-center justify-center gap-2"><ShieldCheck className="w-5 h-5 text-green-400" /> Compra 100% segura</div>
                <div className="hidden sm:block text-slate-600">•</div>
                <div className="flex items-center justify-center gap-2"><Clock className="w-5 h-5 text-green-400" /> Acesso imediato</div>
              </div>
            </div>

          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-12 bg-white p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative overflow-hidden">
          <div className="absolute -right-12 -top-12 text-slate-50">
            <Shield className="w-80 h-80" />
          </div>
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-white shadow-lg">
            <ShieldCheck className="w-12 h-12" />
          </div>
          <div className="z-10">
            <h3 className="text-3xl font-black text-slate-900 mb-4">Risco Zero. Teste na sua casa.</h3>
            <p className="text-slate-600 leading-relaxed mb-6 font-medium text-lg">Baixe o material. Sente com seu filho. Leia a primeira história. Se ele não gostar, não prestar atenção ou se você achar que não facilitou a sua vida, eu devolvo 100% dos seus R$19,90. Você tem 7 dias de garantia incondicional.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="bg-slate-50 px-5 py-2.5 rounded-full text-sm font-bold text-slate-700 flex items-center gap-2 border border-slate-200">
                <Check className="w-4 h-4 text-green-500" /> Decisão segura
              </span>
              <span className="bg-slate-50 px-5 py-2.5 rounded-full text-sm font-bold text-slate-700 flex items-center gap-2 border border-slate-200">
                <Check className="w-4 h-4 text-green-500" /> Reembolso fácil
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- 12. FAQ ---
const FAQ = () => {
  const faqs = [
    { q: "Meu filho não gosta de ler. Vai funcionar?", a: "Sim. As ilustrações em 3D foram feitas para prender a atenção das crianças de hoje. As perguntas também ajudam a transformar a leitura em uma conversa ativa e mais envolvente." },
    { q: "Eu não tenho tempo. Como vou usar?", a: "O material foi pensado justamente para rotinas corridas. Em poucos minutos por dia, você já consegue viver esse momento com seu filho sem precisar preparar nada." },
    { q: "Eu não sei explicar a Bíblia. Serve para mim?", a: "Sim. O material foi criado para mães que querem ensinar, mas sentem que falta didática, segurança ou um caminho mais simples. As histórias, perguntas e atividades facilitam tudo." },
    { q: "É material físico ou digital?", a: "É um material digital com acesso imediato. Você pode usar no celular, tablet, computador e também imprimir se quiser." },
    { q: "Posso imprimir?", a: "Sim. Você pode imprimir as páginas e atividades para usar do jeito que for melhor na sua rotina." },
    { q: "Tem garantia?", a: "Sim. Você tem 7 dias de garantia incondicional para testar com calma na sua casa." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Talvez você esteja pensando..." />
        <div className="space-y-4 mt-10">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-[#FAFAF7]">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-lg text-slate-800 hover:text-orange-500 transition-colors"
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

// --- 14. Final CTA ---
const FinalCTA = () => (
  <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden px-4">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0,transparent_100%)] pointer-events-none" />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
        Seu filho está crescendo. A formação espiritual dele não pode esperar.
      </h2>
      <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10">
        Poucos minutos por dia podem deixar marcas eternas no coração do seu filho.
      </p>
      
      <div className="bg-orange-500 text-white p-6 md:p-8 rounded-3xl mb-12 font-black text-xl md:text-2xl inline-block shadow-2xl border-4 border-orange-400">
        Não deixe o mundo ocupar o lugar que é seu dentro dessa missão.
      </div>

      <div>
        <CTAButton text="SIM, QUERO ENSINAR MEU FILHO" className="text-lg md:text-2xl !px-12 !py-6" />
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
      <PainSection />
      <ConsequenceSection />
      <SolutionSection />
      <PreviewCarousel1 />
      <PreviewCarousel2 />
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

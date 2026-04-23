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
  Users, 
  MessageCircle,
  Moon,
  ArrowRight,
  Star,
  Image as ImageIcon,
  MessageSquare,
  Lock,
  Check,
  Shield
} from "lucide-react";
import React, { useState } from "react";

// --- Componentes Base ---
const SectionHeading = ({ title, subtitle, light = false }: { title: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-12 px-4 relative z-10">
    <h2 className={`text-3xl md:text-5xl lg:text-6xl mb-6 font-black tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    {subtitle && <p className={`text-lg md:text-xl max-w-3xl mx-auto font-medium ${light ? 'text-white/80' : 'text-slate-600'}`}>{subtitle}</p>}
  </div>
);

const CTAButton = ({ text, href = "#oferta", className = "" }: { text: string, href?: string, className?: string }) => (
  <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2, repeat: Infinity }}>
    <a 
      href={href} 
      className={`inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-lg md:text-xl px-8 py-5 md:px-12 md:py-6 rounded-full font-black transition-all shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_rgba(34,197,94,0.6)] uppercase tracking-wide w-full sm:w-auto ${className}`}
    >
      {text}
      <ArrowRight className="ml-2 w-6 h-6" />
    </a>
  </motion.div>
);

const UrgencyHeader = () => (
  <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-[11px] md:text-sm font-bold text-center py-2 z-50 shadow-md">
    <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto px-2">
      <Clock className="w-4 h-4 animate-pulse shrink-0" />
      <span className="tracking-wide">ÚLTIMAS HORAS DA OFERTA: LEVE TODO O MATERIAL POR APENAS <span className="text-yellow-300 font-black">R$ 19,90</span></span>
    </div>
  </div>
);

// --- 1. Hero Section ---
const Hero = () => (
  <section className="pt-24 pb-20 px-4 bg-[#FAFAF7]">
    <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
      <div className="mb-6 flex items-center justify-center text-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider max-w-full leading-tight">
        <Star className="w-4 h-4 shrink-0" /> <span className="truncate whitespace-normal">Para pais e mães de crianças de 4 a 10 anos</span>
      </div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight sm:leading-tight mb-4 sm:mb-6 text-slate-900 max-w-4xl tracking-tight"
      >
        Transforme poucos minutos do dia no <span className="text-orange-500">momento mais importante</span> da formação espiritual do seu filho.
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 mb-8 sm:mb-10 max-w-3xl font-medium px-2"
      >
        Histórias ilustradas em 3D para ajudar pais cristãos a ensinarem valores bíblicos com leveza, conexão e propósito dentro de casa.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative mb-12 sm:mb-16 w-full max-w-2xl px-2 sm:px-0"
      >
        <img 
          src="https://i.pinimg.com/736x/ae/fd/cd/aefdcd3766de065284eec5bb4ca77288.jpg" 
          alt="Material Completo" 
          className="rounded-3xl sm:rounded-[2rem] shadow-2xl border-4 sm:border-8 border-white w-full h-auto"
          referrerPolicy="no-referrer"
        />
        
        {/* Selo de Oferta */}
        <div className="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-6 bg-slate-900 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl transform sm:rotate-3 border-2 sm:border-4 border-[#FAFAF7]">
          <p className="text-[10px] sm:text-xs text-slate-400 font-bold line-through mb-1 text-center">De R$ 97</p>
          <p className="font-black text-lg sm:text-xl text-green-400 leading-none">R$ 19,90</p>
        </div>
      </motion.div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-col items-center w-full max-w-md mx-auto">
        <CTAButton text="QUERO COMEÇAR HOJE" className="w-full text-[17px] sm:text-xl" />
        
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-slate-500 font-semibold w-full">
          <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-green-500 shrink-0" /> Pagamento seguro</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5 text-green-500 shrink-0" /> Acesso imediato no WhatsApp</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-green-500 shrink-0" /> Feito para pais e filhos</span>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 bg-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-sm border border-slate-100 w-full sm:w-auto">
          <div className="flex -space-x-2 shrink-0">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px]">👩</div>
            ))}
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-700 truncate">+10.000 famílias impactadas</p>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- 2. Preview ---
const MarqueeRow = ({ images, reverse = false }: { images: string[], reverse?: boolean }) => {
  return (
    <div className="flex overflow-hidden relative w-full">
      <motion.div
        className="flex gap-4 md:gap-6 min-w-max px-2 md:px-3 py-2"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        style={{ willChange: "transform" }}
      >
        {[...images, ...images].map((img, i) => (
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
  );
};

const PreviewCarousel = () => {
  const allImages = [
    "https://i.pinimg.com/736x/b8/1f/bd/b81fbdaab159800bbaea5a456681601a.jpg",
    "https://i.pinimg.com/736x/7b/88/91/7b8891afd667ca889e48f99450a7c200.jpg",
    "https://i.pinimg.com/736x/ef/af/c3/efafc30cc8992fd3724ff9b241504bac.jpg",
    "https://i.pinimg.com/736x/c0/ee/b7/c0eeb7ea3fe60fd27733ec6fd8679079.jpg",
    "https://i.pinimg.com/736x/87/5e/6f/875e6f8e962276d32f902b7ca2aa33d6.jpg",
    "https://i.pinimg.com/736x/43/6b/19/436b19bf51acda50511f2fa3ea2f959b.jpg",
    "https://i.pinimg.com/736x/d9/81/e1/d981e18b768931e92ecf05c80ac481c8.jpg",
    "https://i.pinimg.com/736x/a7/64/dc/a764dcc8020a9e3191928b409a607391.jpg",
    "https://i.pinimg.com/736x/01/f5/87/01f587f9fa42e85485b3f0b9d19298b6.jpg",
    "https://i.pinimg.com/736x/90/5f/3d/905f3daf2b3002de2d2f5ea0788eeaaa.jpg",
    "https://i.pinimg.com/736x/f6/f5/4f/f6f54fcc9b49b9c946d0504e92a35c57.jpg",
    "https://i.pinimg.com/736x/88/81/94/888194fa2ee0fae3ed15daad2b565ab9.jpg",
    "https://i.pinimg.com/736x/90/5d/9c/905d9c25e0c464bca43e15f41e600a47.jpg",
    "https://i.pinimg.com/736x/8c/8d/d1/8c8dd157c0d2361bf43a14021e2ac51a.jpg"
  ];
  
  const row1 = allImages.slice(0, 7);
  const row2 = allImages.slice(7, 14);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <SectionHeading 
          title="Veja por dentro do material" 
          subtitle="Histórias, atividades e momentos prontos para viver em família." 
        />
      </div>
      
      <div className="flex flex-col gap-4 md:gap-6 w-full relative">
        {/* Sombras nas laterais para dar o efeito de entrada/saída */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <MarqueeRow images={row1} reverse={false} />
        <MarqueeRow images={row2} reverse={true} />
      </div>
    </section>
  );
};

// --- 3. Deliverables (O que você vai receber) ---
const Deliverables = () => {
  const items = [
    { icon: BookOpen, title: "Histórias Bíblicas Ilustradas" },
    { icon: Sparkles, title: "Moral da História" },
    { icon: ImageIcon, title: "Atividades Práticas" },
    { icon: MessageSquare, title: "Perguntas para os Pais" },
    { icon: CheckCircle2, title: "Material Visual em 3D" },
    { icon: Heart, title: "Leitura Leve e Infantil" },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Tudo o que você precisa para criar momentos bíblicos em família" 
          subtitle="Um material pronto, bonito e fácil de usar para pais que querem ensinar a Bíblia com leveza."
          light
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm md:text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <CTAButton text="QUERO TER ACESSO A TUDO ISSO" />
        </div>
      </div>
    </section>
  );
};

// --- 4. Full Size Carousel (No lugar das Dores) ---
const FullSizeCarousel = () => {
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
        {/* Sombras nas laterais para dar o efeito de entrada/saída (opcional) */}
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
    </section>
  );
};

// --- 5. HowItWorks (Como Funciona) ---
const HowItWorks = () => {
  const steps = [
    { num: "1", title: "Escolha", text: "Abra o material e escolha uma das histórias." },
    { num: "2", title: "Envolva", text: "Use as ilustrações em 3D para prender a atenção da criança." },
    { num: "3", title: "Leia", text: "Apresente a história com linguagem simples e envolvente." },
    { num: "4", title: "Converse", text: "Use as perguntas prontas para criar uma conversa com significado." },
    { num: "5", title: "Transforme", text: "Viva um momento de fé, presença e conexão em família." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading 
          title="Como criar esse momento em 5 passos simples" 
          subtitle="Pensado para pais ocupados que querem viver algo especial sem complicação."
        />
        
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-center bg-[#FAFAF7] p-6 rounded-2xl border border-slate-100">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center font-black text-2xl shrink-0 shadow-lg shadow-orange-500/30">
                {step.num}
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-1">{step.title}</h3>
                <p className="text-slate-600 font-medium">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 6. Features (Diferenciais) ---
const Features = () => {
  const features = [
    { title: "Arte em 3D que prende a atenção", text: "Visual pensado para competir com as telas e envolver a criança na hora." },
    { title: "Linguagem feita para crianças", text: "Leve, simples e fácil de entender." },
    { title: "Guia prático para os pais", text: "Você não precisa improvisar nem saber explicar tudo sozinho." },
    { title: "Só 15 minutos por dia", text: "Perfeito para a rotina real de pais ocupados." },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-16">Por que esse material funciona tão bem dentro da rotina da sua família</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-green-400">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{feat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 7. Transformation ---
const Transformation = () => {
  const cards = [
    { icon: Moon, title: "Consciência tranquila", text: "Você dorme com a paz de ter cumprido seu papel espiritual naquele dia." },
    { icon: BookOpen, title: "Valores eternos plantados", text: "Seu filho aprende princípios que vão acompanhá-lo por toda a vida." },
    { icon: Users, title: "Menos tela, mais presença", text: "Vocês trocam distração por conexão real." },
    { icon: Heart, title: "Memórias de fé", text: "Momentos simples que seu filho vai guardar no coração." },
    { icon: Clock, title: "Hábito espiritual em família", text: "Uma rotina leve que aproxima sua casa de Deus." },
    { icon: Sparkles, title: "Orgulho santo", text: "Ver seu filho pedir por esse momento é colher os frutos da sua dedicação." },
  ];

  return (
    <section className="py-24 bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading title="O que começa a mudar dentro da sua casa a partir de hoje" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 8. Bonus ---
const Bonus = () => {
  const bonuses = [
    { title: "Desenhos Bíblicos para Colorir", text: "Mais envolvimento e criatividade enquanto aprende.", img: "https://i.pinimg.com/736x/af/70/b3/af70b37bb79dda24ec11496391e9c167.jpg" },
    { title: "Guia de Leitura em Família", text: "Ajuda prática para conduzir esse momento com segurança.", img: "https://i.pinimg.com/736x/00/82/b2/0082b27088df4a1a15aa3273854dadea.jpg" },
    { title: "Certificado de Estudante Bíblico", text: "Orgulho, incentivo e recompensa para a criança.", img: "https://i.pinimg.com/736x/ed/00/af/ed00afed8dc5f9ea583f15b7797f09a7.jpg" },
    { title: "Grupo VIP de Suporte", text: "Troca de experiências com outros pais cristãos.", img: "https://i.pinimg.com/736x/29/0a/04/290a0442e95e30109e59e0a913663af1.jpg" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading 
          title="Além das histórias, você recebe ferramentas extras para tornar esse momento ainda mais especial" 
          subtitle="Tudo o que você precisa para viver esse momento com mais leveza, alegria e significado."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonuses.map((bonus, i) => (
            <div key={i} className="bg-[#FAFAF7] rounded-3xl p-6 border border-slate-100 flex flex-col items-center text-center">
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-2xl shadow-md">
                <img src={bonus.img} alt={bonus.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Bônus Gratuito
                </div>
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">{bonus.title}</h3>
              <p className="text-slate-600 text-sm">{bonus.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 9. Testimonials (Prova Social) ---
const Testimonials = () => {
  const texts = [
    "Depois das histórias, a gente conversa sobre Deus de um jeito que nunca acontecia antes.",
    "Meu filho começou a pedir esse momento todos os dias.",
    "Eu não sabia como ensinar a Bíblia para minha filha. Agora ficou simples.",
    "A melhor decisão que tomei. Em 15 minutos mudamos o clima da nossa casa."
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading 
          title="Lares transformados" 
          subtitle="Veja o que pais e mães cristãos estão vivendo depois de começar esse momento em casa."
          light
        />
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {texts.map((text, i) => (
            <div key={i} className="bg-white/10 p-8 rounded-3xl border border-white/10 relative">
              <MessageCircle className="absolute top-6 right-6 w-8 h-8 text-white/10" />
              <div className="flex gap-1 text-orange-400 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg md:text-xl font-medium leading-relaxed italic">"{text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 10. Offer & 11. Guarantee ---
const OfferSection = () => {
  return (
    <section className="py-24 bg-[#FAFAF7]" id="oferta">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading 
          title="Comece hoje a criar momentos bíblicos que seu filho vai levar para a vida toda" 
          subtitle="Tudo pronto para você ensinar valores bíblicos com leveza, mesmo sem experiência e sem perder tempo."
        />
        
        <div className="bg-white rounded-3xl md:rounded-[3rem] shadow-2xl border-2 md:border-4 border-slate-100 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-orange-500" />
          <div className="p-5 sm:p-8 md:p-12 md:pb-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            
            {/* Imagem + Inclusão */}
            <div className="flex-1 w-full flex flex-col items-center">
              <img 
                src="https://i.pinimg.com/736x/2f/b4/8a/2fb48a9818f0dbcbb70a7843ae60644f.jpg" 
                alt="Histórias Bíblicas" 
                className="w-full max-w-xs md:max-w-sm rounded-[2rem] shadow-xl mb-6 border-4 border-slate-50"
                referrerPolicy="no-referrer"
              />
              <div className="w-full">
                <h3 className="text-lg font-black text-slate-800 mb-4 text-center md:text-left">O que você vai receber:</h3>
                <ul className="space-y-3 text-sm md:text-base">
                  {[
                    "Histórias bíblicas ilustradas em 3D",
                    "Atividades e Desenhos para colorir",
                    "Guia de leitura e Perguntas guiadas",
                    "Certificado + Grupo VIP"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="font-bold text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price Box */}
            <div className="flex-1 bg-[#FAFAF7] p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] border-2 border-orange-100 text-center w-full shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
              
              <p className="text-slate-500 font-bold mb-2">Valor do investimento</p>
              <p className="text-slate-400 line-through text-xl font-bold decoration-red-500/50 mb-1">De R$97</p>
              <div className="flex items-center justify-center text-slate-900 mb-1">
                <span className="text-xl font-black">Por apenas</span>
              </div>
              <div className="flex justify-center items-start text-green-500 mb-6">
                <span className="text-2xl md:text-3xl font-black mt-1 md:mt-2">R$</span>
                <span className="text-[4rem] md:text-[5rem] font-black leading-none tracking-tighter">19</span>
                <span className="text-2xl md:text-3xl font-black mt-1 md:mt-2">,90</span>
              </div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-8">Pagamento único • Acesso vitalício</p>
              
              <CTAButton text="QUERO COMEÇAR AGORA" href="https://pay.wiapy.com/zm9woP1NAS" className="w-full text-base md:text-lg py-4 md:py-5" />
              
              <div className="mt-8 flex flex-col gap-3 text-xs font-bold text-slate-500 bg-white p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Compra 100% segura</div>
                <div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-green-500" /> Acesso imediato no WhatsApp</div>
              </div>
            </div>

          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-16 bg-white p-8 md:p-10 rounded-[2rem] border border-orange-100 shadow-sm flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative overflow-hidden">
          <div className="absolute -right-10 -top-10 text-orange-50/50">
            <Shield className="w-64 h-64" />
          </div>
          <div className="w-24 h-24 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center shrink-0 z-10">
            <ShieldCheck className="w-12 h-12" />
          </div>
          <div className="z-10">
            <h3 className="text-2xl font-black text-slate-900 mb-3">Seu investimento é protegido</h3>
            <p className="text-slate-600 leading-relaxed mb-6">Você tem 7 dias de garantia para testar o material com tranquilidade. Se não fizer sentido para sua família, devolvemos seu dinheiro.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="bg-[#FAFAF7] px-4 py-2 rounded-full text-xs font-bold text-slate-700 flex items-center gap-2 border border-slate-200">✓ Sem burocracia</span>
              <span className="bg-[#FAFAF7] px-4 py-2 rounded-full text-xs font-bold text-slate-700 flex items-center gap-2 border border-slate-200">✓ Compra segura</span>
              <span className="bg-[#FAFAF7] px-4 py-2 rounded-full text-xs font-bold text-slate-700 flex items-center gap-2 border border-slate-200">✓ Risco zero</span>
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
    { q: "Meu filho não gosta de ler. Vai funcionar?", a: "Sim! O material é altamente visual e dinâmico. As ilustrações em 3D foram pensadas para prender a atenção mesmo das crianças mais inquietas enquanto você lê para elas." },
    { q: "Eu não tenho tempo. Quanto tempo leva por dia?", a: "Apenas 10 a 15 minutos. É o tempo de uma leitura rápida antes de dormir ou após o jantar. Pensado para a rotina de pais ocupados." },
    { q: "Meu filho é muito pequeno. Ele vai entender?", a: "Sim. A linguagem foi totalmente adaptada para a compreensão de crianças de 4 a 10 anos, transmitindo valores profundos de forma simples." },
    { q: "Isso substitui a Bíblia?", a: "Não. É uma ferramenta de apoio e introdução. Ela ajuda você a explicar os conceitos bíblicos na linguagem que a criança entende." },
    { q: "Como vou receber o material?", a: "Imediatamente após a aprovação do pagamento, você receberá um e-mail e uma mensagem no WhatsApp com seu link de acesso." },
    { q: "Posso imprimir?", a: "Sim! Você pode ler direto no celular/tablet, mas também pode imprimir todo o material se preferir." },
    { q: "Tem garantia?", a: "Sim, 7 dias de garantia incondicional. Risco zero para você." },
    { q: "Serve para quem nunca ensinou a Bíblia antes?", a: "Com certeza. O material já vem com o roteiro pronto: a história, a moral e as perguntas. Você não precisa inventar nada." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading title="Talvez você esteja pensando..." />
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-[#FAFAF7]">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 hover:text-orange-500 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-180 text-orange-500' : 'text-slate-400'}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                    <p className="p-6 pt-0 text-slate-600 leading-relaxed">{faq.a}</p>
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
  <section className="py-24 bg-slate-900 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-orange-500/5 z-0 pointer-events-none" />
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
        Seu filho está crescendo agora. A formação espiritual dele não pode esperar.
      </h2>
      <p className="text-xl md:text-2xl text-white/80 font-medium mb-12">
        Poucos minutos por dia podem deixar marcas eternas no coração do seu filho.
      </p>
      
      <div className="bg-orange-500/10 border border-orange-500/20 text-orange-100 p-8 rounded-3xl mb-12 font-bold text-lg md:text-xl inline-block shadow-lg">
        Não deixe o mundo ocupar o lugar que é seu dentro dessa missão.
      </div>

      <div>
        <CTAButton text="QUERO COMEÇAR HOJE" />
      </div>
    </div>
  </section>
);

// --- Footer ---
const Footer = () => (
  <footer className="py-12 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm font-medium">
      <div className="flex items-center justify-center gap-2 mb-4 text-slate-800">
        <BookOpen className="w-5 h-5 text-orange-500" />
        <span className="font-bold text-lg">Histórias Bíblicas</span>
      </div>
      <p className="mb-4">© 2026 Todos os direitos reservados.</p>
      <div className="flex justify-center gap-6">
        <a href="#" className="hover:text-orange-500 transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Políticas de Privacidade</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-orange-500/30">
      <UrgencyHeader />
      <Hero />
      <PreviewCarousel />
      <Deliverables />
      <FullSizeCarousel />
      <HowItWorks />
      <Features />
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

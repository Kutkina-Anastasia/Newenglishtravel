import { Plane } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1619467416348-6a782839e95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjB3b3JsZHxlbnwxfHx8fDE3NjYxMDc4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Travel"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-teal-950/80" />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 to-amber-500/10 border border-teal-500/20"
        >
          <Plane className="w-5 h-5 text-teal-400" />
          <span className="text-teal-300">Новый курс</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 bg-gradient-to-r from-white via-teal-100 to-amber-100 bg-clip-text text-transparent"
        >
          Курс «Английский для путешествий»
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 max-w-3xl mx-auto text-slate-300 text-lg md:text-xl leading-relaxed"
        >
          Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
          Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
          в отпуске, поездках и будущих путешествиях!
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={scrollToCTA}
          className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-amber-500 hover:from-teal-400 hover:via-cyan-400 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2">
            Записаться на курс
            <Plane className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Уровень A2–B1</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Максимум 6 детей</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Интерактивные занятия</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

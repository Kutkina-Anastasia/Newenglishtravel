import { Plane, Users, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export function CTA() {
  const handleEnrollClick = () => {
    // В реальном приложении здесь была бы форма регистрации или ссылка на запись
    alert("Спасибо за интерес! Здесь будет форма записи или контактная информация.");
  };

  return (
    <section id="cta-section" className="relative py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Alert Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30"
          >
            <AlertCircle className="w-5 h-5 text-red-400" />
            <span className="text-red-300">📢 Набор открыт!</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 bg-gradient-to-r from-white via-teal-100 to-amber-100 bg-clip-text text-transparent"
          >
            Места ограничены!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Группы маленькие — максимум 6 детей, чтобы каждый получил внимание. 
            Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок 
            заговорит по-английски без страха!
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onClick={handleEnrollClick}
            className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-amber-500 hover:from-teal-400 hover:via-cyan-400 hover:to-amber-400 transition-all duration-300 shadow-2xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-110"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Plane className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
              Записаться на курс
            </span>
          </motion.button>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <Users className="w-5 h-5 text-teal-400" />
              <div className="text-left">
                <p className="text-white">Максимум 6 детей</p>
                <p className="text-slate-400 text-xs">в группе</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <Plane className="w-5 h-5 text-amber-400" />
              <div className="text-left">
                <p className="text-white">10 уроков</p>
                <p className="text-slate-400 text-xs">полный курс</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative mt-16 max-w-4xl mx-auto rounded-2xl overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1697759227429-5c77c8b55e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGFpcnBvcnQlMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NjYxNjE1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Airport"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="text-white text-sm opacity-60">
            Следующее путешествие — без языковых барьеров ✈️
          </p>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-slate-500 text-sm">
          © 2025 Курс «Английский для путешествий» • Создано с ❤️ для юных путешественников
        </p>
      </motion.div>
    </section>
  );
}

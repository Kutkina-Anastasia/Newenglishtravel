import { CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function WhySpecial() {
  const features = [
    {
      title: "Акцент на практическую, живую речь",
      description: "А не на грамматику ради грамматики"
    },
    {
      title: "Все ситуации — из реальной жизни",
      description: "Путешественника, которые действительно встречаются"
    },
    {
      title: "Интерактивные задания",
      description: "Ролевые игры, аудиоситуации, мини-квесты"
    },
    {
      title: "Уровень A2–B1 за курс",
      description: "Ребёнок выходит на уровень Pre-Intermediate"
    }
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm">Почему этот курс особенный?</span>
          </div>
          <h2 className="text-white">Не просто уроки, а подготовка к жизни</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-800 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h4 className="text-white mb-1">{feature.title}</h4>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 relative rounded-2xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1596480198304-0bf1c2d87beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBob3Jpem9uJTIwb2NlYW58ZW58MXx8fHwxNzY2MTYxNTE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sunset"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

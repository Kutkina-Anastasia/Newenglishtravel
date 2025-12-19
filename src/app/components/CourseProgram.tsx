import { 
  Plane, 
  Hotel, 
  UtensilsCrossed, 
  Map, 
  AlertCircle, 
  Camera, 
  Heart,
  Presentation
} from "lucide-react";
import { motion } from "motion/react";

export function CourseProgram() {
  const modules = [
    {
      icon: Plane,
      title: "Аэропорт без стресса",
      description: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
      benefit: "Уверенность уже в первые часы за границей.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Hotel,
      title: "В отеле: заселение и помощь",
      description: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
      benefit: "Практика вежливых фраз и повседневной лексики.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: UtensilsCrossed,
      title: "Кафе и рестораны",
      description: "Заказ еды, вопросы про аллергены, счёт и чаевые.",
      benefit: "Развитие гастрономического словаря и уверенности в общении.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Map,
      title: "На улице: ориентирование и просьбы",
      description: "Как спросить дорогу, вызвать такси или найти аптеку.",
      benefit: "Понимание устной речи и произношения в реальных ситуациях.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: AlertCircle,
      title: "Экстренные случаи",
      description: "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
      benefit: "Важные фразы, которые могут спасти отпуск.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Camera,
      title: "Туризм и развлечения",
      description: "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
      benefit: "Погружение в культурный контекст через язык.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Heart,
      title: "Дружба в путешествиях",
      description: "Как познакомиться с другими детьми или подростками за границей.",
      benefit: "Игровая практика диалогов и неформального общения.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Presentation,
      title: "Дипломный проект: «Мой идеальный отпуск»",
      description: "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
      benefit: "Развитие связной речи и творческого самовыражения.",
      color: "from-teal-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-300 text-sm">📚 Программа курса</span>
          </div>
          <h2 className="text-white mb-4">8 модулей для уверенного общения</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Каждый модуль построен на реальных ситуациях из путешествий
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${module.color} mb-4 group-hover:scale-110 transition-transform`}>
                <module.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-white mb-2">{module.title}</h3>
              <p className="text-slate-400 mb-3 text-sm leading-relaxed">
                {module.description}
              </p>
              
              {/* Benefit */}
              <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <span className="text-teal-400 text-xs mt-0.5">👉</span>
                <p className="text-slate-300 text-sm">{module.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

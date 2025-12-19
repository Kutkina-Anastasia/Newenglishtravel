import { CreditCard, Ticket, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Pricing() {
  const options = [
    {
      icon: Ticket,
      title: "Полный курс",
      price: "12 000 руб",
      description: "10 уроков",
      features: ["Все 8 модулей", "Дипломный проект", "Материалы курса"],
      color: "from-teal-500 to-cyan-500",
      popular: true
    },
    {
      icon: CreditCard,
      title: "Абонемент",
      price: "1 300 руб",
      description: "за урок",
      features: ["Гибкий график", "Оплата помесячно", "Все материалы"],
      color: "from-amber-500 to-orange-500",
      popular: false
    }
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <CreditCard className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm">💳 Стоимость</span>
          </div>
          <h2 className="text-white mb-4">Выгодные условия обучения</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Выберите удобный формат оплаты
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative p-8 rounded-2xl bg-slate-900/50 border-2 ${
                option.popular ? 'border-teal-500/50' : 'border-slate-800'
              } backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
            >
              {option.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs">
                    Популярный выбор
                  </span>
                </div>
              )}

              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${option.color} mb-4`}>
                <option.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-white mb-2">{option.title}</h3>
              <div className="mb-1">
                <span className={`bg-gradient-to-r ${option.color} bg-clip-text text-transparent`}>
                  {option.price}
                </span>
              </div>
              <p className="text-slate-400 mb-6 text-sm">{option.description}</p>

              <div className="space-y-3">
                {option.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

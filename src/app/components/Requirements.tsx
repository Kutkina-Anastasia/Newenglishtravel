import { Monitor, Headphones, Wifi, Video } from "lucide-react";
import { motion } from "motion/react";

export function Requirements() {
  const items = [
    {
      icon: Monitor,
      text: "Стационарный компьютер или ноутбук",
      color: "text-teal-400"
    },
    {
      icon: Headphones,
      text: "Наушники и микрофон",
      color: "text-cyan-400"
    },
    {
      icon: Wifi,
      text: "Стабильный интернет",
      color: "text-amber-400"
    },
    {
      icon: Video,
      text: "Установленный Zoom",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-300 text-sm">💻 Что потребуется</span>
          </div>
          <h2 className="text-white">Технические требования</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300"
            >
              <div className={`p-3 rounded-lg bg-slate-800/50 ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <p className="text-slate-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

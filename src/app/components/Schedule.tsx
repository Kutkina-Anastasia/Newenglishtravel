import { Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";

export function Schedule() {
  const schedule = [
    {
      day: "Четверг",
      time: "15:00 (МСК)",
      group: "Группа 4–5 класс",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/20"
    },
    {
      day: "Пятница",
      time: "15:30 (МСК)",
      group: "Группа 6–8 класс",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20"
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
            <Clock className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 text-sm">Расписание</span>
          </div>
          <h2 className="text-white">Удобное время для занятий</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-6 rounded-2xl ${item.bgColor} border ${item.borderColor} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color}`}>
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white">{item.day}</h3>
              </div>
              <p className={`mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                {item.time}
              </p>
              <p className="text-slate-400 text-sm">{item.group}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

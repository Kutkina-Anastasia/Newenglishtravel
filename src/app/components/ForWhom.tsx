import { Users, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

export function ForWhom() {
  const groups = [
    {
      icon: GraduationCap,
      title: "Первая группа",
      subtitle: "4–5 класс",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/20"
    },
    {
      icon: Users,
      title: "Вторая группа",
      subtitle: "6–8 класс",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20"
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
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="text-teal-300 text-sm">📌 Для кого курс</span>
          </div>
          <h2 className="text-white">Выберите подходящую группу</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative p-8 rounded-2xl ${group.bgColor} border ${group.borderColor} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${group.color} mb-4`}>
                <group.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white mb-2">{group.title}</h3>
              <p className={`bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                {group.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

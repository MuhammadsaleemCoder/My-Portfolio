import { motion } from 'framer-motion';
import { BookOpen, Award, Monitor } from 'lucide-react';

const items = [
  {
    title: 'MERN Stack Development',
    institution: 'Apna College India (Online)',
    period: '2024 — Present',
    note: 'Mentor: Shradha Khapra, Founder of Dziinr Academy Skardu',
    icon: <Monitor size={20} />,
    highlight: true,
    category: 'Development',
  },
  {
    title: 'Aamir Ahmer Academy Online Class',
    institution: 'Aamir Ahmer Academy, Karachi',
    period: '2024',
    note: 'Online professional development course',
    icon: <BookOpen size={20} />,
    highlight: false,
    category: 'Course',
  },
  {
    title: 'FSc (Intermediate)',
    institution: 'Career Guidance Public School',
    period: 'Completed',
    note: 'Formal secondary education',
    icon: <BookOpen size={20} />,
    highlight: false,
    category: 'Formal',
  },
  {
    title: 'Graphic Design',
    institution: 'Next Planner Academy, Skardu',
    period: '2021',
    note: 'Also completed Social Media Marketing online training',
    icon: <Award size={20} />,
    highlight: false,
    category: 'Design',
  },
  {
    title: 'Matriculation',
    institution: 'Uswa Yultar Boys School',
    period: 'Completed',
    note: 'Formal primary education',
    icon: <BookOpen size={20} />,
    highlight: false,
    category: 'Formal',
  },
  {
    title: 'Digital Literacy Certificate',
    institution: 'Challenger Computer Center',
    period: '2019',
    note: 'Foundation in computers and digital tools',
    icon: <Award size={20} />,
    highlight: false,
    category: 'Certificate',
  },
];

const categoryColor = {
  Development: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Design: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  Course: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  Certificate: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  Formal: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
};

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-xl opacity-70">04.</span>
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mb-4 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-xl">
            A lifelong learner — from a small mountain town to full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 ${
                item.highlight ? 'border-primary/50' : 'border-border hover:border-primary/30'
              }`}
              style={{ backgroundColor: 'hsl(var(--card))' }}
              data-testid={`edu-card-${idx}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className={`p-2.5 rounded-xl ${item.highlight ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                  {item.icon}
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColor[item.category]}`}>
                  {item.category}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base leading-snug mb-1">{item.title}</h3>
                <p className="text-primary text-sm font-medium">{item.institution}</p>
              </div>
              <div className="mt-auto flex items-end justify-between gap-2">
                <p className="text-xs text-muted-foreground leading-relaxed">{item.note}</p>
                <span className="text-xs text-muted-foreground font-mono flex-shrink-0 border border-border rounded px-2 py-0.5">
                  {item.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

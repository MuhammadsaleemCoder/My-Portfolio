import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Building2 } from 'lucide-react';

const experiences = [
  {
    role: 'Instructor — Graphic Design & Web Development',
    org: 'Dziinr Academy Skardu',
    period: 'Oct 2024 — Present',
    type: 'Education',
    icon: <GraduationCap size={20} />,
    description:
      'Founded and runs Dziinr Academy in Skardu, teaching Graphic Design and Web Development to local students. Building a pathway for youth in Gilgit Baltistan to access world-class digital skills.',
    tags: ['Founder', 'Graphic Design', 'Web Development', 'MERN Stack'],
    highlight: true,
  },
  {
    role: 'Instructor — Basic Computer, SMM & Backend',
    org: 'Uswa Education System',
    period: '2023 — Present',
    type: 'Education',
    icon: <Building2 size={20} />,
    description:
      'Teaching Basic Computer skills, Social Media Marketing, and Backend Development at Uswa Education System — empowering students with practical digital literacy.',
    tags: ['Basic Computer', 'SMM', 'Backend Development'],
    highlight: false,
  },
  {
    role: 'Intern Graphic Designer',
    org: 'Intellectual Rush',
    period: '2022',
    type: 'Work',
    icon: <Briefcase size={20} />,
    description:
      'On-site internship at Intellectual Rush in Skardu. Gained hands-on professional experience in graphic design, branding, and visual communication for real clients.',
    tags: ['Graphic Design', 'Branding', 'Visual Design'],
    highlight: false,
  },
  {
    role: 'Instructor — Graphic Design',
    org: 'Next Planners Academy, Skardu',
    period: '2022',
    type: 'Education',
    icon: <GraduationCap size={20} />,
    description:
      'First teaching role after completing the Graphic Design program at Next Planners. Taught design fundamentals to new students, launching a career in education alongside practice.',
    tags: ['First Teaching Role', 'Graphic Design', 'Mentoring'],
    highlight: false,
  },
];

const typeColor = {
  Education: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Work: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-xl opacity-70">03.</span>
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mb-4 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-xl">
            From student to instructor — building a career and a community.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px hidden sm:block" style={{ background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.6), hsl(var(--border)), transparent)' }} />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex gap-6 sm:gap-10 group"
                data-testid={`experience-item-${idx}`}
              >
                <div className="relative z-10 hidden sm:flex flex-shrink-0 items-start pt-1">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    exp.highlight
                      ? 'bg-primary/20 border-primary/60 text-primary'
                      : 'bg-secondary border-border text-muted-foreground'
                  }`}>
                    {exp.icon}
                  </div>
                </div>

                <div className={`flex-1 border rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                  exp.highlight
                    ? 'border-primary/40'
                    : 'border-border hover:border-primary/30'
                }`} style={{ backgroundColor: 'hsl(var(--card))' }}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug">{exp.role}</h3>
                      <p className="text-primary font-medium mt-1">{exp.org}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${typeColor[exp.type]}`}>
                        {exp.type}
                      </span>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

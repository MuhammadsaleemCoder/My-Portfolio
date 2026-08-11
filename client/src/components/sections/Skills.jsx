import { motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiJavascript, SiHtml5, SiCss, SiFigma, SiGit, SiGithub,
} from 'react-icons/si';
import { Layers, Monitor, GraduationCap, Globe } from 'lucide-react';

const categories = [
  {
    label: 'MERN Stack',
    icon: <Monitor className="w-5 h-5 text-primary" />,
    skills: [
      { name: 'React', icon: <SiReact size={20} color="#61DAFB" /> },
      { name: 'Node.js', icon: <SiNodedotjs size={20} color="#339933" /> },
      { name: 'MongoDB', icon: <SiMongodb size={20} color="#47A248" /> },
      { name: 'Express', icon: <SiExpress size={20} /> },
    ],
  },
  {
    label: 'Web Technologies',
    icon: <Globe className="w-5 h-5 text-primary" />,
    skills: [
      { name: 'JavaScript', icon: <SiJavascript size={20} color="#F7DF1E" /> },
      { name: 'HTML5', icon: <SiHtml5 size={20} color="#E34F26" /> },
      { name: 'CSS3', icon: <SiCss size={20} color="#1572B6" /> },
      { name: 'Git', icon: <SiGit size={20} color="#F05032" /> },
      { name: 'GitHub', icon: <SiGithub size={20} /> },
    ],
  },
  {
    label: 'Graphic Design',
    icon: <Layers className="w-5 h-5 text-primary" />,
    skills: [
      { name: 'Figma', icon: <SiFigma size={20} color="#F24E1E" /> },
      { name: 'Photoshop' },
      { name: 'Illustrator' },
    ],
  },
  {
    label: 'Teaching',
    icon: <GraduationCap className="w-5 h-5 text-primary" />,
    skills: [
      { name: 'Graphic Design Instruction' },
      { name: 'Web Development Instruction' },
      { name: 'Basic Computer' },
      { name: 'Social Media Marketing' },
      { name: 'Backend Development' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-xl opacity-70">02.</span>
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary mb-4 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-xl">
            Tools and technologies I use to design, build, and teach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-colors"
              style={{ backgroundColor: 'hsl(var(--card))' }}
              data-testid={`skills-card-${catIdx}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary">{cat.icon}</div>
                <h3 className="font-semibold text-foreground text-lg">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border hover:border-primary/60 transition-all cursor-default"
                    data-testid={`skill-badge-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill.icon && skill.icon}
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

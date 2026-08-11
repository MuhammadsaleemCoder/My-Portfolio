import { motion } from 'framer-motion';
import { Layers, Monitor, Megaphone } from 'lucide-react';
import { SiReact, SiNodedotjs, SiMongodb, SiFigma, SiJavascript, SiHtml5, SiCss } from 'react-icons/si';

const projects = [
  {
    title: 'Dziinr Academy Website',
    category: 'Web Development',
    description:
      'Official website for Dziinr Academy Skardu showcasing courses in Graphic Design and Web Development for students in Gilgit Baltistan. Built with a modern React frontend.',
    tags: ['React', 'Node.js', 'CSS'],
    techIcons: [
      <SiReact size={15} color="#61DAFB" />,
      <SiNodedotjs size={15} color="#339933" />,
      <SiCss size={15} color="#1572B6" />,
    ],
    icon: <Monitor size={22} />,
    border: 'border-blue-500/30',
    glow: 'hover:shadow-blue-500/10',
  },
  {
    title: 'Brand Identity — Local Business',
    category: 'Graphic Design',
    description:
      'Complete brand identity for a local Skardu business — logo design, color palette, typography system, business card, and social media templates.',
    tags: ['Figma', 'Illustrator', 'Branding'],
    techIcons: [<SiFigma size={15} color="#F24E1E" />],
    icon: <Layers size={22} />,
    border: 'border-violet-500/30',
    glow: 'hover:shadow-violet-500/10',
  },
  {
    title: 'Social Media Marketing Campaigns',
    category: 'SMM',
    description:
      'Designed and managed social media content for multiple clients — post graphics, reels covers, stories, and ad creatives optimized for maximum engagement.',
    tags: ['Photoshop', 'SMM', 'Content Design'],
    techIcons: [],
    icon: <Megaphone size={22} />,
    border: 'border-emerald-500/30',
    glow: 'hover:shadow-emerald-500/10',
  },
  {
    title: 'Student Portfolio Projects',
    category: 'Web Development',
    description:
      'Guided student portfolio projects at Dziinr Academy covering HTML/CSS layouts, JavaScript interactivity, and responsive design fundamentals.',
    tags: ['HTML5', 'CSS', 'JavaScript', 'Mentoring'],
    techIcons: [
      <SiHtml5 size={15} color="#E34F26" />,
      <SiCss size={15} color="#1572B6" />,
      <SiJavascript size={15} color="#F7DF1E" />,
    ],
    icon: <Monitor size={22} />,
    border: 'border-amber-500/30',
    glow: 'hover:shadow-amber-500/10',
  },
  {
    title: 'MERN Stack Web Application',
    category: 'Full Stack',
    description:
      'Full-stack app built during the MERN Stack Development course — user authentication, REST API, MongoDB database, and a React frontend.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    techIcons: [
      <SiMongodb size={15} color="#47A248" />,
      <SiReact size={15} color="#61DAFB" />,
      <SiNodedotjs size={15} color="#339933" />,
    ],
    icon: <Monitor size={22} />,
    border: 'border-blue-600/30',
    glow: 'hover:shadow-blue-600/10',
  },
  {
    title: 'Uswa Education — Teaching Material',
    category: 'Education',
    description:
      'Structured lesson plans and digital learning materials for Basic Computer, SMM, and Backend Development at Uswa Education System.',
    tags: ['Curriculum Design', 'Teaching', 'SMM'],
    techIcons: [],
    icon: <Layers size={22} />,
    border: 'border-cyan-500/30',
    glow: 'hover:shadow-cyan-500/10',
  },
];

const categoryColor = {
  'Web Development': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'Graphic Design': 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  'SMM': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'Full Stack': 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
  'Education': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-xl opacity-70">05.</span>
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mb-4 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-xl">
            A selection of work across design, development, and education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className={`group border ${project.border} rounded-2xl p-6 flex flex-col gap-5 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-lg ${project.glow}`}
              style={{ backgroundColor: 'hsl(var(--card))' }}
              data-testid={`project-card-${idx}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="p-3 rounded-xl bg-secondary border border-border text-primary">
                  {project.icon}
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 ${categoryColor[project.category]}`}>
                  {project.category}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-foreground text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>

              <div className="flex items-center justify-between gap-3 pt-4 border-t border-border/60">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.techIcons.length > 0 && (
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {project.techIcons.map((icon, iIdx) => (
                      <span key={iIdx}>{icon}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

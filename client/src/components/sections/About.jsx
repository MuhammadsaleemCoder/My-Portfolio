import { motion } from 'framer-motion';
import { Code2, PenTool, BookOpen } from 'lucide-react';

const pillars = [
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: 'Design',
    desc: 'Creating impactful brand identities and visual experiences that communicate clearly.',
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: 'Development',
    desc: 'Building fast, modern web applications with React, Node.js, and the MERN stack.',
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: 'Education',
    desc: 'Empowering the next generation of tech talent in Gilgit Baltistan through teaching.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
            <span className="text-primary font-mono text-xl opacity-70">01.</span>
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mb-8 rounded-full" />
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a self-made professional from the remote mountains of{' '}
              <strong className="text-foreground">Shigar, Gilgit Baltistan</strong>. My journey into
              tech was built on relentless curiosity and a drive to create opportunities where they
              were scarce.
            </p>
            <p>
              Starting with a simple digital literacy course in 2019, I fell in love with digital
              creation. I learned Graphic Design, mastered Social Media Marketing, and eventually
              dove deep into Full-Stack Web Development — specifically the MERN stack.
            </p>
            <p>
              Today, my work lives at the intersection of{' '}
              <strong className="text-foreground">creative design</strong> and{' '}
              <strong className="text-foreground">technical execution</strong>. Through Dziinr
              Academy Skardu and the Uswa Education System, I teach design and code to students in
              my community — proving that world-class talent can come from anywhere.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              style={{ backgroundColor: 'hsl(var(--card))' }}
            >
              <div className="mb-6 p-4 rounded-2xl bg-secondary inline-block">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

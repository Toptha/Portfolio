import { motion } from 'framer-motion'
import { FaJava, FaPython, FaJs, FaHtml5, FaCss3, FaReact, FaNodeJs, FaAngular } from 'react-icons/fa'
import { SiCplusplus, SiKotlin, SiExpress, SiNextdotjs } from 'react-icons/si'

const technologies = [
  { name: 'C', icon: 'C' },
  { name: 'C++', icon: SiCplusplus },
  { name: 'Java', icon: FaJava },
  { name: 'Python', icon: FaPython },
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'JavaScript', icon: FaJs },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3 },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Angular', icon: FaAngular },
]

const TechStack = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4 hover:bg-cyan-500 transition-colors duration-300">
                {typeof tech.icon === 'string' ? (
                  <span className="text-4xl font-bold">{tech.icon}</span>
                ) : (
                  <tech.icon size={40} />
                )}
              </div>
              <span className="text-lg font-semibold">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack


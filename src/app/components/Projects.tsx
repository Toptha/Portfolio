import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'Pincrest',
    description: (
      <>
      A Pinterest clone with enhanced features and a unique twist.{' '}
        <br></br>
        <br></br>
        <center><a href="https://toptha.github.io/Pincrest/" target="_blank" rel="noopener noreferrer">
          Visit it
        </a></center>
      </>
    ),


    image: '/images/pincrest.png',
  },
  {
    title: 'Mori Woodworkers',
    description: (
      <>
        An e-commerce platform for handcrafted furniture and wood crafts.{' '}
        <br></br>
        <br></br>
        <center><a href="https://moriwoodworkers.vercel.app/" target="_blank" rel="noopener noreferrer">
          Visit it
        </a></center>
      </>
    ),
    image: '/images/Mori.png',
  },
  {
    title: 'Complex Calculators',
    description: 'A suite of advanced calculators built with C++.',
    image: '/images/calc.jpeg',
  },
  {
    title: 'Carbon Emissions Tester',
    description: 'A Java-based tool to measure and analyze carbon emissions.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    title: 'Cyberpunk Electronics',
    description: 'A cyberpunk-themed e-commerce website for futuristic electronics.',
    image: '/placeholder.svg?height=300&width=400',
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
              onClick={() => setSelectedProject(index)}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">{projects[selectedProject].title}</h3>
              <p className="text-gray-400 mb-4">{projects[selectedProject].description}</p>
              <button
                className="bg-cyan-500 text-gray-900 px-4 py-2 rounded hover:bg-cyan-400 transition-colors duration-300"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects


import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-cyan-400"
        >
          Preetham S
        </motion.h1>
        <nav>
          <ul className="flex space-x-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="flex space-x-4">
          {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
            <motion.a
              key={index}
              href="https://github.com/Toptha"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header


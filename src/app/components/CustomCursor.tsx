import { motion } from 'framer-motion'

interface CustomCursorProps {
  position: { x: number; y: number }
}

const CustomCursor: React.FC<CustomCursorProps> = ({ position }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-cyan-400 pointer-events-none z-50"
      animate={{ x: position.x - 12, y: position.y - 12 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  )
}

export default CustomCursor


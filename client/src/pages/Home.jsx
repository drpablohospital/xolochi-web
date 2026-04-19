import { motion } from 'framer-motion'
import Hero from '../sections/Hero'
import Philosophy from '../sections/Philosophy'
import HowWeWork from '../sections/HowWeWork'
import ForWho from '../sections/ForWho'
import Differentials from '../sections/Differentials'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Philosophy />
      <HowWeWork />
      <ForWho />
      <Differentials />
    </motion.div>
  )
}

export default Home
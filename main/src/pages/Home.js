import React from 'react';
import Veggie from '../components/Veggie/Veggie';
import Popular from '../components/Popular/Popular';
import {motion} from 'framer-motion'

function Home() {
  return (
    <motion.div>
        <Veggie />
        <Popular />
    </motion.div>
  )
}
export default Home
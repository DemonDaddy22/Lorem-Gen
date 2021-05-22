import { motion } from 'framer-motion';
import './App.scss';
import Description from './components/Description';
import Generator from './components/Generator';
import Header from './components/Header';

const appVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 1,
        },
    },
};

const App = () => {
    return (
        <motion.div variants={appVariants} initial='hidden' animate='visible' className='App'>
            <Header label='Lorem Gen' />
            <Description />
            <Generator />
        </motion.div>
    );
}

export default App;

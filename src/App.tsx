import { motion } from 'framer-motion';
import './App.scss';
import Logo from './assets/logo';
import Description from './components/Description';
import Footer from './components/Footer';
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

const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const App = () => {
    return (
        <motion.div variants={appVariants} initial='hidden' animate='visible' className='App'>
            <motion.div variants={variants} className='logoWrapper'>
                <Logo height='inherit' width='inherit' />
            </motion.div>
            <Header label='Lorem Gen' />
            <Description />
            <Generator />
            <Footer />
        </motion.div>
    );
};

export default App;

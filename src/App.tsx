import { motion } from 'framer-motion';
import './App.scss';
import Description from './components/Description';
import Generator from './components/Generator';
import Header from './components/Header';

const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            when: 'beforeChildren',
            staggerChildren: 0.5,
        },
    },
};

const childVariants = {
    hidden: {
        x: -75,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.15,
            type: 'spring',
            stiffness: 40,
        },
    },
};

function App() {
    return (
        <div className='App'>
            <Header label='Lorem Gen' />
            <Description>
                <motion.div variants={variants} initial='hidden' animate='visible'>
                    <motion.div variants={childVariants}>
                        Quickly generate lorem ipsum text to bootstrap your content!
                    </motion.div>
                    <motion.div variants={childVariants}>
                        It's <em className='pitch'>fast</em>, <em className='pitch'>meaningless</em> and{' '}
                        <em className='pitch'>not-so-boring</em>!
                    </motion.div>
                </motion.div>
            </Description>
            <Generator />
        </div>
    );
}

export default App;

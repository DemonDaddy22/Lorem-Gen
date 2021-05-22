import classes from './styles.module.scss';
import { motion } from 'framer-motion';

const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: [1, 1, 1, 1, 1],
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['10%', '10%', '50%', '50%', '10%'],
        transition: {
            yoyo: Infinity,
            ease: 'easeInOut',
            duration: 2,
            repeatDelay: 0.5,
        },
    },
};

interface LoaderProps {
    loading: boolean;
    color?: string;
    size?: number | string;
}

const Loader: React.FC<LoaderProps> = props => {
    const { loading, color, size } = props;

    return loading ? (
        <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            className={classes.loader}
            style={{ width: size, height: size, backgroundColor: color }}
        ></motion.div>
    ) : null;
};

export default Loader;

Loader.defaultProps = {
    size: 48,
};

import * as React from 'react';
import { motion } from 'framer-motion';
import classes from './styles.module.scss';

const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.25,
            when: 'beforeChildren',
            staggerChildren: 0.45,
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

interface DescriptionProps {
    color?: string;
    style?: React.CSSProperties;
}

const Description = (props: DescriptionProps) => {
    const { color, style } = props;

    return (
        <motion.div
            variants={variants}
            className={classes.description}
            style={{ ...style, color }}
        >
            <motion.div variants={childVariants}>
                Quickly generate lorem ipsum text to bootstrap your content!
            </motion.div>
            <motion.div variants={childVariants}>
                It's <em className={classes.pitch}>fast</em>, <em className={classes.pitch}>meaningless</em> and <em className={classes.pitch}>not-so-boring</em>!
            </motion.div>
        </motion.div>
    );
};

export default Description;

Description.defaultProps = {
    color: '#FFF',
    style: {},
};

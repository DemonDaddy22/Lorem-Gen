import * as React from 'react';
import { motion } from 'framer-motion';
import classes from './styles.module.scss';

export interface HeaderProps {
    label: string;
    color?: string;
    style?: React.CSSProperties;
}

const variants = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.75,
            duration: 0.1,
            type: 'spring',
            stiffness: 50
        }
    }
};

const Header = (props: HeaderProps) => {
    const { label, color, style } = props;

    return (
        <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            className={classes.header}
            style={{ ...style, color }}
        >
            {label}
        </motion.div>
    );
};

export default Header;

Header.defaultProps = {
    color: '#FFF',
    style: {},
};

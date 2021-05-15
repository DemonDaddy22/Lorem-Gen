import * as React from 'react';
import classes from './styles.module.scss';
import { motion } from 'framer-motion';

const variants = {
    hidden: {
        opacity: 0,
        y: 15,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.25,
            delay: 3.5,
            type: 'spring',
            stiffness: 40,
        },
    },
};

interface ButtonProps {
    id: string;
    children: React.ReactNode;
    onClick: () => void;
    style?: React.CSSProperties;
    focus?: boolean;
    disabled?: boolean;
}

const Button = (props: ButtonProps) => {
    const { id, children, onClick, style, focus = false, disabled = false } = props;

    React.useEffect(() => {
        if (focus && document.getElementById(id)) {
            document.getElementById(id)?.focus();
        }
    }, [id, focus]);

    return (
        <motion.button
            variants={variants}
            initial='hidden'
            animate='visible'
            id={id}
            className={classes.generateBtn}
            style={style}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </motion.button>
    );
};

export default Button;

Button.defaultProps = {
    style: {},
};

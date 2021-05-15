import * as React from 'react';
import ErrorImage from '../../assets/error';
import classes from './styles.module.scss';
import { motion } from 'framer-motion';

const variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 2.75,
            duration: 0.25,
            type: 'spring',
            stiffness: 40,
        },
    },
};

interface ErrorProps {
    label: string;
    containerStyle?: React.CSSProperties;
}

const AppError = (props: ErrorProps) => {
    const { label, containerStyle } = props;

    return (
        <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            className={classes.appError}
            style={containerStyle}
        >
            <div className={classes.errorImageWrapper}>
                <ErrorImage height='inherit' width='inherit' />
            </div>
            <div className={classes.errorLabel}>{label}</div>
        </motion.div>
    );
};

export default AppError;

AppError.defaultProps = {
    containerStyle: {},
};

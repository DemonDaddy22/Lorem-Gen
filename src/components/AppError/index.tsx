import * as React from 'react';
import ErrorImage from '../../assets/error';
import classes from './styles.module.scss';
import { motion } from 'framer-motion';
import Button from '../Button';

const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            when: 'beforeChildren',
            staggerChildren: 0.25,
        },
    },
};

interface ErrorProps {
    error: boolean;
    label: string;
    buttonLabel?: string;
    onClick?: () => void;
    containerStyle?: React.CSSProperties;
}

const AppError = (props: ErrorProps) => {
    const { error, label, buttonLabel, onClick, containerStyle } = props;

    return error ? (
        <motion.div variants={variants} className={classes.appError} style={containerStyle}>
            <div className={classes.errorImageWrapper}>
                <ErrorImage height='inherit' width='inherit' />
            </div>
            <div className={classes.errorLabel}>
                {label}
            </div>
            {onClick && (
                <Button id={buttonLabel || label} onClick={onClick} style={{ marginTop: 16 }}>
                    {buttonLabel}
                </Button>
            )}
        </motion.div>
    ) : null;
};

export default AppError;

AppError.defaultProps = {
    containerStyle: {},
};

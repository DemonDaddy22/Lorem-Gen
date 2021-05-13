import * as React from 'react';
import classes from './styles.module.scss';

interface ButtonProps {
    children: React.ReactNode,
    onClick: () => void;
    style?: React.CSSProperties;
}

const Button = (props: ButtonProps) => {
    const { children, onClick, style } = props;

    return (
        <button className={classes.generateBtn} style={style} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

Button.defaultProps = {
    style: {},
};

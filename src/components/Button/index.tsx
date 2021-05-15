import * as React from 'react';
import classes from './styles.module.scss';

interface ButtonProps {
    id: string,
    children: React.ReactNode,
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
        <button id={id} className={classes.generateBtn} style={style} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;

Button.defaultProps = {
    style: {},
};

import * as React from 'react';
import classes from './styles.module.scss';

export interface HeaderProps {
    label: string;
    color?: string;
    style?: React.CSSProperties;
}

const Header = (props: HeaderProps) => {
    const { label, color, style } = props;

    return (
        <div className={classes.header} style={{ ...style, color }}>
            {label}
        </div>
    );
};

export default Header;

Header.defaultProps = {
    color: '#FFF',
    style: {},
};

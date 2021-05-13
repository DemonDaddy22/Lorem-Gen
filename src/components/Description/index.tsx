import * as React from 'react';
import classes from './styles.module.scss';

interface DescriptionProps {
    children: React.ReactNode,
    color?: string,
    style?: React.CSSProperties
}

const Description = (props: DescriptionProps) => {
    const { children, color, style } = props;

    return (
        <div className={classes.description} style={{ ...style, color }}>
            {children}
        </div>
    );
};

export default Description;

Description.defaultProps = {
    color: '#FFF',
    style: {},
};

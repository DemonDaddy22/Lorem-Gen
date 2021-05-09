import * as React from 'react';
import classes from './styles.module.scss';
import { HeaderProps } from '../Header';

interface DescriptionProps extends HeaderProps {}

const Description = (props: DescriptionProps) => {
    const { label, color, style } = props;

    return (
        <div className={classes.description} style={{ ...style, color }}>
            {label}
        </div>
    );
};

export default Description;

Description.defaultProps = {
    color: '#FFF',
    style: {},
};

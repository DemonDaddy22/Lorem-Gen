import * as React from 'react';
import classes from './styles.module.scss';

interface Props {
    count: number;
    label: string;
    min?: number;
    max?: number;
    containerStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    onChange: (e: React.ChangeEvent<HTMLElement>) => void;
}

const CountInput = (props: Props) => {
    const { count, label, min, max, containerStyle, inputStyle, onChange } = props;

    return (
        <div className={classes.inputContainer} style={containerStyle}>
            <div className={classes.inputLabel}>{label}</div>
            <input
                type='number'
                value={count}
                min={min}
                max={max}
                className={classes.input}
                style={inputStyle}
                name='count'
                onChange={onChange}
            />
        </div>
    );
};

export default CountInput;

CountInput.defaultProps = {
    min: 1,
    max: 1000,
    containerStyle: {},
    inputStyle: {},
};

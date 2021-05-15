import * as React from 'react';
import classes from './styles.module.scss';

interface GenerateButtonProps {
    fetchLoremIpsum: (count: number) => void;
    style?: React.CSSProperties;
}

const GenerateButton = (props: GenerateButtonProps) => {
    const { fetchLoremIpsum, style } = props;

    return (
        <button className={classes.generateBtn} style={style} onClick={() => fetchLoremIpsum(4)}>
            Generate
        </button>
    );
};

export default GenerateButton;

GenerateButton.defaultProps = {
    style: {},
};

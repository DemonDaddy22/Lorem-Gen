import * as React from 'react';
import classes from './styles.module.scss';

interface OutputBoxProps {
    choice?: number;
    output: string[];
    style?: React.CSSProperties;
}

const OutputBox = (props: OutputBoxProps) => {
    const { output, style } = props;

    return output?.length ? (
        <div className={classes.outputBox} style={style}>
            <div className={classes.outputContent}>
                {output.map((sentence, i) => (
                    <React.Fragment key={`sentence-${i}`}>
                        {sentence}
                        {i < output.length - 1 && (
                            <>
                                <br />
                                <br />
                            </>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    ) : null;
};

export default OutputBox;

OutputBox.defaultProps = {
    style: {},
};

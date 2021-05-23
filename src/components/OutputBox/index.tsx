import * as React from 'react';
import Loader from '../Loader';
import classes from './styles.module.scss';

interface OutputBoxProps {
    loading: boolean;
    output: string[];
    style?: React.CSSProperties;
}

const OutputBox = (props: OutputBoxProps) => {
    const { loading, output, style } = props;

    return (
        <div className={classes.outputBox} style={style}>
            <div className={classes.outputContent}>
                <div className={classes.loaderWrapper}>
                    <Loader size={16} loading={loading} />
                </div>
                {output?.length
                    ? output.map((sentence, i) => (
                          <React.Fragment key={`sentence-${i}`}>
                              {sentence}
                              {i < output.length - 1 && (
                                  <>
                                      <br />
                                      <br />
                                  </>
                              )}
                          </React.Fragment>
                      ))
                    : ''}
            </div>
        </div>
    );
};

export default OutputBox;

OutputBox.defaultProps = {
    style: {},
};

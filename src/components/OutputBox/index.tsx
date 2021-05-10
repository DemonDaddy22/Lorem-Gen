import * as React from 'react';
import ClipBoard from '../../assets/clipboard';
import ClipBoardChecked from '../../assets/clipboardChecked';
import { CHOICES } from '../Generator';
import classes from './styles.module.scss';

interface OutputBoxProps {
    choice: number;
    output: string[];
    style?: React.CSSProperties;
}

const OutputBox = (props: OutputBoxProps) => {
    const { choice, output, style } = props;
    const [isCopied, setIsCopied] = React.useState(false);

    const handleCopy = React.useCallback(() => {
        if (output?.length) {
            setIsCopied(true);
            const contentString = output.join(choice === CHOICES.PARAGRAPH.id ? '\n\n' : ' ');
            console.log(contentString);
            setTimeout(() => setIsCopied(false), 2000);
        }
    }, [choice, output]);

    return output?.length ? (
        <div className={classes.outputBox} style={style}>
            {output.map((sentence, i) => (
                <div key={`sentence-${i}`}>{sentence}</div>
            ))}
            <div className={classes.copyBtn} onClick={!isCopied ? handleCopy : () => {}}>
                {!isCopied ? <ClipBoard /> : <ClipBoardChecked />}
            </div>
        </div>
    ) : null;
};

export default OutputBox;

OutputBox.defaultProps = {
    style: {},
};

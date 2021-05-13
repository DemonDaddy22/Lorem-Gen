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

const copyTextToClipboard = (content: string) => {
    if (!content) return;

    let textArea = document.createElement('textarea');
    textArea.value = content;
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
    } catch (err) {
        console.error(err);
    }

    document.body.removeChild(textArea);
};

const OutputBox = (props: OutputBoxProps) => {
    const { choice, output, style } = props;
    const [isCopied, setIsCopied] = React.useState(false);

    const handleCopy = React.useCallback(() => {
        if (output?.length) {
            setIsCopied(true);
            const contentString = output.join(choice === CHOICES.PARAGRAPH.id ? '\n\n' : ' ');
            copyTextToClipboard(contentString);
            setTimeout(() => setIsCopied(false), 2000);
        }
    }, [choice, output]);

    return output?.length ? (
        <div className={classes.outputBox} style={style}>
            <div className={classes.copyBtn} onClick={!isCopied ? handleCopy : () => {}}>
                {!isCopied ? <ClipBoard /> : <ClipBoardChecked />}
            </div>
            <div className={classes.outputContent}>
                {output.map((sentence, i) => (
                    <React.Fragment key={`sentence-${i}`}>
                        {sentence}
                        {choice === CHOICES.PARAGRAPH.id && i < output.length - 1 && (
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

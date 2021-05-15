import * as React from 'react';
import Square from '../../assets/square';
import Triangle from '../../assets/triangle';
import { LOREM_API_URI } from '../../constants';
import Button from '../Button';
import Choices from '../Choices';
import CountInput from '../CountInput';
import OutputBox from '../OutputBox';
import classes from './styles.module.scss';
import ClipBoard from '../../assets/clipboard';
import ClipBoardChecked from '../../assets/clipboardChecked';
import AppError from '../AppError';

export const CHOICES = Object.freeze({
    WORD: { id: 0, label: 'Word', key: 'words' },
    SENTENCE: { id: 1, label: 'Sentence', key: 'sentences' },
    PARAGRAPH: { id: 2, label: 'Paragraph', key: 'paragraphs' },
});

export const START_WITH_LOREM_CHOICES = Object.freeze({
    YES: { id: 11, label: 'Yes', key: 'yes' },
    NO: { id: 12, label: 'No', key: 'no' },
});

const Generator = () => {
    const [count, setCount] = React.useState(4);
    const [choice, setChoice] = React.useState(CHOICES.SENTENCE);
    const [output, setOutput] = React.useState([]);
    const [startWithLorem, setStartWithLorem] = React.useState(START_WITH_LOREM_CHOICES.YES);
    const [isCopied, setIsCopied] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const copyTextToClipboard = React.useCallback((content: string) => {
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
            setError(null);
        } catch (err) {
            setError(err);
        }

        document.body.removeChild(textArea);
    }, []);

    const fetchLoremIpsum = async () => {
        setLoading(true);
        try {
            const res = await fetch(
                `${LOREM_API_URI}?q=${choice.key}&count=${count}&startWithLorem=${startWithLorem.id === 11}`
            );
            const data = await res.json();
            setOutput(data?.data ? data.data : []);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCountChange = React.useCallback(e => {
        setCount(e.target.value);
    }, []);

    const handleCopy = React.useCallback(() => {
        if (output?.length) {
            setIsCopied(true);
            const contentString = output.join(choice.id === CHOICES.PARAGRAPH.id ? '\n\n' : ' ');
            copyTextToClipboard(contentString);
            setTimeout(() => setIsCopied(false), 2000);
        }
    }, [choice.id, copyTextToClipboard, output]);

    const renderContent = () => !error && (
        <div className={classes.generator}>
            <div className={classes.optionsWrapper}>
                <CountInput count={count} label='Count' onChange={handleCountChange} />
                <Choices
                    header='Type'
                    choices={[CHOICES.WORD, CHOICES.SENTENCE, CHOICES.PARAGRAPH]}
                    active={choice}
                    onClick={setChoice}
                />
                <Choices
                    header='Start with Lorem Ipsum'
                    choices={[START_WITH_LOREM_CHOICES.YES, START_WITH_LOREM_CHOICES.NO]}
                    active={startWithLorem}
                    onClick={setStartWithLorem}
                />
            </div>
            <div className={classes.outputboxWrapper}>
                <div className={classes.imageOneWrapper}>
                    <Square />
                </div>
                <div className={classes.imageTwoWrapper}>
                    <Square />
                </div>
                <div className={classes.imageThreeWrapper}>
                    <Triangle height={80} width={100} />
                </div>
                <OutputBox style={{ marginTop: 16 }} output={output} choice={choice.id} />
            </div>
            <div className={classes.btnWrapper}>
                <Button id='generate-btn' onClick={fetchLoremIpsum}>
                    Generate
                </Button>
                <Button
                    id='copy-btn'
                    focus
                    onClick={handleCopy}
                    style={{ alignItems: 'center', display: 'flex', gap: 4, paddingRight: 8 }}
                >
                    Cop{isCopied ? 'ied!' : 'y'}
                    {isCopied ? <ClipBoardChecked height={16} /> : <ClipBoard height={16} />}
                </Button>
            </div>
        </div>
    );

    const renderError = () => !loading && error && <AppError label='Something went wrong! Please try again later.' />;

    const renderLoader = () => loading && <h2>Loading...</h2>;

    React.useEffect(() => {
        fetchLoremIpsum();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {renderError()}
            {renderLoader()}
            {renderContent()}
        </>
    );
};

export default Generator;

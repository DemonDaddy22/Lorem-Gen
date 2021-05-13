import * as React from 'react';
import Square from '../../assets/square';
import Triangle from '../../assets/triangle';
import { DEV_LOREM_API_URI } from '../../constants';
import Choices from '../Choices';
import CountInput from '../CountInput';
import GenerateButton from '../GenerateButton';
import OutputBox from '../OutputBox';
import classes from './styles.module.scss';

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
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const fetchLoremIpsum = async () => {
        setLoading(true);
        try {
            const res = await fetch(
                `${DEV_LOREM_API_URI}?q=${choice.key}&count=${count}&startWithLorem=${startWithLorem.id === 11}`
            );
            const data = await res.json();
            setOutput(data?.data ? data.data : []);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCountChange = React.useCallback(e => {
        setCount(e.target.value);
    }, []);

    React.useEffect(() => {
        fetchLoremIpsum();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
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
            <GenerateButton style={{ marginTop: 32 }} fetchLoremIpsum={fetchLoremIpsum} />
        </div>
    );
};

export default Generator;

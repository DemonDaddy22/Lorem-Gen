import * as React from 'react';
import { DEV_LOREM_API_URI } from '../../constants';
import Choices from '../Choices';
import GenerateButton from '../GenerateButton';
import OutputBox from '../OutputBox';
import classes from './styles.module.scss';

export const CHOICES = Object.freeze({
    WORD: { id: 0, label: 'Word', key: 'words' },
    SENTENCE: { id: 1, label: 'Sentence', key: 'sentences' },
    PARAGRAPH: { id: 2, label: 'Paragraph', key: 'paragraphs' },
});

const Generator = () => {
    const [choice, setChoice] = React.useState(CHOICES.SENTENCE);
    const [output, setOutput] = React.useState([]);
    const [startWithLorem, setStartWithLorem] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const fetchLoremIpsum = React.useCallback(
        async (count: number) => {
            setLoading(true);
            try {
                const res = await fetch(
                    `${DEV_LOREM_API_URI}?q=${choice.key}&count=${count}&startWithLorem=${startWithLorem}`
                );
                const data = await res.json();
                setOutput(data?.data ? data.data : []);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        },
        [choice.key, startWithLorem]
    );

    return (
        <div className={classes.generator}>
            <Choices
                choices={[CHOICES.WORD, CHOICES.SENTENCE, CHOICES.PARAGRAPH]}
                active={choice}
                onClick={setChoice}
                containerStyle={{ marginTop: 16 }}
            />
            <OutputBox style={{ marginTop: 16 }} output={output} choice={choice.id} />
            <GenerateButton style={{ marginTop: 16 }} fetchLoremIpsum={fetchLoremIpsum} />
        </div>
    );
};

export default Generator;

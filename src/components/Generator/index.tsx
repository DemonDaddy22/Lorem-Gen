import * as React from 'react';
import { LOREM_API_URI } from '../../constants';
import GenerateButton from '../GenerateButton';
import classes from './styles.module.scss';

const CHOICES = Object.freeze({
    WORD: { id: 0, label: 'Word', key: 'words' },
    SENTENCE: { id: 1, label: 'Sentence', key: 'sentences' },
    PARAGRAPH: { id: 2, label: 'Paragraph', key: 'paragraphs' },
});

const Generator = () => {
    const [choice, setChoice] = React.useState(CHOICES.PARAGRAPH);
    const [output, setOutput] = React.useState([]);
    const [startWithLorem, setStartWithLorem] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const fetchLoremIpsum = async (count: number) => {
        setLoading(true);
        try {
            const res = await fetch(`${LOREM_API_URI}?q=${choice.key}&count=${count}&startWithLorem=${startWithLorem}`);
            const data = await res.json();
            setOutput(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={classes.generator}>
            <GenerateButton style={{ marginTop: 12 }} fetchLoremIpsum={fetchLoremIpsum} />
        </div>
    );
};

export default Generator;

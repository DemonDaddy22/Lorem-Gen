import * as React from 'react';
import Square from '../../assets/square';
import Triangle from '../../assets/triangle';
import {
    DEFAULT_ERROR_MESSAGE,
    LOREM_API_URI,
    START_WITH_LOREM_CHOICES,
    DEFAULT_COUNT,
    OUTPUT_CHOICES
} from '../../constants';
import Button from '../Button';
import Choices from '../Choices';
import CountInput from '../CountInput';
import OutputBox from '../OutputBox';
import classes from './styles.module.scss';
import ClipBoard from '../../assets/clipboard';
import ClipBoardChecked from '../../assets/clipboardChecked';
import AppError from '../AppError';
import { motion } from 'framer-motion';

const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const contentVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
};

const buttonVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.15,
        },
    },
};

const Generator = () => {
    const [count, setCount] = React.useState(DEFAULT_COUNT);
    const [choice, setChoice] = React.useState(OUTPUT_CHOICES.SENTENCE);
    const [output, setOutput] = React.useState([]);
    const [startWithLorem, setStartWithLorem] = React.useState(START_WITH_LOREM_CHOICES.YES);
    const [isCopied, setIsCopied] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(DEFAULT_ERROR_MESSAGE);
    const [copyFocus, setCopyFocus] = React.useState(false);
    const [refresh, setRefresh] = React.useState(false);

    const fetchLoremIpsum = async () => {
        setLoading(true);
        try {
            const res = await fetch(
                `${LOREM_API_URI}?q=${choice.key}&count=${count}&startWithLorem=${startWithLorem.id === 11}`
            );
            const data = await res.json();
            if (data?.err?.isError) throw new Error(data.err?.message);
            setOutput(data?.data ? data.data : []);
            setCopyFocus(true);
            if (error) setError(false);
        } catch (err) {
            setError(true);
            setErrorMessage(err.message);
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        fetchLoremIpsum();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        if (refresh) {
            fetchLoremIpsum();
            setRefresh(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh]);

    const refreshGenerator = React.useCallback(() => {
        setError(false);
        setErrorMessage(DEFAULT_ERROR_MESSAGE);
        setCount(DEFAULT_COUNT);
        setRefresh(true);
    }, []);

    const copyTextToClipboard = React.useCallback(
        (content: string) => {
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
                if (error) setError(false);
            } catch (err) {
                setError(true);
                setErrorMessage(err.message);
            } finally {
                setCopyFocus(false);
            }

            document.body.removeChild(textArea);
        },
        [error]
    );

    const handleCountChange = React.useCallback(e => {
        setCount(e.target.value);
    }, []);

    const handleCopy = React.useCallback(() => {
        if (output?.length) {
            setIsCopied(true);
            const contentString = output.join(choice.id === OUTPUT_CHOICES.PARAGRAPH.id ? '\n\n' : ' ');
            copyTextToClipboard(contentString);
            setTimeout(() => setIsCopied(false), 2000);
        }
    }, [choice.id, copyTextToClipboard, output]);

    const renderContent = () =>
        !error && (
            <motion.div variants={contentVariants} className={classes.generator}>
                <div className={classes.optionsWrapper}>
                    <CountInput count={count} label='Count' onChange={handleCountChange} />
                    <Choices
                        header='Type'
                        choices={[OUTPUT_CHOICES.WORD, OUTPUT_CHOICES.SENTENCE, OUTPUT_CHOICES.PARAGRAPH]}
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
                    <OutputBox loading={loading} style={{ marginTop: 16 }} output={output} />
                </div>
                <motion.div variants={buttonVariants} className={classes.btnWrapper}>
                    <Button id='generate-btn' onClick={fetchLoremIpsum}>
                        Generate
                    </Button>
                    <Button
                        id='copy-btn'
                        focus={copyFocus}
                        onClick={handleCopy}
                        style={{ alignItems: 'center', display: 'flex', gap: 4, paddingRight: 8 }}
                    >
                        Cop{isCopied ? 'ied!' : 'y'}
                        {isCopied ? <ClipBoardChecked height={16} /> : <ClipBoard height={16} />}
                    </Button>
                </motion.div>
            </motion.div>
        );

    const renderError = () =>
        !loading && <AppError error={error} label={errorMessage} buttonLabel='Refresh' onClick={refreshGenerator} />;

    return (
        <motion.div variants={variants}>
            {renderError()}
            {renderContent()}
        </motion.div>
    );
};

export default Generator;

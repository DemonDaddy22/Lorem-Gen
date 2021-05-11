import React from 'react';
import classes from './styles.module.scss';

interface Choice {
    id: number;
    key: string;
    label: string;
}

interface ChoicesProps {
    header: string;
    choices: Choice[];
    active: Choice;
    onClick: (choice: Choice) => void;
    choicesStyle?: React.CSSProperties;
    choiceStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
}

const Choices = (props: ChoicesProps) => {
    const { header, choices, active, onClick, choiceStyle, choicesStyle, containerStyle } = props;

    return choices?.length ? (
        <div style={containerStyle}>
            <div className={classes.choicesHeader}>{header}</div>
            <div className={classes.choices} style={choicesStyle}>
                {choices.map((choice: Choice) => (
                    <div
                        key={`choice-${choice.id}`}
                        onClick={() => onClick(choice)}
                        className={`${classes.choice} ${active.id === choice.id && classes.activeChoice}`}
                        style={choiceStyle}
                    >
                        {choice.label}
                    </div>
                ))}
            </div>
        </div>
    ) : null;
};

export default Choices;

Choices.defaultProps = {
    choiceStyle: {},
    choicesStyle: {},
    containerStyle: {},
};

import classes from './styles.module.scss';
import { motion } from 'framer-motion';
import React from 'react';
import { FOOTER_LINKS } from '../../constants';
import FooterLink from '../FooterLink';

const variants = {
    hidden: {
        opacity: 0,
        x: '-50%',
        y: 50,
    },
    visible: {
        opacity: 1,
        x: '-50%',
        y: 0,
        transition: {
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
        },
    },
};

interface FooterProps {
    style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = props => {
    const { style } = props;

    const getLinkKeys = React.useMemo(() => Object.keys(FOOTER_LINKS), []);

    return (
        <motion.div variants={variants} className={classes.footer} style={style}>
            {getLinkKeys.map((key: string, i: number) => (
                <React.Fragment key={key}>
                    <FooterLink link={FOOTER_LINKS[key]} />
                    {i < getLinkKeys.length - 1 && <div className={classes.divider}></div>}
                </React.Fragment>
            ))}
        </motion.div>
    );
};

export default Footer;

Footer.defaultProps = {
    style: {},
};

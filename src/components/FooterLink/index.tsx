import React from 'react';
import { IFooterLinkValue } from '../../constants';
import classes from './styles.module.scss';

interface FooterLinkProps {
    style?: React.CSSProperties;
    link: IFooterLinkValue;
}

const FooterLink: React.FC<FooterLinkProps> = props => {
    const { style, link } = props;

    return (
        <a target='__blank' href={link.uri} className={classes.footerLink} style={style}>
            {link.label}
        </a>
    );
};

export default FooterLink;

FooterLink.defaultProps = {
    style: {},
};

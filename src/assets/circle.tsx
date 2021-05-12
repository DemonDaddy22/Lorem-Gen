interface Props {
    height?: number;
    width?: number;
    primaryColor?: string;
    secondaryColor?: string;
}

const Circle = (props: Props) => {
    const { height, width, primaryColor, secondaryColor } = props;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 173.976 169.883'>
            <g transform='translate(3.535 3.535)'>
                <circle cx='69' cy='69' r='69' transform='translate(14.453 12.406)' fill={primaryColor} />
                <line
                    x2='166.906'
                    y2='162.813'
                    fill='none'
                    stroke={secondaryColor}
                    stroke-linecap='round'
                    stroke-width='5'
                />
                <line
                    x2='162.813'
                    y2='166.906'
                    transform='translate(166.906) rotate(90)'
                    fill='none'
                    stroke={secondaryColor}
                    stroke-width='5'
                />
            </g>
        </svg>
    );
};

export default Circle;

Circle.defaultProps = {
    height: 100,
    width: 100,
    primaryColor: '#393f5e',
    secondaryColor: '#484f77',
};

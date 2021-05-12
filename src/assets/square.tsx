interface Props {
    height?: number;
    width?: number;
    color?: string;
}

const Square = (props: Props) => {
    const { height, width, color } = props;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 170 170'>
            <circle cx='10' cy='10' r='10' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(30)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(60)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(90)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(120)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(150)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(0 30)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(30 30)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(60 30)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(90 30)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(120 30)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(150 30)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(0 60)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(30 60)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(60 60)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(90 60)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(120 60)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(150 60)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(0 90)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(30 90)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(60 90)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(90 90)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(120 90)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(150 90)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(0 120)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(30 120)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(60 120)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(90 120)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(120 120)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(150 120)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(0 150)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(30 150)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(60 150)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(90 150)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(120 150)' fill={color} />
            <circle cx='10' cy='10' r='10' transform='translate(150 150)' fill={color} />
        </svg>
    );
};

export default Square;

Square.defaultProps = {
    height: 100,
    width: 100,
    color: '#393f5e',
};

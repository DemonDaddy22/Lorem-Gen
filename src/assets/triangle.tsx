interface Props {
    height?: number;
    width?: number;
    color?: string;
}

const Triangle = (props: Props) => {
    const { height, width, color } = props;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 290.568 225.04'>
            <path
                d='M288.252,240H35.748a18.924,18.924,0,0,1-10.081-2.855,19.256,19.256,0,0,1-8.941-16.822A18.926,18.926,0,0,1,20,210.37L21.6,208H301v-2.074l3,4.444a18.926,18.926,0,0,1,3.274,9.954,19.256,19.256,0,0,1-8.94,16.822A18.924,18.924,0,0,1,288.252,240ZM283.5,180H40.5l20.25-30h202.5L283.5,180v0h0Zm-39.15-58H79.649L99.9,92H224.1l20.249,30v0h0ZM205.2,64H118.8l27.452-40.669a18.753,18.753,0,0,1,7.04-6.278,19.167,19.167,0,0,1,17.416,0,18.753,18.753,0,0,1,7.04,6.278L205.2,64v0h0Z'
                transform='translate(-16.716 -14.961)'
                fill={color}
            />
        </svg>
    );
};

export default Triangle;

Triangle.defaultProps = {
    height: 100,
    width: 125,
    color: '#393f5e',
};

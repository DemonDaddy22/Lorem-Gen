export const DEV_LOREM_API_URI = 'http://localhost:3001/api/v1/lorem';
export const PROD_LOREM_API_URI = 'https://demondaddy-api-den.herokuapp.com/api/v1/lorem';

export const LOREM_API_URI = process.env.NODE_ENV === 'development' ? DEV_LOREM_API_URI : PROD_LOREM_API_URI;
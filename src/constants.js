export const DEV_LOREM_API_URI = 'http://localhost:3030/api/v1/lorem';
export const PROD_LOREM_API_URI = 'https://demondaddy-api-den.herokuapp.com/api/v1/lorem';

export const LOREM_API_URI = process.env.NODE_ENV === 'development' ? DEV_LOREM_API_URI : PROD_LOREM_API_URI;

export const DEFAULT_ERROR_MESSAGE = 'Something went wrong! Please try again later.';

export const DEFAULT_COUNT = 4;

export const CHOICES = Object.freeze({
    WORD: { id: 0, label: 'Word', key: 'words' },
    SENTENCE: { id: 1, label: 'Sentence', key: 'sentences' },
    PARAGRAPH: { id: 2, label: 'Paragraph', key: 'paragraphs' },
});

export const START_WITH_LOREM_CHOICES = Object.freeze({
    YES: { id: 11, label: 'Yes', key: 'yes' },
    NO: { id: 12, label: 'No', key: 'no' },
});
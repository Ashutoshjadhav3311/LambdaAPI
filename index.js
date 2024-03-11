import translate from 'translate';

export const handler = async (event) => {
    try {
        const body = JSON.parse(event.body);
        const { text, to,from } = body;
        
        if (!text || !to) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required parameters' })
            };
        }

        const translatedText = await translate(text, { to,from });
        
        return {
            statusCode: 200,
            body: JSON.stringify({ translatedText })
        };
    } catch (error) {
        console.error('Translation error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'An error occurred during translation' })
        };
    }
};

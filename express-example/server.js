//Authorization: Bearer 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
/*
V insomnii jsou example requesty savenuty v collection
*/

const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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",
});
const jsonParser = bodyParser.json(); //very crucial, the body is not parsed without this
const openai = new OpenAIApi(configuration);
const app = express();

app.get('/', (req, res) => {
    res.send('Successful get');
});

//this works, dont touch
app.post('/', jsonParser,async (req, res) => {
    try {

        const { content } = req.body;

        // Generate response from ChatGPT
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'You are a helpful assistant.', // Optional system message
                },
                {
                    role: 'user',
                    content: "Define in one sentence: " + content, // User's text message
                },
            ],
        });


        const answer = response.data.choices[0].message;
        res.json({ answer });
        console.log(answer);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }


});
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.listen(3000, () => console.log('Definition app is listening on port 3000.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Authorization: Bearer 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
/*
V insomnii jsou example requesty savenuty v collection

TODO: take selection text
* */

const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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",
});
const jsonParser = bodyParser.json()

const openai = new OpenAIApi(configuration);
const app = express();

app.get('/', (req, res) => {
    res.send('Successful get');
});

//this works, dont touch
app.post('/', jsonParser,async (req, res) => {
    /*
    const pararms = req.body;
    console.log(pararms);
    const gptResponse = await openai.createChatCompletion({

        model: 'gpt-3.5-turbo',

        messages: [{role: "user", pararms}],


    });

    // Send a response
    //res.status(200).send('Text received');

    //res.send(gptResponse.toJSON());
    console.log(gptResponse.data.choices[0].message);
    res.send(gptResponse.data.choices[0].message);
*/
    try {

        const { content } = req.body; // Assuming the incoming JSON has a 'content' field with the text data

        // Generate response from ChatGPT
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo', // Specify the desired ChatGPT model
            messages: [
                {
                    role: 'system',
                    content: 'You are a helpful assistant.', // Optional system message
                },
                {
                    role: 'user',
                    content: content, // User's text message
                },
            ],
        });

        // Extract the generated answer from the response
        //const answer = response.choices[0].message.content;
        const answer = response.data.choices[0].message;
        // Return the answer as the response
        res.json({ answer });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }

    console.log(req);
});


app.listen(3000, () => console.log('Definition app is listening on port 3000.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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


const openai = new OpenAIApi(configuration);
const app = express();

app.get('/', (req, res) => {
    res.send('Successful get');
});

//this works, dont touch
app.post('/', async (req, res) => {
    const pararms = req.toString();
    console.log(req.toString());
    const gptResponse = await openai.createChatCompletion({

        model: 'gpt-3.5-turbo',

        messages: [{role: "user", content: pararms}],


    });
    res.send(gptResponse);

    // Send a response
    res.status(200).send('Text received');
    //res.send(gptResponse.toString());

});

app.listen(3000, () => console.log('Definition app is listening on port 3000.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


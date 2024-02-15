const express = require('express');
const { GPT } = require('@openai/gpt');
const fetch = require('node-fetch'); // Přidáno
const app = express();
const gpt = new GPT('YOUR_OPENAI_API_KEY');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.post('/generate-response', async (req, res) => {
    const { prompt } = req.body;
    const response = await gpt.complete(prompt);
    res.send(response.choices[0].text);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


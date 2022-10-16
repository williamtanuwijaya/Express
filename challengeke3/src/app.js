const express = require('express');
const path = require("path")
const app = express();
const nodeFetch = require('cross-fetch');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/kumpulan_challenge3dan4'));


app.post('/api-custom', (req, res) => {
    res.json(
        Array.from({length: 10})
            .map((_, index) => ({id: index, name: `Data ${index}`}))
    );
});

app.get('/:parameterDynamic', async (req, res) => {   
    const slug = req.params.parameterDynamic;  
    const externalData = await nodeFetch("https://jsonplaceholder.typicode.com/posts").then(e => e.json())
    try {     
        res.render(`page/${slug}`, {
            inputQuery: req.query.input,
            inputQuery2: req.query.input2,
            slug,
            externalData
        });
    } catch (e) {
        res.send('Page Not Found');
    }
})
console.log('App is listening at 3000');
app.listen(3000);
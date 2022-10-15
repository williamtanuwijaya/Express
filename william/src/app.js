const express = require('express')
const path = require("path")
const app = express()
const nodeFetch = require('cross-fetch')

// untuk static file (css)
app.use(express.static('public'))

// mengeset view engine menjadi ejs
app.set('view engine', 'ejs')
// mengeset ejs folder directory
app.set('views', path.join(__dirname, '/template-baseng'))

// membuat api custo data
app.post('/api-custom', (req, res) => {
    res.json(
        Array.from({length: 10})
            .map((_, index) => ({id: index, name: `Data ${index}`}))
    )
})

app.get('/:parameterDynamic', async (req, res) => {
    // mengambil parameter dynamic
    const slug = req.params.parameterDynamic
    // mengambil data external dari public api
    const externalData = await nodeFetch("https://jsonplaceholder.typicode.com/posts").then(e => e.json())
    try {
        // men trigger untuk merender ejs sesuai folder views
        res.render(`page/${slug}`, {
            inputQuery: req.query.input,
            inputQuery2: req.query.input2,
            slug,
            externalData
        })
    } catch (e) {
        res.send('Page Not Found')
    }
})

for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log('App is listening at 3000')
app.listen(3000)
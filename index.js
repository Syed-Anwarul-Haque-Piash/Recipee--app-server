const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000
app.use(cors());
const recipe=require("./data/data.json")

app.get('/', (req, res) => {
  res.send('New recipe!')
})
app.get('/recipes', (req, res) => {
    res.send(recipe)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
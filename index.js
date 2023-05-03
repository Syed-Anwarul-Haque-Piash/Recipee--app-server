const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT ||5000
app.use(cors());
const recipe=require("./data/data.json")

app.get('/', (req, res) => {
  res.send('New recipe!')
})
app.get('/recipes', (req, res) => {
    res.send(recipe)
})
app.get('/recipes/:id',(req,res)=>{
  const id=req.params.id;
  console.log(id)
  const selectedRecipe=recipe.find(rec=>rec.id==id);
  res.send(selectedRecipe);
  
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
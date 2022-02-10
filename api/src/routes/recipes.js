const router = require('express').Router()
const {Recipe} = require('../db')
const getAllData = require('./functions.js')

//GET QUERY 
router.get('/', async (req, res) => {
  const {name} = req.query
  //cambie aca irian todas las recetas
  const Allrecipes = await getAllData();
  if(name){
    const recipes = await Allrecipes.filter(r => r.name.toLowerCase().includes(name.toLowerCase()))
    recipes.length ? res.status(200).json(recipes) : res.status(404).send('No esta la receta')
  }else{
    res.status(200).send(Allrecipes);
    // res.sendStatus(500).json({error: 'No se ingreso nombre de receta'})
  }
})

//GET PARAMS
router.get('/:id', async (req, res) => {
  const {id} = req.params
  console.log('id', id)
  //cambie aca irian todas las recetas
  const Allrecipes = await getAllData();
  console.log('Allrecipes', Allrecipes)
  if(id){
    //xq el filter y no find?
    //     const findId = recipes.find(p => p.id === parseInt(id))
    const recipes = await Allrecipes.filter(r => r.id == id)
    recipes.length ? res.status(200).json(recipes) : res.status(404).send('No existe la receta con el ID ')
  }
  // else{
    // res.status(200).send(Allrecipes);
    // res.sendStatus(500).json({error: 'No se ingreso ID'})
  // }
  // res.send("Estamos ID")
})

//ver dsp otra forma de promesa 
// router.get('/recipes/:id', async function (req, res) {
//   const {id} = req.params;

//   let recipesDb = await Recipe.findByPk(id, {
//     include: Diet    
//   });
//   if(recipesDb) res.status(200).json(recipesDb)
      
//   const recipesApi = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=84071c4e45bb4ac1af56cdf4efb05a60&number=5&addRecipeInformation=true')
  
//   recipesApi = recipesApi.json()
//   console.log('recipesApi', recipesApi)

//   if(recipesApi){
//     res.status(200).send("salio")
//   }else{
//     res.status(404).send("ERROR")
//   }
// })

router.post('/', (req, res) => {
  const {name, summary, spoonacularScore, healthScore, analyzedInstructions} = req.body;
  Recipe.create({
    name, summary, spoonacularScore, healthScore, analyzedInstructions
  }).then(recipe => {
    res.status(200).json(recipe);
  }).catch(err => {
    res.status(404).json({err: err});
  })
});

// router.post('/recipes', async (req, res) => {
//   const {name, summary, spoonacularScore, healthScore, analyzedInstructions} = req.body;
//   try{
//     const newRecipes = await Recipe.create({
//       name, summary, spoonacularScore, healthScore, analyzedInstructions
//     });
//     res.json(newRecipes);
//   }catch(err){
//     res.status(404).send({error: err});
//   }
// });

module.exports = router;

// {
//   "name": "Harry",
//   "summary": "Potter",
//   "spoonacularScore": 9,
//   "healthScore": 8,
//   "analyzedInstructions": [1, 2]
// }
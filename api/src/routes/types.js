const router = require('express').Router();
const {Diet} = require('../db')
const getInfoApi = require('./functions.js')
// const getInfoDb = require('./functions.js')


//traer solo name de la dieta PENDIENTE
router.get('/', async (req, res) => {
  const getApi = await getInfoApi();
  const recipes = getApi.map(r => r.diets);
  const recipesEach = recipes.flat();
  try {
    recipesEach.forEach(diet => {
      Diet.findOrCreate({
        where: {name : diet}
      });
    });
    const diets = await Diet.findAll()
    res.status(200).json(diets);
  } catch {
    res.status(404).json({err: 'Error al cargar las dietas'})
  }
});

// router.get('/db', async (req, res) => {
//   const getDb = await getInfoDb();
//   if(getDb.length) {
//     res.status(200).json(getDb);
//   } else {
//     res.status(400).send("Error")
//   }
// })

module.exports = router;
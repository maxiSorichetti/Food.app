const router = require('express').Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const types = require('./types.js');
const recipes = require('./recipes.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recipes);
router.use('/types', types);

// router.get('/', (req, res) => {
//   res.status(200).send("BIENVENIDOS")
// })

module.exports = router;


const axios = require('axios');
const {Diet, Recipe} = require('../db');

const getInfoApi = async () => {
  //pasar la API KEY DE ENV
  const infoApi = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=84071c4e45bb4ac1af56cdf4efb05a60&number=5&addRecipeInformation=true');
  // console.log('data getInfoApi 1111111', infoApi.data.results);

  const info = infoApi.data.results.map(r => {
    const {title, image, diets, dishTypes, summary, spoonacularScore, healthScore, analyzedInstructions, id} = r;
    return {
      id,
      name: title,
      image,
      diets: diets.map(d => d),
      dishTypes: dishTypes.map(d => d),
      summary,
      spoonacularScore,
      healthScore,
      analyzedInstructions: analyzedInstructions[0]?.steps.map(d => d.step)
    };
  });
  console.log('info', info);
  return info;
}
const getInfoDb = async () => {
  const recipesDb = await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ['name'],
      //este through es una comprobacion que va siempre, porque me quiero traer ese atributo
      through: {
        attributes: []
      }
    }
  });
  // console.log('recipesDb', recipesDb)
  // console.log('recipesDb recipeeeeeeeeeeee', recipesDb.recipe)
  // const findRecipes = recipesDb.map(r => {
  //   r.dataValue
  // })
  // console.log('findRecipessssssssssssssss', findRecipes)
  return recipesDb;
  // return recipesDb?.map(r => r.recipe.dataValues)
};

//traigo mi info de la db, e incluyo el modelo Diet, para traer la receta con la dieta mediante este atributo. Traeme la receta y el nombre de la dieta
//   const getInfoDb = async () => {
//     const recipesDb = await Recipe.findAll({
//       // include: {
//       //   model: Diet,
//       //   attributes: ['name'],
//       //   //este through es una comprobacion que va siempre, porque me quiero traer ese atributo
//       //   through: {
//       //     attributes: []
//       //   }
//       // }
//     });
//     console.log('recipesDb', recipesDb)
//     console.log('recipesDb recipeeeeeeeeeeee', recipesDb.recipe)
//     const findRecipes = recipesDb.map(r => { 
//       r.dataValue
//     })
//     console.log('findRecipessssssssssssssss', findRecipes)
//     return recipesDb;
//     // return recipesDb?.map(r => r.recipe.dataValues)
// };

const getAllData = async () => {
  const infoApi = await getInfoApi();
  // console.log('infoApi', infoApi);
  const infoDb =  await getInfoDb();
  console.log('infoDb 111111111111', infoDb);
  const totalData = infoApi.concat(infoDb);
  // console.log('totalData', totalData);
  return totalData;
}

module.exports = getAllData, getInfoApi, getInfoDb ; 

//traigo mi info de la db, e incluyo el modelo Diet, para traer la receta con la dieta mediante este atributo. Traeme la receta y el nombre de la dieta
// const getInfoDb = async () => {
//   const recipesDb = await Recipe.findAll({
//     include: {
//       model: Diet,
//       attributes: ['name'],
//       //este through es una comprobacion que va siempre, porque me quiero traer ese atributo
//       through: {
//         attributes: []
//       }
//     }
//   });
//   console.log('recipesDb', recipesDb)
//   console.log('recipesDb recipeeeeeeeeeeee', recipesDb.recipe)
//   const findRecipes = recipesDb.map(r => {
//     r.dataValue
//   })
//   console.log('findRecipessssssssssssssss', findRecipes)
//   return recipesDb;
//   // return recipesDb?.map(r => r.recipe.dataValues)
// };
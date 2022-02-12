import './App.css';
import {Routes, Route} from 'react-router-dom'
// import { Provider } from 'react-redux'

import {LandingPage} from './features/LandingPage'
import {Home} from './features/HomeRecipes'
import {DetailRecipe} from './features/DetailRecipe'
import {CreateRecipe} from './features/CreateRecipe'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact={true} element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detailrecipe/:id' element={<DetailRecipe />} />
        <Route path='/createrecipe' element={<CreateRecipe />} />
      </Routes>
    </div>
  );
}

export {App};

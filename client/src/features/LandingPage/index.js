// import React from 'react';
import './index.css'
import {Link} from 'react-router-dom'

// class LandingPage extends React.Component {
//   render(){
//     console.log('this.props', this.props)
//     return <p>
//       hola CLASS {this.props.price}
//     </p>
//   }
// }

// export default Hola

// si es constante para importar va {}
const LandingPage = ({price}) => {
  return (
    <div className="containerLanding">
      <h2>BIENVENIDOSSSSS {price}</h2>
      <Link to="/home">
        {<button>INGRESE</button>}
      </Link>
    </div>
  )
}

export { LandingPage }



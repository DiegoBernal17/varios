import React from 'react'
import { 
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const StaticSite =  () => (
  <Router>
    <div>
      <h1>Primeros pasos con React Router</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/acerca">Acerca</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <hr/>
      <Route exact path="/" component={Home} />
      <Route path="/acerca" component={Acerca} />
      <Route path="/servicios" component={Servicios} />
      <Route path="/contacto" component={Contacto} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Hola bienvenid@s a mi WebApp React</h2>
  </div>
)

const Acerca = () => (
  <div>
    <h2>Hola soy tu amigo Diego</h2>
  </div>
)

const Servicios = () => (
  <ul>
    <li>Instrucción y capacitación web</li>
    <li>Diseño y desarrollo web</li>
  </ul>
)

const Contacto = ({ match }) => (
  <div>
    <h2>Info y contacto</h2>
    <Route path={`{match.url}/:contactoInfo`} component={InfoContacto} />
    {
      // Forma del componente no recomendada (mala practica)
    }
    <Route exact path={match.url} render={() => (
      <h2>Mantente en contacto</h2>
    )}/>
    <ul>
      <li><Link to={`${match.url}/email`}>Email</Link></li>
      <li><Link to={`${match.url}/web`}>Sitio web</Link></li>
      <li><Link to={`${match.url}/ubicacion`}>Ubicacion</Link></li>
    </ul>
    {
      // MALAS PRACTICAS >
    }
    <Route path={`${match.url}/email`} render={() => (
			<a href="mailto:diego.bernal17@gmail.com" target="_blank">diego.bernal17@gmail.com</a>
		)} />
		<Route path={`${match.url}/web`} render={() => (
			<a href="http://doublearray.me" target="_blank">Mi sitio web</a>
		)} />
		<Route path={`${match.url}/ubicacion`} render={() => (
			<a href="https://www.google.com.mx/maps/place/Parque+Arboledas/@19.3782554,-99.1644729,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ffa3f81151c7:0x6d8da7a2f98d9c75!8m2!3d19.3782504!4d-99.1622842?hl=es-419" target="_blank">México, CDMX</a>
		)} />
  </div>
)

const InfoContacto = ({match}) => (
  <div>
    <h4>{match.params.contactoInfo}</h4>
  </div>
)

export default StaticSite
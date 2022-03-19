import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'

import Home from './components/Home'
import Contato from './components/Contato'
import Destinos from './Pages/Destino'
import DestinosCreate from './Pages/Destino/Create'
import Promo from './components/Promo'

import { BrowserRouter as Router, 
  Routes, 
  Route, 
  NavLink } from 'react-router-dom';


const App = () => {
  
  return ( 
    <Router>
      
    <div className="App">
      <Navbar className="navbar" bg="myTheme" variant="dark" 
      fixed="top" expand="lg" collapseOnSelect>
          <Navbar.Brand className="logo">
          <NavLink  to="/" activeclassname="active">
            RecodeTrip &#128746;
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link href="/Destinos">Destinos</Nav.Link>
            <Nav.Link href="/Promocoes">Promoçoes</Nav.Link>
            <Nav.Link href="/Contato">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>

      </Navbar>
      
      
    </div>
    
    <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contato" element={<Contato />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/Destinos-Create" element={<DestinosCreate />} />
        <Route path="/Destinos-Update/:id" element={<DestinosCreate />} />
        <Route path="/promocoes" element={<Promo />} />
			</Routes>
      <footer className="footer text-muted">
        <div className="container">
          <a href="#"><img src="https://cdn.icon-icons.com/icons2/791/PNG/128/FB_icon-icons.com_65484.png" /></a>
          <a href="#"><img src="https://cdn.icon-icons.com/icons2/2845/PNG/512/instagram_logo_icon_181283.png" /></a>
          <a href="#"><img src="https://cdn.icon-icons.com/icons2/622/PNG/128/whatsapp-logo_icon-icons.com_57054.png" /></a>
          <p><br />Horário de Atendimento <br/>Segunda à Sexta: 09h às 20h <br/>Sábado e feriados: 09h às 18h<br/>SAC: (99) 99999-9999</p>
        </div>
      </footer>
    </Router>
    
   );
}
 
export default App;
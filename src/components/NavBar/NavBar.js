import React, { Component } from 'react'
import {BrowserRouter as Router , Link , Route} from 'react-router-dom'
import {Navbar , Nav , NavDropdown} from 'react-bootstrap';
import ListarProdutos from '../ListarProdutos/ListarProdutos';
import AddProduct from "../AdicionarProduto"
import Home from '../Home/Home'


export default class NavBar extends Component {
    render() {
        return (<Router>
                   <Navbar bg="dark" variant="dark" expand="lg">
                        <Link exact="true" to="/"><Navbar.Brand>React-Bootstrap</Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <NavDropdown title="Produtos" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link exact="true"  to="/addProduct">Entrada de Produtos</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link exact="true"  to="/listarProdutos">Listar Produtos</Link></NavDropdown.Item>
                            </NavDropdown>
                            {/* <NavDropdown title="Relatorios" id="basic-nav-dropdown">
                                <NavDropdown.Item ><Link exact="true"  to="/relatorioDeSaida">Relatorio de Saida</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link  exact="true" to="/relatorioDeEntrada">Relatorio de Entrada</Link></NavDropdown.Item>
                            </NavDropdown> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/listarProdutos" component={ListarProdutos}/>
                    <Route exact path="/addProduct" component={AddProduct}/>
                    <Route exact path="/saidaProduto"/>
                    <Route exact path="/relatorioDeSaida"/>
                    <Route exact path="/relatorioDeEntrada"/>
                </Router>
        )
    }
}

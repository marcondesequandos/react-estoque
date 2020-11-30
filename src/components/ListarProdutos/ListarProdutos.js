import React, { Component , useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {Table} from 'react-bootstrap'
import Swal from 'sweetalert2'
import {getAllProducts , changeProduct} from '../../store/FetchActions'
import "./style.css";
export default function ListarProdutos(){

        
        return (
            <div className="" id="containerLista">
                <div id="tituloListagem">
                    <h4>Lista de produtos</h4>
                </div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Modelo</th>
                        <th>Cor</th>
                        <th>Preço/Compra</th>
                        <th>Preço/Venda</th>
                        <th>QTD</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    

                    </tbody>
                </Table>
            </div>
        );
    }

import React, {useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {Table} from 'react-bootstrap'
import Swal from 'sweetalert2'
import {getAllProducts , changeProduct , deleteProduct} from '../../store/FetchActions'
import "./style.css";
export default function ListarProdutos(){

const dispatch = useDispatch()    

        const products = useSelector(store => store.reducerProduto)

        useEffect(()=>{
            dispatch(getAllProducts())
            } , [dispatch])
           


        
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
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.nome}</td>
                                <td>{product.modelo}</td>
                                <td>{product.cor}</td>
                                <td>{product.precoCompra}</td>
                                <td>{product.precoVenda}</td>                               
                                <td>{product.quantidade}</td>                               
                                <td>
                                    <button className="btn btn-success" onClick={()=>enterProduct(product , dispatch)} >Entrada</button>
                                    <button className="ml-2 btn btn-danger" onClick={()=>quitProduct(product , dispatch)} >Saída</button>                                    
                                </td>
                            </tr>
                        ))}
 

                    </tbody>
                </Table>
            </div>
        );


    }
    

    async function enterProduct(product , dispatch)
    {       
        const { value: formValues } = await Swal.fire({
            title: 'Entrada de Produto',
            html:
              '<input id="id" readonly value="'+product.id+'" class="swal2-input">' +
              '<input id="nome" readonly value="'+product.nome+'" class="swal2-input">' +
              '<input id="modelo" readonly value="'+product.modelo+'" class="swal2-input">' +
              '<input id="cor" readonly value="'+product.cor+'" class="swal2-input">' +
              '<input id="precoCompra" readonly value="'+product.precoCompra+'" class="swal2-input">' +
              '<input id="precoVenda" readonly value="'+product.precoVenda+'" class="swal2-input">' +
              '<input id="quantidade" type="number" value="'+product.quantidade+'" class="swal2-input">' ,
            focusConfirm: false,
            preConfirm: () => {
                let newProduct = {
                    id : document.getElementById('id').value,
                    nome : document.getElementById('nome').value,
                    modelo : document.getElementById('modelo').value,
                    cor : document.getElementById('cor').value,
                    precoCompra : document.getElementById('precoCompra').value,
                    precoVenda : document.getElementById('precoVenda').value,
                    quantidade : document.getElementById('quantidade').value

                }

                dispatch(changeProduct(newProduct))

            }
          })
          
          if (formValues) {
            Swal.fire(JSON.stringify(formValues))                       
          }
          
          

          
    }



    function quitProduct(product , dispatch)
    {
        let currentProduct = product.id
        
        console.log(currentProduct)
        dispatch(deleteProduct(currentProduct))
        
    }


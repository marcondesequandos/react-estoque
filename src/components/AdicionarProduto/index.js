import React , {useState} from 'react'
import "./style.css";
import { useDispatch } from 'react-redux'
import {insertProduct} from '../../store/FetchActions'
export default function AddProduct() {

const dispatch = useDispatch()



    const [form , setForm] = useState({
        nome : '',
        modelo : '',
        cor : '',
        precoCompra : '',
        precoVenda : '',
        quantidade : 1,
    })

    function formChange(e)
    {
        setForm({
           ...form , [e.target.name] : e.target.value
        })
    }

    function onSubmit(e)
    {
        e.preventDefault()       
        dispatch(insertProduct(form))
        setForm({
            nome : '',
            modelo : '',
            cor : '',
            precoCompra : '',
            precoVenda : '',
            quantidade : 1,
        })
       
    }

    return (
        <div id="containerAddProduto">
            <form id="formularioCadastro" onSubmit={onSubmit} className="container mt-4">
                <div className="text"><h4>Adicionar Novo Produto ao Estoque</h4></div>
                <div className="row mt-4">
                    <div className="col-md-4 mt-4">
                        <label>Nome do Produto</label>
                        <input onChange={formChange} value={form.nome} name="nome" className="form-control" placeholder="Nome do Produto"></input>
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Modelo do Produto</label>
                        <input onChange={formChange} value={form.modelo} name="modelo" className="form-control" placeholder="Modelo do Produto"></input>
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Cor do Produto</label>
                        <input onChange={formChange} value={form.cor} name="cor" className="form-control" placeholder="Cor do Produto"></input>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 mt-4">
                        <label>Preço de Venda</label>
                        <input onChange={formChange} value={form.precoVenda} name="precoVenda" className="form-control" placeholder="Preço de Venda do Produto"></input>
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Preço de Compra</label>
                        <input onChange={formChange} value={form.precoCompra} name="precoCompra" className="form-control" placeholder="Preço de Compra do Produto"></input>
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Quantidade a Se Adicionar</label>
                        <input type="number" onChange={formChange} value={form.quantidade} name="quantidade" className="form-control" placeholder="Preço de Compra do Produto"></input>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4"><button type="submit" className="btn btn-success col-md-4 mt-4">Adicionar</button></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"><button type="reset" className="btn btn-danger col-md-4 mt-4">Cancelar</button></div>
                </div>

            </form>
        </div>
    )
}

import api from '../../services/api'
import {actions} from '../produtos'


export const getAllProducts = ()=>{
      return (dispatch)=>{
          api.get('/products')
          .then((res) => dispatch(actions.getAllProducts(res.data)))
          .catch(console.log)
      }
}

export const insertProduct = (product)=>{
      return (dispatch)=>{
      api.post('/products' , product)
      .then((res) =>{ dispatch(actions.add(res.data))})
      .catch(console.log)
  }
}

export const changeProduct = (product)=>
{
    return (dispatch) =>
      {
        api.put('/products/'+product.id , product)
        .then((res) =>{ dispatch(actions.edit(res.data))})
        .catch(console.log)
        window.location.reload(false)         
      }
}

export const deleteProduct = (product)=>
{
    return (dispatch) =>
      {
        api.delete('/products/'+product)
        .then((res) =>{ dispatch(actions.remove(res.data))})
        .catch(console.log)
        window.location.reload(false)
                 
      }
}


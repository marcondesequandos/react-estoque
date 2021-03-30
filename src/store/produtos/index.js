const INICIAL_STATE = []
  
  export default function reducer(state = INICIAL_STATE, action)
  {

    const {type, payload} = action

    switch(type) 
    {
      case"ADD_PRODUCT":
          return [...state , payload]
      case"GET_ALL_PRODUCTS" :          
          return [...payload]
      case"POST_PRODUCT":
      case"EDIT_PRODUCT":
      case"REMOVE_PRODUCT":
          return [...state , payload]
      default : 
        return state
    }
  
  }

  export const actions = {
    add : (product)=> ({
      payload : product,
      type : "ADD_PRODUCT"
    }),
    getAllProducts : (products)=> ({
      payload : products,
      type : "GET_ALL_PRODUCTS"
    }),
    remove : (product)=> ({
      payload : product,
      type : "REMOVE_PRODUCT"
    }),
    postProduct : (product)=> ({
      payload : product,
      type : "POST_PRODUCT"
    }),
    edit : (product)=> ({
      payload : product,
      type : "EDIT_PRODUCT"
    })
  }
import {configureStore} from '@reduxjs/toolkit';
import reducerProduto from './produtos/index'


export default configureStore({
    reducer: {
    reducerProduto
    }
})

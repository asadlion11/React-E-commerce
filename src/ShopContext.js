import { createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";
const shopContext = createContext(initialState);
export const ShopProvider = ({children})=>{
    const[state,dispatch] = useReducer(shopReducer,initialState);
    const addToCart = (product) => {
        const updatedProduct = state.products.concat(product);
        calculateTotal(updatedProduct)
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                products: updatedProduct,
            }
        })
    };
    const removeFromCart = (product) => {
        const updateProduct = state.products.filter(p => p.id !== product.id);
        calculateTotal(updateProduct)
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                products: updateProduct
            }
        })
    }
    const calculateTotal = (products) => {
        let total = 0;
        products.forEach(product => {
            total+=product.price;
        })
        dispatch({
            type:'CALCULATE_TOTAL_PRICE',
            payload: {
                total : total
            }
        })
    }
    const clearCart = (products) => {
        dispatch({
            type: 'CLEAR_CART',
            payload: initialState
        })
    }

    const values = {
        products: state.products,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart
    }
    return <shopContext.Provider value ={values}>
        {children}
    </shopContext.Provider>
};
const useShop = () => {
    const context = useContext(shopContext);
    if(context === undefined){
        throw new Error('Context must be used inside shopContext')
    }
    return context;
};
export default useShop;

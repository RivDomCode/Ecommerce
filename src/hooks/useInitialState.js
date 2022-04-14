import { useState } from 'react'


const initialState = {
    cart: []
}
const useInitialState = () => {

    const [state2, setState] = useState(initialState)

    const addToCart = (payload) => {
        setState({
            ...state2,
            cart: [...state2.cart, payload]
        })

    }

    const removeFromCart = (payload) => {
        setState({
            ...state2,
            cart: state2.cart.filter(items => items.id !== payload.id),
        })
    }

    return { state2, addToCart, removeFromCart }

}

export default useInitialState;
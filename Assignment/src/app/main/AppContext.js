import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {
    const { children } = props;
    const [cart, setCart] = useState([])
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null);
    const [favoriteProducts, setFavoriteProducts] = useState([])
    return (
        <AppContext.Provider
            value={{
                cart, setCart, isLogin, setIsLogin,
                user, setUser,favoriteProducts,setFavoriteProducts
            }}>
            {children}
        </AppContext.Provider>
    )
}
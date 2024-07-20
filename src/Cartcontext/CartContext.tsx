import { Dispatch, SetStateAction, useEffect, useState, createContext } from 'react'
import Products from '../components/CartListManipulations/Products/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartList from '../components/CartListManipulations/CartList/CartList';

interface IState {
    userName: string,
    productsList: {
        id: number,
        title: string,
        description: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        brand: string,
        category: string,
        thumbnail: string,
        images: string[],
        quantity: number,
    }[],
    cartList: {
        id: number,
        title: string,
        description: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        brand: string,
        category: string,
        thumbnail: string,
        images: string[],
        quantity: number,
    }[],
    isAdded: boolean,
    finalPrice: number,
    couponPrice: number,
}

interface ContextInterface {
    userName: string,
    setUserName: Dispatch<SetStateAction<string>>,
    productsList: {
        id: number,
        title: string,
        description: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        brand: string,
        category: string,
        thumbnail: string,
        images: string[],
    }[],
    cartList: {
        id: number,
        title: string,
        description: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        brand: string,
        category: string,
        thumbnail: string,
        images: string[],
        quantity: number,
    }[],
    handleCartItem: (id: number) => void,
    handleIncrement: (id: number) => void,
    handleDecrement: (id: number) => void,
    handleRemoveItem: (id: number) => void,
    isAdded: boolean,
}

export const ContextApi = createContext<ContextInterface | undefined>(undefined);

function CartContext() {
    const [userName, setUserName] = useState<IState['userName']>('')
    const [productsList, setProductsList] = useState<IState['productsList']>([])
    const [cartList, setCartList] = useState<IState['cartList']>([])
    const [isAdded, setIsAdded] = useState<IState['isAdded']>(false)

    const jwtToken = localStorage.getItem('jwtToken')

    useEffect(() => {
        const url = 'https://dummyjson.com/products'
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: 'GET'
        }

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                setProductsList(data.products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [jwtToken])


    const handleCartItem = (id: number) => {
        const cartItem = productsList.find(eachItem => eachItem.id === id)

        if (cartItem !== undefined) {
            setCartList([...cartList, { ...cartItem, 'quantity': 1 }])
        }

        if (cartItem && cartItem.id === id) {
            setIsAdded(true)
        }
    }

    const handleIncrement = (id: number) => {
        const item = cartList.find(eachItem => eachItem.id === id)
        if (item !== undefined && item.id === id) {
            const updatedCartList = cartList.filter(eachItem => {
                if (eachItem.id === id) {
                    eachItem.quantity += 1
                }
                return eachItem
            })
            setCartList(updatedCartList)
        }
    }

    const handleDecrement = (id: number) => {
        const item = cartList.find(eachItem => eachItem.id === id)
        if (item !== undefined && item.id === id && item.quantity >= 1) {
            const updatedCartList = cartList.filter(eachItem => {
                if (eachItem.id === id) {
                    eachItem.quantity -= 1
                }
                return eachItem
            })
            setCartList(updatedCartList)
        }

        if (item !== undefined && item.id === id && item.quantity < 1) {
            const updatedCartList = cartList.filter(eachItem => eachItem.id !== id)
            setCartList(updatedCartList)
        }
    }

    const handleRemoveItem = (id: number) => {
        const updatedCartList = cartList.filter(eachItem => eachItem.id !== id)
        setCartList(updatedCartList)
    }



    return (
        <ContextApi.Provider
            value={{
                userName,
                setUserName,
                productsList,
                cartList,
                handleCartItem,
                handleIncrement,
                handleDecrement,
                handleRemoveItem,
                isAdded,
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Products />} />
                    <Route path='/cart' element={<CartList />} />
                </Routes>
            </BrowserRouter>
        </ContextApi.Provider>
    )
}

export default CartContext

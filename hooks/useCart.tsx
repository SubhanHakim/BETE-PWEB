import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from 'react-hot-toast'

type CartContextType = {
    id: string;
    cartTotalQty: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
    handleCartQtyIncrease: (product: CartProductType) => void;
    
}

export const CartContext = createContext<CartContextType | null>(null);


interface Props {
    [propname: string]: any;
}

export const CartContextProvider = (props: Props) => {

    const [cartTotalQty, setCartTotalQty] = useState(0)
    const [cartProducts, setCartproducts] = useState<CartProductType[] | null>(null)

    useEffect(() => {
        const cartItems: any = localStorage.getItem('eShopCartItems')
        const cProducts: CartProductType[] | null = JSON.parse(cartItems)

        setCartproducts(cProducts)
    }, [])

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartproducts((prev) => {
            let updateCart;

            if (prev) {
                updateCart = [...prev, product]
            } else {
                updateCart = [product]
            }


            toast.success('ternak sudah ditambahkan')
            localStorage.setItem('eShopCartItems', JSON.stringify(updateCart))
            return updateCart;
        })
    }, [])

    const handleRemoveProductFromCart = useCallback((product: CartContextType) => {
        if (cartProducts) {
            const filterProducts = cartProducts.filter((item) => {
                return (item.id !== product.id)
            });

            setCartproducts(filterProducts)
            toast.success('product dihapu')
            localStorage.setItem('eShopCartItems', JSON.stringify(filterProducts))
        }
    }, [cartProducts])

    const handleCartQtyIncrease = useCallback((product: CartProductType) => {
        let updateCart;

        if (product.quantity === 99) {
            return toast.error("aduh udah maksimal")
        }

        if (cartProducts) {
            updateCart = [...cartProducts]

            const existingIndex = cartProducts.findIndex((item) => item.id === product.id)

            if (existingIndex > -1) {
                updateCart[existingIndex].quantity = ++updateCart[existingIndex].quantity
            }
            setCartproducts(updateCart)
            localStorage.setItem('eShopCartitems', JSON.stringify(updateCart))
        }


    }, [cartProducts])

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyIncrease
    }



    return <CartContext.Provider value={value} {...props} />
}

export const useCart = () => {
    const context = useContext(CartContext);

    if (context === null) {
        throw new Error("useCart must be used within a cartContextProvider")
    }

    return context;
}
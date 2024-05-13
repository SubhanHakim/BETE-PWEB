"use client"

import { Rating } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { FiAward } from "react-icons/fi";
import { BsGenderAmbiguous } from "react-icons/bs";
import SetQuantity from "@/app/components/products/SetQuantity";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import ProductImage from "@/app/components/products/ProductImage";
import { useCart } from "@/hooks/useCart";
import {MdCheckCircle} from "react-icons/md"
import { useRouter } from "next/navigation";


interface ProductDetailsProps {
    product: any
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    selectedImg: SelectedImgType,
    quantity: number,
    price: number,
}

export type SelectedImgType = {
    image: string,
    view: string,
}

const Horizontal = () => {
    return <hr className="w-[30%] my-2 " />
}


const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const { handleAddProductToCart, cartProducts } = useCart()
    const [isProductInCart, setIsProductInCart] = useState(false);
    const [cartProduct, setCartproduct] = useState<CartProductType>(
        {
            id: product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            selectedImg: { ...product.images[0] },
            quantity: 1,
            price: product.price,
        }
    )

    const router = useRouter()

    

    useEffect(() => {
        setIsProductInCart(false)

        if (cartProducts) {
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id)

            if (existingIndex > -1) {
                setIsProductInCart(true);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartProducts])



    const productRating = product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / product.reviews.length;


    const handleViewsSelect = useCallback(
        (value: SelectedImgType) => {
            setCartproduct((prev) => {
                return { ...prev, selectedImg: value }
            })
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [cartProduct.selectedImg]
    )

    const handleQtyIncrease = useCallback(() => {
        if (cartProduct.quantity === 99) {
            return;
        }

        setCartproduct((prev) => {
            return { ...prev, quantity: prev.quantity + 1 }
        })
    }, [cartProduct])

    const handleQtyDecrease = useCallback(() => {
        if (cartProduct.quantity === 1) {
            return;
        }


        setCartproduct((prev) => {
            return { ...prev, quantity: prev.quantity - 1 }
        })
    }, [cartProduct])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImage cartProduct={cartProduct} product={product} handleViewsSelect={handleViewsSelect} />
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                <div className="flex items-center gap-2">
                    <Rating value={productRating} readOnly />
                    <div>{product.reviews.length} reviews</div>
                </div>
                <div>{product.area}, {product.city}</div>
                <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
                    {product.inStock ? "Tersedia" : "tidak tersedia"}
                </div>
                <Horizontal />
                <div className="text-justify">{product.description}</div>
                <Horizontal />
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-pinks rounded-md">
                            <CiCalendar size={32} color="#FF6649" />
                        </div>
                        <p>{product.age} Bulan</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-pinks rounded-md">
                            <FiAward size={32} color="#FF6649" />
                        </div>
                        <p>{product.weight} Kg</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-pinks rounded-md">
                            <BsGenderAmbiguous size={32} color="#FF6649" />
                        </div>
                        <p>{product.gender}</p>
                    </div>
                </div>
                <Horizontal />
                {isProductInCart ? <>
                    <p className="mb-2 text-slate-500 flex items-center gap-1">
                        <MdCheckCircle size={20} className="text-teal-400" />
                        <span>ternak sudah ditambahkan ke cart</span>
                    </p>
                    <div className="max-w-[300px]">
                        <ButtonPrimary label="Lihat Keranjang" outline onClick={() => router.push('/cart')} />
                    </div>
                </> : <>
                    <SetQuantity cartproduct={cartProduct} handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease} />
                    <Horizontal />
                    <div className="max-w-[300px]">
                        <ButtonPrimary label="masukin keranjang" onClick={() => handleAddProductToCart(cartProduct)} />
                    </div>
                </>}

            </div>
        </div>
    );
}

export default ProductDetails;
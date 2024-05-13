"use client"

import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import React from "react";

interface setQtyProps {
    cartCounter?: boolean;
    cartproduct: CartProductType;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;
}

const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded'

const SetQuantity: React.FC<setQtyProps> = ({
    cartCounter, cartproduct, handleQtyDecrease, handleQtyIncrease,
}) => {
    return (
        <div className="flex gap-8 items-center">
            {cartCounter ? null : <div className="font-semibold">Ekor:</div>}
            <div className="flex gap-4 items-center text-center text-base">
                <button onClick={handleQtyDecrease} className={btnStyles}>-</button>
                <div>{cartproduct.quantity}</div>
                <button onClick={handleQtyIncrease} className={btnStyles}>+</button>
            </div>
        </div>
    );
}

export default SetQuantity;
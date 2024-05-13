'use client'

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";
import React from "react";

interface SetViewProps {
    images: SelectedImgType[];
    cartProduct: CartProductType,
    handleViewsSelect: (value: SelectedImgType) => void
}

const SetViews: React.FC<SetViewProps> = ({
    images, cartProduct, handleViewsSelect
}) => {
    return (<div>
        <div className="flex gap-4 items-center">
            <span className="font-semibold">Tampak: </span>
            <div className="flex gap-4">
                {images.map((image) => {
                    return (
                        <div className="w-7 h-7 bg-slate-100 rounded-full border-teal-300 flex items-center justify-center">
                            <div>{image.view}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>);
}

export default SetViews;
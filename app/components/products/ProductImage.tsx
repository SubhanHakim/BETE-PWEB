"use client"

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";

interface ProductImageProps {
    cartProduct: CartProductType,
    product: any,
    handleViewsSelect: (value: SelectedImgType) => void;
}




const ProductImage: React.FC<ProductImageProps> = ({ cartProduct, product, handleViewsSelect }) => {
    return (
        <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
            <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
                {product.images.map((image: SelectedImgType) => {
                    return <div key={image.view} onClick={() => handleViewsSelect(image)} className={`relative w-[80%] aspect-square rounded border-teal-300`}>
                        <Image src={image.image} className="object-contain" alt={image.view} fill />
                    </div>
                })}
            </div>
            <div className="col-span-5 relative aspect-square">
                <Image src={cartProduct.selectedImg.image} className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]" alt={cartProduct.selectedImg.view} fill />
            </div>
        </div>
    );
}

export default ProductImage;
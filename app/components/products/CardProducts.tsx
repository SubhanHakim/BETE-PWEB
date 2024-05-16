"use client"
import ProductList from "./ListProduct";
import HeadText from "../HeadText";
import { products } from "@/utils/Products";


const CardProducts = () => {

    return (
        <div className="py-14">
            <HeadText>Products</HeadText>
            <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 justify-between">
                    {products.map((product: any) => {
                        return (
                            <div key={product.name}>
                                <ProductList data={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default CardProducts;
"use client"

import { formatPrice } from "@/utils/formatPrice"
import { truncateText } from "@/utils/truncate"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { CiCalendar } from "react-icons/ci"
import { FiAward } from "react-icons/fi";

interface ProductCardProps {
    data: any
}

const ProductList: React.FC<ProductCardProps> = ({ data }) => {
    const router = useRouter();
    return (
        <div onClick={() => router.push(`/product/${data.id}`)} className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 rounded-lg transition hover:scale-105 text-sm">
            <div className="flex flex-col w-full gap-3">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image fill className="w-full h-full object-cover rounded-lg" src={data.images[0].image} alt={data.name} />
                </div>
                <div className="py-5 px-4 w-full">
                    <div className="text-base font-medium text-black">
                        {truncateText(data.name)}
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <div className="flex items-center justify-start gap-10 text-gray-dark">
                            <div className="flex items-center gap-2">
                                <CiCalendar />
                                <span>{data.age}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiAward />
                                <span>{data.weight}</span>
                            </div>
                        </div>
                        <div className="text-green font-medium text-sm">{formatPrice(data.price)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList
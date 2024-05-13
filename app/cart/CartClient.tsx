'use client'
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import ButtonPrimary from "../components/ButtonPrimary";
import ItemContent from "./ItemContent";

const CartClient = () => {
    const { cartProducts } = useCart()

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center">
                <div className="text-2xl">Masih Kosong Beli kek</div>
                <div>
                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack />
                        <span> Mulai Belanja</span>
                    </Link>
                </div>
            </div >
        )
    }

    return (
        <div>
            <Heading title="Keranjang" center />
            <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
                <div className="col-span-2 justify-self-start">PRODUCT</div>
                <div className="justify-self-start">HARGA</div>
                <div className="justify-self-center">JUMLAH</div>
                <div className="justify-self-end">TOTAL</div>
            </div>
            <div>
                {cartProducts && cartProducts.map((item) => {
                    return <ItemContent key={item.id} item={item} />
                })}
            </div>
            <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
                <div className="w-[180px]">
                    <ButtonPrimary label="Hapus Keranjang" onClick={() => { }} small outline />
                </div>
                <div className="text-sm flex flex-col gap-1 items-start">
                    <div className="flex gap-10 justify-between text-base w-full font-semibold">
                        <span>Subtotal</span>
                        <span>Rp.20.000.000</span>
                    </div>
                    <p className="text-slate-500">pajak dan pengiriman dihitung saat checkout</p>
                    <ButtonPrimary label="Bayar" onClick={() => { }} />
                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack />
                        <span>Lanjut Belanja</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CartClient;
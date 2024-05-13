import Container from "../Container";
import Link from "next/link";
import Language from "./language";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart, CiSearch } from "react-icons/ci";
import InputSearch from "./InputSearch";
import NavList from "./NavList";

const NavBar = () => {
    return (
        <>
            <Language />
            <div className="sticky top-0 w-full border-b-1 border-slate-400 z-30 bg-white shadow-sm">
                <div className="py-6 border-b-[1px]">
                    <Container>
                        <div className="flex items-center justify-between gap-3 md-gap-0">
                            <Link href="/" className="text-black font-bold text-2xl">
                                Beli Ternak
                            </Link>
                            <NavList />
                            <div className="flex items-center gap-10">
                                <div className="hidden md:block">
                                    <InputSearch />
                                </div>
                                <div className="flex items-center gap-5">
                                    <CiHeart className="text-2xl" />
                                    <IoCartOutline className="text-2xl" />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default NavBar;
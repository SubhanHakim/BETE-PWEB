import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import Container from "../Container";

const Language = () => {
    return (
        <div className="sticky py-5 w-full justify-end bg-black hidden md:flex">
            <div className="flex gap-40 xl:px-20 md:px-2 px-4">
                <div>
                    <Link href="/" className="text-white">Shop Now</Link>
                </div>
                <div className="flex items-center text-white">
                    <span>English</span>
                    <RiArrowDropDownLine />
                </div>
            </div>
        </div>
    );
}

export default Language;
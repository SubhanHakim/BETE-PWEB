import Link from "next/link";

const NavList = () => {
    return (
        <div className="flex items-center gap-12 md:gap-6">
            <ul>
                <li className="flex gap-12">
                    <Link href="/" className="hover:border-b-2 border-black transition duration-200 ease-in-out">Home</Link>
                    <Link href="/" className="hover:border-b-2 border-black transition duration-200 ease-in-out">About</Link>
                    <Link href="/" className="hover:border-b-2 border-black transition duration-200 ease-in-out">Sign Up</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavList;
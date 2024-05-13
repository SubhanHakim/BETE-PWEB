import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import InputSearch from "../nav/InputSearch";
import { RiFacebookLine, RiInstagramFill, RiInstagramLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";


const Footer = () => {
    return (
        <>
            <footer className="bg-black text-slate-200 text-sm mt-16">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                        <FooterList>
                            <h3 className="text-base font-bold mb-2">Beli Ternak</h3>
                            <Link href="#">Subcribe</Link>
                            <Link href="#">Get 10% your first order</Link>
                        </FooterList>
                        <FooterList>
                            <h3 className="text-base font-bold mb-2">Suport</h3>
                            <Link href="#">Tawang, Indonesia</Link>
                            <Link href="#">beliternak@gmail.com</Link>
                            <Link href="#">+88015-88888-9999</Link>
                        </FooterList>
                        <FooterList>
                            <h3 className="text-base font-bold mb-2">Account</h3>
                            <Link href="#">My Account</Link>
                            <Link href="#">Login / Register</Link>
                            <Link href="#">Cart</Link>
                            <Link href="#">Shop</Link>
                        </FooterList>
                        <FooterList>
                            <h3 className="text-base font-bold mb-2">Quick Link</h3>
                            <Link href="#">Privacy Policy</Link>
                            <Link href="#">Terms Of Use</Link>
                            <Link href="#">FAQ</Link>
                            <Link href="#">Contact</Link>
                        </FooterList>
                        <FooterList>
                            <h3 className="text-base font-bold mb-2">Download App</h3>
                            <span>Save $3 with App New User Only</span>
                            <div className="flex gap-2">
                                <RiFacebookLine size={24} />
                                <RiTwitterLine size={24}/>
                                <RiInstagramLine size={24} />
                                <RiLinkedinLine size={24} />
                            </div>
                        </FooterList>
                    </div>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
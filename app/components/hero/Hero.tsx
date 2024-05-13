import Container from "../Container";
import HomeBanner from "../HomeBanner";
import Location from "../Location";
import CardProducts from "../products/CardProducts";

const Hero = () => {
    return (
        <Container>
            <div className="flex justify-between">
                <Location />
                <HomeBanner />
            </div>
            <div>
                <CardProducts />
            </div>
        </Container>
    );
}

export default Hero;
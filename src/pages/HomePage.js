import NavBar from '../components/NavBar';
import Hero from '../components/homepagecomponents/Hero';
import InformationSection from '../components/homepagecomponents/InformationSection';
import ImmersiveWorldwide from '../components/homepagecomponents/ImmersiveWorldwide';
import CallToAction from '../components/homepagecomponents/CallToAction';
import Footer from '../components/Footer'

function HomePage(){
    return (
        <>
            <NavBar />
            <Hero />
            <InformationSection />
            <ImmersiveWorldwide />
            <CallToAction />
            <Footer />
        </>
    );
}

export default HomePage;
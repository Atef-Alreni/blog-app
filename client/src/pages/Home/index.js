import Hero from "./Hero";
import ImmersiveWorldwide from "./ImmersiveWorldwide";
import Newsletter from "./Newsletter";

import FreeImg from "../../assets/Home/Icon awesome-wallet.svg";
import GlobalImg from "../../assets/Home/Icon metro-earth.svg";
import ValuableImg from "../../assets/Home/Icon awesome-gem.svg";

import "./styles.css";

const freeInfo =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata";

const globalInfo =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata";

const valuableInfo =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata";

function InformationCard({ imgSrc, info }) {
  return (
    <div className='card'>
      <img src={imgSrc} alt='' />
      <p>{info}</p>
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <div className='information-cards-container' id='learn-more'>
        <div className='container-l flex-col-phone'>
          <InformationCard imgSrc={FreeImg} info={freeInfo} />
          <InformationCard imgSrc={GlobalImg} info={globalInfo} />
          <InformationCard imgSrc={ValuableImg} info={valuableInfo} />
        </div>
      </div>
      <ImmersiveWorldwide />
      <Newsletter />
    </>
  );
}

export default Home;

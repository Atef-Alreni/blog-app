import '../../styles/homepage/ImmersiveWorldwide.css';
import girlImg from '../../images/Girl.png';
import planetImg from '../../images/Planet.png';

function ImmersiveWorldwide() {
    return (
        <div className="immersive-worldwide-container">
            <div className="info-img-container">
                <div className="info">
                    <h1>Immersive blog</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos 
                        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata et 
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no fdg.ea rebum. Stet 
                        clita kasd gubergren, no fdg.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos 
                        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata et 
                        accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste</p>
                    <a href="">View more</a>
                </div>
                <img src={ girlImg } alt="" className="girl-img"/>
            </div>
            <div className="info-img-container flex-start">
                <img src={ planetImg } alt="" className="planet-img"/>
                <div className="info">
                    <h1>Worldwide</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos 
                        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata et 
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no fdg.ea rebum. Stet 
                        clita kasd gubergren, no fdg.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos 
                        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata et 
                        accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste</p>
                    <a href="" className="green">View more</a>
                </div>
            </div>
        </div>
    )
}

export default ImmersiveWorldwide

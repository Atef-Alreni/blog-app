import MainContent from "../../components/MainContent/MainContent";
import "./styles.css";

import aboutData from "../../data/aboutData";

function About() {
  return (
    <MainContent title='About Us' sideNav>
      {aboutData.map(({ id, title, content }) => {
        return (
          <div id={id} className='about-section'>
            <h4>{title}</h4>
            <p>{content}</p>
          </div>
        );
      })}
    </MainContent>
  );
}

export default About;

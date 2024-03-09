import reactImg from "../assets/image/react.png";
import jsImg from "../assets/image/js.svg.png";
import gulp from "../assets/image/gulp-logo.svg";
import htmlCss from "../assets/image/htmlcss.jpg";
import webpack from "../assets/image/webpack.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Soft and Hard Skills</h2>
              <p>
                Self-study, Flexibility, Teamwork, Problem Solving, Stress
                Resistance, Communication, Creative Thinking
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={reactImg} alt="reactImg" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={jsImg} alt="jsImg" />
                  <h5>Java Script</h5>
                </div>
                <div className="item">
                  <img src={gulp} alt="gulpImage" />
                  <h5>Gulp</h5>
                </div>
                <div className="item">
                  <img src={htmlCss} alt="htmlCssImage" />
                  <h5>Html5 Css3</h5>
                </div>
                <div className="item">
                  <img src={webpack} alt="webpackImage" />
                  <h5>Webpack</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

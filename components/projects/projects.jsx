import Slider from "react-slick";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerPadding: "20px",
  autoplaySpeed: 2000,
  cssEase: "linear",
  autoplay: true,
};

const Card = (props) => {
  const { imageUrl, title, subtitle, text, link } = props;
  return (
    <div className="card flex-fill mx-2 rounded rounded-4 card-hover">
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title mb-3">{title}</h5>
        <h6 className="card-subtitle my-2 text-body-secondary">{subtitle}</h6>
        <p className="card-text">{text}</p>
        <div className="d-flex my-3">
          <button className="btn btn-sm btn-outline-primary">Link</button>
        </div>
      </div>
    </div>
  );
};

const projectData = [
  {
    imageUrl: "https://source.unsplash.com/1600x900/?web",
    title: "Card title 1",
    subtitle: "Subtitle 1",
    text: "Some quick example text for Card 3. Some quick example text for Card 3.Some quick example text for Card 3.Some quick example text for Card 3.",

    link: "#",
  },
  {
    imageUrl: "https://source.unsplash.com/1600x900/?tech",
    title: "Card title 2",
    subtitle: "Subtitle 2",
    text: "Some quick example text for Card 3. Some quick example text for Card 3.Some quick example text for Card 3.Some quick example text for Card 3.",

    link: "#",
  },
  {
    imageUrl: "https://source.unsplash.com/1600x900/?mob",
    title: "Card title 3",
    subtitle: "Subtitle 3",
    text: "Some quick example text for Card 3. Some quick example text for Card 3.Some quick example text for Card 3.Some quick example text for Card 3.",
    link: "#",
  },
  {
    imageUrl: "https://source.unsplash.com/1600x900/?game",
    title: "Card title 3",
    subtitle: "Subtitle 3",
    text: "Some quick example text for Card 3. Some quick example text for Card 3.Some quick example text for Card 3.Some quick example text for Card 3.",

    link: "#",
  },
  // Add more data as needed
];

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <CiCircleChevRight style={{ color: "4f4e4ee2" }} />
    ) : (
      <CiCircleChevLeft style={{ color: "4f4e4ee2" }} />
    );
  return (
    <button className={`${className} border-0`} onClick={props.onClick}>
      {char}
    </button>
  );
}

const Projects = () => {
  return (
    <div className="bg-body-secondary" id="project">
      <div className="container section section-pad">
        <h1 className="section-title text-center">My projects</h1>
        <Slider
          {...settings}
          nextArrow={<Arrow type="next" />}
          prevArrow={<Arrow type="prev" />}
        >
          {projectData.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </Slider>
        <div className="text-center mt-5">
          <button
            type="button"
            className="btn btn-secondary btn-lg border border-3 rounded rounded-5"
          >
            + View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

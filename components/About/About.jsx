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

const Card = (props) => {
  const { imageUrl, title, subtitle, text, link } = props;
  return (
    <div className="row my-4  rounded-4 card-hover">
      <div className="col-3">
        <img src={imageUrl} className="card-img-top" alt="..." />{" "}
      </div>
      <div className="col-9">
        <div className="card-body">
          <h5 className="card-title mb-3">{title}</h5>
          <h6 className="card-subtitle my-2 text-body-secondary">{subtitle}</h6>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div id="about">
      <div className="container section section-pad">
        <h1 className="section-title text-center">My Experience</h1>
        {projectData.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default About;

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCode } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="bg-body-secondary">
      <div className="container section section-pad">
        <h1 className="section-title text-center">My Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              fontFamily: "'Hind Guntur', sans-serif",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2022-2024 - present (2+ years)"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaCode />}
          >
            <h3 className="vertical-timeline-element-title">Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Netcom Learning, Noida delhi, India.
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ut libero aperiam corrupti adipisci sed fuga,
              temporibus doloribus numquam veniam?
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              fontFamily: "'Hind Guntur', sans-serif",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2021 - 2022 (9 months)"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SiFuturelearn />}
          >
            <h3 className="vertical-timeline-element-title">
              Full stack developer,
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Newton School. Online bootcamp
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ut libero aperiam corrupti adipisci sed fuga,
              temporibus doloribus numquam veniam?
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              fontFamily: "'Hind Guntur', sans-serif",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2018--2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SiFuturelearn />}
          >
            <h3 className="vertical-timeline-element-title">B.tech (Mech) </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Amabajogai. Maharashtra.
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ut libero aperiam corrupti adipisci sed fuga,
              temporibus doloribus numquam veniam?
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default About;

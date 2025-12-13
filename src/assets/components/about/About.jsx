import "./About.css";
import amarbg from "../../../assets/img/ChatGPT Image Jul 9, 2025, 04_24_01 PM.png";

const About = () => {
  return (
    <div className="about">
      <div className="headline">About me</div>
      <div className="slogan">Exploring the depths of Creativity</div>
      <div className="bio">
        <div className="profile-img">
          <img
            src={amarbg}
            alt="Amar Murmu"
            loading="lazy"
            width="300"
            height="300"
          />
        </div>
        <div className="bio-text">
          <div className="bio-headline">Hellooo! I&apos;m Amar Murmu..</div>
          <div className="bio-normal">
            A Full Stack Developer from India with a passion for building
            innovative web applications. I specialize in the JavaScript, React,
            Next.js, and integrating AI and Blockchain technologies. I enjoy
            creating seamless user experiences and bringing complex digital
            visions to life. Check out my portfolio to see my latest work!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import './Hero.scss';
import profileImage from '../../assets/HP_default.png';
import Button from '../Button/Button';

function Hero() {
  return (
    <div className="hero container">
      <div className="hero__text">
        <p className="hero__greeting">Hey there. 👋 I am</p>
        <h1 className="hero__name">Henrik Petersen</h1>
        <p className="hero__role">DevSecOps Engineer</p>
        <p className="hero__about">
          I love building things from scratch that make people’s daily work easier. With a full-stack background, I focus on running software securely in the cloud and keep growing through continuous training and personal projects.
        </p>
        <div className="hero__cta">
          <Button href="#contact">Contact me</Button>
        </div>
      </div>
      <img className="hero__image" src={profileImage} alt="Portrait" />
    </div>
  );
}

export default Hero;

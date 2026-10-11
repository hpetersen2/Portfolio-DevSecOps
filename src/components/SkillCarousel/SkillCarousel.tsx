import { useRef, useState } from 'react';
import { skillSlides } from '../../data/skills';
import './SkillCarousel.scss';

// Mobile: 3 Seiten mit je 3 Skills, horizontal wischbar, mit Seitenanzeige
function SkillCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Position der Slides relativ zur ersten Slide
  const slideOffset = (index: number) => {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.children[0] as HTMLElement;
    return (track.children[index] as HTMLElement).offsetLeft - first.offsetLeft;
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    let closest = 0;
    skillSlides.forEach((_, index) => {
      const distance = Math.abs(slideOffset(index) - track.scrollLeft);
      const closestDistance = Math.abs(slideOffset(closest) - track.scrollLeft);
      if (distance < closestDistance) closest = index;
    });
    setActive(closest);
  };

  const goTo = (index: number) => {
    trackRef.current?.scrollTo({ left: slideOffset(index), behavior: 'smooth' });
  };

  return (
    <div className="carousel">
      <div className="carousel__track" ref={trackRef} onScroll={handleScroll}>
        {skillSlides.map((slide, slideIndex) => (
          <div
            className="carousel__slide"
            key={slideIndex}
            role="group"
            aria-label={`Skills ${slideIndex + 1} of ${skillSlides.length}`}
          >
            {slide.map((skill) => (
              <div className="carousel__row" key={skill.name}>
                <div className="carousel__skill">
                  <img src={skill.icon} alt="" />
                  <span>{skill.shortLabel}</span>
                </div>
                <ul className="carousel__list">
                  {skill.uses.map((use) => (
                    <li key={use}>{use}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="carousel__dots">
        {skillSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`carousel__dot ${index === active ? 'carousel__dot--active' : ''}`}
            aria-label={`Show skills ${index + 1}`}
            aria-current={index === active}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillCarousel;

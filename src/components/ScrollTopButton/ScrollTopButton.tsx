import './ScrollTopButton.scss';

// Hochkant-Pille mit Pfeil nach oben (Footer)
function ScrollTopButton() {
  return (
    <button
      type="button"
      className="scroll-top"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 16 56"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M8 52V8" />
        <path d="m8 3 6 10H2z" fill="currentColor" />
      </svg>
    </button>
  );
}

export default ScrollTopButton;

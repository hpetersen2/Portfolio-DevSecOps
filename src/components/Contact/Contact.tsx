import './Contact.scss';

// TODO: echte Kontaktdaten eintragen
const MAIL = 'your.mail@example.com';
const PROFILE_URL = '#';

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" width="32" height="32">
      <circle cx="16" cy="16" r="15.25" fill="#266ad9" stroke="#fff" strokeWidth="1.5" />
      <rect x="7.5" y="10.5" width="17" height="11" rx="2" fill="none" stroke="#fff" strokeWidth="1.5" />
      <path d="m8 12 8 6 8-6" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" width="32" height="32">
      <circle cx="16" cy="16" r="15.25" fill="#266ad9" stroke="#fff" strokeWidth="1.5" />
      <g fill="none" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round">
        <circle cx="10" cy="10" r="1.6" />
        <path d="M8.5 13.5h3v9h-3zM14 13.5h3v1.2c.7-1 1.8-1.6 3.2-1.6 2.3 0 3.3 1.5 3.3 3.8v5.6h-3v-5c0-1.1-.5-1.8-1.5-1.8s-2 .8-2 2v4.8h-3z" />
      </g>
    </svg>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact section--dark">
      <div className="contact__inner container">
        <h2 className="section-title">Contact me</h2>

        <div className="contact__grid">
          <div className="contact__info">
            <p>Include the Information like:</p>
            <ul>
              <li>Feel free to reach out with job offers or opportunities like…</li>
              <li>what role are you looking for?</li>
              <li>how you will contribute to the new team.</li>
              <li>Are you open for remote work or even relocate?</li>
            </ul>
          </div>

          <div className="contact__links">
            <p className="contact__lead">Looking forward to hearing from you!</p>
            <a className="contact__link" href={`mailto:${MAIL}`}>
              <MailIcon />
              <span>{MAIL}</span>
            </a>
            <a
              className="contact__link contact__link--underline"
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProfileIcon />
              <span>Profile Page</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import ScrollTopButton from '../ScrollTopButton/ScrollTopButton';
import './Footer.scss';

// TODO: Name und Link zum Impressum anpassen
const OWNER = 'Henrik Petersen';
const LEGAL_URL = '#';

function Footer() {
  return (
    <footer className="footer section--dark">
      <div className="footer__inner container">
        <ScrollTopButton />
        <p className="footer__copy">
          © {OWNER} {new Date().getFullYear()}
        </p>
        <a className="footer__legal" href={LEGAL_URL}>
          Legal notice
        </a>
      </div>
    </footer>
  );
}

export default Footer;

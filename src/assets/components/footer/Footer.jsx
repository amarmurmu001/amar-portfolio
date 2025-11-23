import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          <span className="footer-content">
            Designed and created by
            {' '}
            <a 
              href="https://github.com/amarmurmu001" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              @Amar_Murmu
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

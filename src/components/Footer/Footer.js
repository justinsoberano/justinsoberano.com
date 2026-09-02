import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img src={`${process.env.PUBLIC_URL}/signature.png`} alt="Signature" className="footer-signature" />
      <p className="footer-name">Justin Soberano-Borbonio</p>
    </footer>
  );
}

export default Footer;

import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="logo_reseaux">
        <a href="https://www.facebook.com/nathalie.guy2/" target="blank">
          <img src="/images/facebook.svg" alt="logo facebook" />
        </a>
        <a
          href="https://www.instagram.com/nathalieguy.artiste.aquarelle/"
          target="blank"
        >
          <img src="/images/instagram.svg" alt="logo instagram" />
        </a>
      </div>
      <p>&copy; 2025 Nathalie Guy</p>
    </footer>
  );
}

export default Footer;

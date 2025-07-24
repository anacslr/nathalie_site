import "./landing.css";

import { Link } from "react-router";

function LandingPage() {
  return (
    <>
      <div className="landing-background" />
      <div className="landing-page">
        <h1 className="landing-title">Nathalie Guy</h1>
        <p className="landing-subtitle">Artiste Aquarelliste</p>
        <Link to="/actualites">
          <button className="landing-button" type="button">
            Mes actualités
          </button>
        </Link>
      </div>
    </>
  );
}

export default LandingPage;

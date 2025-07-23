import "./landing.css";

function LandingPage() {
  return (
    <>
      <div className="landing-background" />
      <div className="landing-page">
        <h1 className="landing-title">Nathalie Guy</h1>
        <p className="landing-subtitle">Artiste Aquarelliste</p>
        <button className="landing-button" type="button">
          Mes actualités
        </button>
      </div>
    </>
  );
}

export default LandingPage;

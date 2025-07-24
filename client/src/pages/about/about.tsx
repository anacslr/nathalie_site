import "./about.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">À propos de moi</h1>
      <img
        className="img-profil"
        src="/images/IMG_4543.jpeg"
        alt="mon profil"
      />
      <p>
        Corse de coeur, je joue avec l’eau, la couleur, le rythme et l’énergie
        des éléments en tentant de transmettre l’émotion. Mes gestes sont
        parfois vifs et spontanés. Mes sentiments, mon énergie passent par le
        pinceau, l’eau et la couleur. On dit de mes œuvres qu’elles sont
        fraiches et spontanées.
      </p>
      <h2>Mes influences artistiques</h2>
      <img
        className="img-inspirations"
        src="/images/inspirations.png"
        alt="4 images de mes inspirations"
      />
      <p>
        Les peintres qui m’inspirent le plus, m’accompagnent dans mon projet
        créatif sont ZAO WOU- KI, pour son approche spontanée, et intuitive, sa
        palette de couleur, il provoque l’émotion vive, la joie, et fait appel à
        l’imaginaire. Johannes VERMEER, peintre flamand, pour ses jeux de
        lumière, les ambiances qu’il laisse passer sur la toile, par le trait de
        pinceau et la couleur, et pour les détails interessants sur ses tableaux
        qui en eux mêmes sont des sources d’inspiration, d’un tissu peut naitre
        la nature ! Vincent VAN GOCH, pour son geste dynamique, ses couleurs, et
        sa folie, dans l’abstrait. Un focus sur ses tableaux, peut faire
        apparaître un monde tonique et virevoltant, de la joie naitre d’un
        geste. William TURNER, pour ses flous, ses doux traits de pinceaux, sa
        couleur, l’usage de l’eau à outrance, chaque tableau est un univers à
        lui seul.
      </p>
    </div>
  );
}
export default About;

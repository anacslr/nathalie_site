
-- Table des catégories d’actualité
CREATE TABLE category (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL
);

-- Table des actualités
CREATE TABLE article (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titre VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  date_publication VARCHAR(30) NOT NULL,
  image_src VARCHAR(500),
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES category(id)
);

-- Insertion de données dans la table des catégories
INSERT INTO category (name) VALUES
('Expositions'),
('Événements'),
('Ateliers'),
('Projets'),
('Publications'),
('Actualités');

INSERT INTO article (titre, description, date_publication, image_src, category_id) VALUES
('Publication de mon livre', 'Mon premier livre d\'aquarelles sur Nessa est enfin sorti !!!', '01/05/2025',"/images/affiche.png", 2),
('Exposition tous les vendredis', 'Venez découvrir mes œuvres tous les vendredis soirs au marché des artisans de l\'île Rousse', '01/07/2025', '/images/marche_ile_rousse.JPG', 1),
('Dépot-vente d\'aquarelles', 'Venez découvrir mes aquarelles à la boutique du Clos Antonini à Sant Antonino', '20/07/2025', '/images/clos_antonini.JPG', 2);

-- 2. Table des catégories d’actualité
CREATE TABLE category (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL
);

-- 3. Table des actualités
CREATE TABLE article (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titre VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  date_publication DATE NOT NULL,
  image_src VARCHAR(500),
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES types(id)
);
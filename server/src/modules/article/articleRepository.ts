import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type ArticleType = {
  id: number;
  titre: string;
  description: string;
  date_publication: string;
  image_src?: string;
  category_id: number;
};

class articleRepository {
  // The C of CRUD - Create operation

  async create(article: Omit<ArticleType, "id">) {
    // Execute the SQL INSERT query to add a new article to the "article" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO article (titre, description,date_publication, image_src, category_id) VALUES (?, ?, ?, ?, ?)",
      [
        article.titre,
        article.description,
        article.date_publication,
        article.image_src,
        article.category_id,
      ],
    );

    // Return the ID of the newly inserted article
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific article by its ID, with category name
    const [rows] = await databaseClient.query<Rows>(
      `SELECT article.*, category.name AS category_name
       FROM article
       JOIN category ON article.category_id = category.id
       WHERE article.id = ?`,
      [id],
    );
    return rows[0] as ArticleType;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all articles with their category name
    const [rows] = await databaseClient.query<Rows>(
      `SELECT article.*, category.name AS category_name
       FROM article
       JOIN category ON article.category_id = category.id`,
    );
    return rows as ArticleType[];
  }

  // The U of CRUD - Update operation

  async update(article: ArticleType) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE article SET titre = ?, description = ?, date_publication = ?, image_src = ?, category_id = ? WHERE id = ?",
      [
        article.titre,
        article.description,
        article.date_publication,
        article.image_src,
        article.category_id,
        article.id,
      ],
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation

  async delete(id: number) {
    // Execute the SQL DELETE query to remove an article by its ID
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM article WHERE id = ?",
      [id],
    );

    // Return the number of affected rows (should be 1 if the article was deleted)
    return result.affectedRows;
  }
}

export default new articleRepository();

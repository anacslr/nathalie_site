import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type ArticleType = {
  id: number;
  titre: string;
  description: string;
  date_publication: Date;
  image_src: string;
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
    // Execute the SQL SELECT query to retrieve a specific artcile by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM article WHERE id = ?",
      [id],
    );

    // Return the first row of the result, which represents the article
    return rows[0] as ArticleType;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all articles from the "article" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM article");

    // Return the array of articles
    return rows as ArticleType[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing article

  // async update(article: article) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an article by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new articleRepository();

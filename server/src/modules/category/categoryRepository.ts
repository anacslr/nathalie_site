import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

type CategoryType = {
  id: number;
  name: string;
};

class categoryRepository {
  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific article by its ID, with category name
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id, name FROM category WHERE id = ?",
      [id],
    );
    return rows[0] as CategoryType;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all articles with their category name
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id, name FROM category",
    );
    return rows as CategoryType[];
  }
}

export default new categoryRepository();

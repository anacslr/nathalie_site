import type { RequestHandler } from "express";

// Import access to data
import articleRepository from "./articleRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all articles
    const articles = await articleRepository.readAll();

    // Respond with the articles in JSON format
    res.json(articles);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific article based on the provided ID
    const articleId = Number(req.params.id);
    const article = await articleRepository.read(articleId);

    // If the article is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the article in JSON format
    if (article == null) {
      res.sendStatus(404);
    } else {
      res.json(article);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the article data from the request body
    const newarticle = {
      titre: req.body.titre,
      description: req.body.description,
      date_publication: req.body.date_publication,
      image_src: req.body.image_src,
      category_id: req.body.category_id,
    };

    // Create the article
    const insertId = await articleRepository.create(newarticle);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted article
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };

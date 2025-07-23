import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define article-related routes
import articleActions from "./modules/article/articleActions";

router.get("/api/articles", articleActions.browse);
router.get("/api/articles/:id", articleActions.read);
router.post("/api/articles", articleActions.add);

/* ************************************************************************* */

export default router;

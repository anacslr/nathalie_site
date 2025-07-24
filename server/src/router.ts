import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define article-related routes
import articleActions from "./modules/article/articleActions";
import categoryActions from "./modules/category/categoryActions";

router.get("/api/articles", articleActions.browse);
router.get("/api/articles/:id", articleActions.read);
router.post("/api/articles", articleActions.add);
router.put("/api/articles/:id", articleActions.edit);
router.delete("/api/articles/:id", articleActions.destroy);

/* ************************************************************************* */

router.get("/api/categories", categoryActions.browse);
router.get("/api/categories/:id", categoryActions.read);

export default router;

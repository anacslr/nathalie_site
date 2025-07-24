import { useEffect, useState } from "react";
import Article from "../article/article";

type ArticleType = {
  id: number;
  titre: string;
  description: string;
  date_publication: string;
  image_src?: string;
  category_name: string;
};

function ArticlesWrapper() {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/articles`)
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticlesWrapper;

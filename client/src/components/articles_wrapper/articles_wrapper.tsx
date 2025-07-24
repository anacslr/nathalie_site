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

function ArticlesWrapper({ isAdmin = false }: { isAdmin?: boolean }) {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/articles`)
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id: number) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/articles/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) setArticles((prev) => prev.filter((a) => a.id !== id));
    });
  };

  return (
    <div>
      {articles.map((article) => (
        <Article
          key={article.id}
          article={article}
          isAdmin={isAdmin}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default ArticlesWrapper;

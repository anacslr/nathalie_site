import "./article.css";

type ArticleType = {
  id: number;
  titre: string;
  description: string;
  date_publication: string;
  image_src?: string;
  category_name: string;
};

function Article({ article }: { article: ArticleType }) {
  return (
    <div key={article.id} className="article-item">
      <img src={article.image_src} alt={article.titre} />
      <div className="article-content">
        <p className="article-date">{article.date_publication}</p>
        <p className="article-category">{article.category_name}</p>
        <p className="article-titre">{article.titre}</p>
        <p className="article-description">{article.description}</p>
      </div>
    </div>
  );
}

export default Article;

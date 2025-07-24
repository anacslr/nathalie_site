import ArticlesWrapper from "../../components/articles_wrapper/articles_wrapper";
import "./news.css";

function NewsPage() {
  return (
    <div>
      <h1 className="news-title">Mes actualités</h1>
      <ArticlesWrapper />
    </div>
  );
}

export default NewsPage;

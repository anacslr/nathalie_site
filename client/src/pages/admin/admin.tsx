import { useState } from "react";
import ArticlesWrapper from "../../components/articles_wrapper/articles_wrapper";
import ArticleForm from "../../components/article/ArticleForm";
import "./admin.css";

function Admin() {
  const [isAdding, setIsAdding] = useState(false);
  const [articlesKey, setArticlesKey] = useState(0); // pour forcer le refresh

  const handleAdd = () => {
    setIsAdding(false);
    setArticlesKey((k) => k + 1); // force le refresh de ArticlesWrapper
  };
  return (
    <div>
      <button
        className="add-button"
        type="button"
        onClick={() => setIsAdding(true)}
      >
        Ajouter un article
      </button>
      {isAdding && (
        <ArticleForm
          onSuccess={handleAdd}
          onCancel={() => setIsAdding(false)}
        />
      )}
      <ArticlesWrapper isAdmin={true} key={articlesKey} />
    </div>
  );
}
export default Admin;

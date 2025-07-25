import "./article.css";

type ArticleType = {
  id: number;
  titre: string;
  description: string;
  date_publication: string;
  image_src?: string;
  category_name: string;
  category_id: number;
};

type ArticleProps = {
  article: ArticleType;
  isAdmin?: boolean;
  handleDelete: (id: number) => void;
  handleUpdate?: (updatedArticle: ArticleType) => void;
};

import { useEffect, useState } from "react";

function Article({
  article,
  isAdmin = false,
  handleDelete,
  handleUpdate,
}: ArticleProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    titre: article.titre,
    description: article.description,
    date_publication: article.date_publication,
    image_src: article.image_src || "",
    category_id: article.category_id || 1,
  });

  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    [],
  );

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => setCategories([]));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setIsEditing(false);
    setForm({
      titre: article.titre,
      description: article.description,
      date_publication: article.date_publication,
      image_src: article.image_src || "",
      category_id: article.category_id || 1,
    });
  };

  const handleSave = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/articles/${article.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsEditing(false);
        if (handleUpdate) {
          handleUpdate({
            ...article,
            ...form,
            category_name:
              categories.find((c) => c.id === Number(form.category_id))?.name ||
              "",
          });
        }
      }
    });
  };

  return (
    <div key={article.id} className="article-item">
      {isEditing ? (
        <form
          className="article-content"
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <label htmlFor="image_src">Image URL</label>
          <input
            name="image_src"
            value={form.image_src}
            onChange={handleChange}
            className="article-image"
          />
          <label htmlFor="date_publication">Date de publication</label>
          <input
            name="date_publication"
            value={form.date_publication}
            onChange={handleChange}
            className="article-date"
          />
          {/* Sélecteur de catégorie */}
          <select
            name="category_id"
            value={form.category_id}
            onChange={handleChange}
            className="article-category"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="titre">Titre</label>
          <input
            name="titre"
            value={form.titre}
            onChange={handleChange}
            className="article-titre"
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="article-description"
          />
          <button type="submit" className="save-button">
            Enregistrer
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Annuler
          </button>
        </form>
      ) : (
        <>
          <img src={article.image_src} alt={article.titre} />
          <div className="article-content">
            <p className="article-date">{article.date_publication}</p>
            <p className="article-category">{article.category_name}</p>
            <p className="article-titre">{article.titre}</p>
            <p className="article-description">{article.description}</p>
            {isAdmin && (
              <div className="article-actions">
                <button
                  className="delete-button"
                  type="button"
                  onClick={() => handleDelete(article.id)}
                >
                  Supprimer
                </button>
                <button
                  className="edit-button"
                  type="button"
                  onClick={handleEdit}
                >
                  Modifier
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Article;

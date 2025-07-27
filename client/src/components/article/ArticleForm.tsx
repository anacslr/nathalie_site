import { useEffect, useState } from "react";
import "./ArticleForm.css";

type ArticleType = {
  id: number;
  titre: string;
  description: string;
  date_publication: string;
  image_src?: string;
  category_name: string;
  category_id: number;
};

type ArticleFormProps = {
  onSuccess: (article: ArticleType) => void;
  onCancel: () => void;
};

type Category = { id: number; name: string };

function ArticleForm({ onSuccess, onCancel }: ArticleFormProps) {
  const [form, setForm] = useState({
    titre: "",
    description: "",
    date_publication: "",
    image_src: "",
    category_id: 1,
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch(() => setCategories([]));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/articles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (onSuccess) onSuccess(data);
      });
  };

  return (
    <form className="article-form" onSubmit={handleSubmit}>
      <input
        name="image_src"
        value={form.image_src}
        onChange={handleChange}
        className="article-image"
        placeholder="Image (URL)"
      />
      <input
        name="date_publication"
        value={form.date_publication}
        onChange={handleChange}
        className="article-date"
        placeholder="Date de publication"
        required
      />
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
      <input
        name="titre"
        value={form.titre}
        onChange={handleChange}
        className="article-titre"
        placeholder="Titre"
        required
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        className="article-description"
        placeholder="Description"
        required
      />
      <div className="article-actions">
        <button type="submit" className="save-button" disabled={loading}>
          Ajouter
        </button>
        <button type="button" className="cancel-button" onClick={onCancel}>
          Annuler
        </button>
      </div>
    </form>
  );
}

export default ArticleForm;

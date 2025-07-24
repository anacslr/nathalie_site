import ArticlesWrapper from "../../components/articles_wrapper/articles_wrapper";
import "./admin.css";

function Admin() {
  return (
    <div>
      <ArticlesWrapper isAdmin={true} />
    </div>
  );
}
export default Admin;

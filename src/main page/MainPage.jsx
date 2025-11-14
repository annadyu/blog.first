import VideoNavigation from "./VideoNavigation.jsx";
import Header from "./Header.jsx";
import HeaderNav from "./HeaderNav.jsx";
import Articles from "./Articles.jsx";
import Blog from "./Blog.jsx";
import Pagination from "./pagination.jsx";

const MainPage = ({
  articles,
  totalArticles,
  articlesPerPage,
  currentPage,
  setCurrentPage,
  currentArticle,
  paginate
}) => {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <VideoNavigation />
        <Articles articles={articles}/>
      </main>
      <footer>
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={totalArticles}
           currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          paginate={paginate}
        />
      </footer>
    </>
  );
};

export default MainPage;

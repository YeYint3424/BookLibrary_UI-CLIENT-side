import { Link } from "react-router-dom/cjs/react-router-dom";
import history_books from "/history-books.jpg";
import useFetch from "./useFetch";
const Home = () => {
  const { data: books, isPending } = useFetch(
    "http://localhost:8080/api/v1/booksList/"
  );
  return (
    <>
      <div className="container col-9 py-0">
        <div className="main-content">
          <div
            id="carouselExampleIndicators"
            className="carousel slide mb-3"
            data-bs-ride="carousel"
            data-bs-interval="3500"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="hist_img"
                  src={history_books}
                  alt="history-books"
                  width={180}
                  height={180}
                />
                <span className="p-abs">
                  This website is intended for who is interested in histories
                  which is lost for century including Myanmar histories and
                  other histories. You can search and taste the book that you
                  will be interested in from this site.
                </span>
              </div>
              <div className="carousel-item">
                <img
                  className="hist_img"
                  src={history_books}
                  alt="history-books"
                  width={180}
                  height={180}
                />
                <span className="p-abs">
                  ဤဝဘ်ဆိုဒ်ကို မြန်မာ့သမိုင်းများနှင့် အခြားသမိုင်းများအပါအဝင်
                  ရာစုနှစ်ပေါင်းများစွာ ပျောက်ဆုံးသွားသော သမိုင်းများကို
                  စိတ်ဝင်စားသူများအတွက် ရည်ရွယ်ပါသည်။ သင်စိတ်ဝင်စားသည့်
                  စာအုပ်များကို ဤဝဘ်ဆိုဒ်မှ ရှာဖွေဖတ်ရှုနိုင်ပါသည်။
                </span>
              </div>
            </div>
          </div>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link tab active bg-tran"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                LATEST
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link tab bg-tran"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                POPULAR
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabIndex="0"
            >
              <div className="row">
                {isPending && (
                  <i className="fa-solid fa-spinner fa-spin-pulse fiftypx"></i>
                )}
                {books &&
                  books.map((book) => (
                    <div className="card col-lg-3 col-md-4 col-sm-6 p-0 mt-3 bookList">
                      <img
                        className="hist_img"
                        src="https://m.media-amazon.com/images/I/71ecqHMyQ6L._AC_UF1000,1000_QL80_.jpg"
                        height="250vh"
                        alt="book_photo"
                      />
                      {/* src={book.book.img} height='250vh' */}
                      <a href="#" className="text-light">
                        <h5 className="d-flex align-items-centwe justify-content-center mt-1">
                          {book.book.title}
                        </h5>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabIndex="0"
            >
              ...
            </div>
          </div>
        </div>
      </div>
      <div className="right-sideBar col-3">
        <div className="my-5 mx-1">
          <i className="fa-solid fa-circle-user"></i>
          <span className="mx-4">Anonymous User</span>
        </div>
        <ul>
          <Link to="/all-books">
            <li>
              <i className="fa-solid fa-book-open"></i>
              <span className="mx-4">All Book</span>
            </li>
          </Link>
          <Link to="#">
            <li>
              <i className="fa-solid fa-book-bookmark"></i>
              <span className="mx-4">Bookmarks</span>
            </li>
          </Link>
          <Link to="#">
            <li>
              <i className="fa-solid fa-heart"></i>
              <span className="mx-4">Wish List</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Home;

import { Link } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";

const AllBooks = () => {
  const { data: books, isPending } = useFetch(
    "http://localhost:8080/api/v1/booksList/"
  );
  return (
    <>
      <div className="main-all-book col-12 m-0 p-5">
        <div className="row mt-2 pt-2 mb-0">
          {isPending && (
            <i className="fa-solid fa-spinner fa-spin-pulse fiftypx"></i>
          )}
          {books &&
            books.map((book,index) => (
              <div key={index} className="col-3 px-5">
                <Link to={`/book-content/${book.book.id}`}>
                  <div className="card book mx-0 mt-3">
                    <img
                      className="card-body all-book-img m-0 p-0"
                      src="https://m.media-amazon.com/images/I/71ecqHMyQ6L._AC_UF1000,1000_QL80_.jpg"
                      alt="book_img"
                      height="200vh"
                    />
                    <div className="card-footer title p-0">
                      <p>{book.book.title}</p>
                    </div>
                    
                  </div>
                  <div className="book-sheif-bottom"></div>
                </Link>
                
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AllBooks;

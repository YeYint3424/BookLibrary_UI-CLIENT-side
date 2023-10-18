import NavBar from "./NavBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import AllBooks from "./AllBooks";
import LeftSideBar from "./LeftSideBar";
import Home from "./Home";
import "./App.css";
import BookContent from "./BookContent";

function App() {
  return (
    <Router>
      <div className="body">
        <NavBar />
        <div className="container-fluid row m-0 p-0">
          <div className="left-sideBar col-2">
            <LeftSideBar />
          </div>
          <div className="col-10 row p-0 m-0">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/all-books">
                <AllBooks />
              </Route>
              <Route exact path='/book-content/:id'>
                <BookContent />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

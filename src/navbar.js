import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import UseState from "./useState/use_state";
import UserProfile from "./useState/Object_As_State";
import SimpleCounter from "./useState/Simple_Counter";
import TextForm from "./components/TextForm";
import About from "./components/about";

// import PropTypes from 'prop-types'
function Navbar(props) {
  const [myNav, setMyNav] = useState("light");
  const [mybtn, setMybtn] = useState("Dark");
  const [myOut, setMyOut] = useState("-outline");


  // let outline = "-outline";
  const handlemyNav = () => {
    if (myNav === "light") {
      setMyOut("")
      setMyNav("dark");
      document.body.style.backgroundColor = 'grey'
      setMybtn("Light");
    } else {
       setMyOut("-outline")
      setMyNav("light");
      document.body.style.backgroundColor = 'white'

      setMybtn("Dark");
    }
  };

  return (
    <Router>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        data-bs-theme={myNav}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/textform">
                  Text Form
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/useState">
                  useState
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link> 
              </li>*/}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <button
              className={`mx-2 btn btn-${myNav === 'dark' ? 'light' : 'dark'}`}
              onClick={handlemyNav}
              
              type="button5"

            >
              
              {mybtn} Mode
            </button>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/textform" element={<TextForm outline={myOut}/>}></Route>
          <Route path="/useState" element={<UseState />}>
            <Route path="counter" element={<SimpleCounter />} />
            <Route path="objectState" element={<UserProfile />} />
          </Route>
          <Route path="/about" element={<About mode={mybtn === 'Light' ? 'dark' : 'light'} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Navbar;

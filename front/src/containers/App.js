import React, { Component } from "react";
import "../styles/App.css";
import NavBar from "../components/NavBar";
import HomeLogged from "../containers/HomeLogged";
//import Footer from './components/Footer';
import "materialize-css/dist/css/materialize.min.css";

import WithAuth from "../components/withAuth";
import { BackgroundRemove } from "../components/Background";
import SideMenu from "../components/SideMenu";



class App extends Component {
  componentDidMount() {
    BackgroundRemove();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
              <div className="main">
                <SideMenu />
              </div>
              <div>
                 <HomeLogged /> 
              </div>

        </div>
      </div>
    );
  }
}

export default WithAuth(App);

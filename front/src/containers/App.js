import React, { Component } from "react";
import "../styles/App.css";
import Dashboard from "../components/Dashboard";
//import Footer from './components/Footer';
import "materialize-css/dist/css/materialize.min.css";

import WithAuth from "../components/withAuth";
import { BackgroundRemove } from "../components/Background";
<<<<<<< HEAD
import SideMenu from "../components/SideMenu";



=======
>>>>>>> origin/asma_dev
class App extends Component {
  componentDidMount() {
    BackgroundRemove();
  }
 
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <NavBar />
        <div>
              <div className="main">
                <SideMenu />
              </div>
              <div>
                 <HomeLogged /> 
              </div>

        </div>
=======
        <Dashboard />
>>>>>>> origin/asma_dev
      </div>
    );
  }
}

export default WithAuth(App);

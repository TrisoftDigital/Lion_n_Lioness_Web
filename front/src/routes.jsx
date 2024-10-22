import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./containers/App";
import Login from "./containers/Login";
import Register from "./containers/Register";
import ConfirmAddr from "./components/ConfirmAddr";
import ForgotPassword from "./containers/ForgotPassword";
import ResetPassword from "./containers/ResetPassword";
import UserProfile from "./containers/UserProfile";
import NotFound from "./containers/NotFound";
import Messages from "./components/messages";
import Search from "./containers/Search";
import AdminLogin from "./containers/Admin/AdminLogin";
import AdminDashboard from "./containers/Admin/AdminDashboard";
import UsersList from "./containers/Admin/AdminUsers";
import PrivateRoute from "./components/PrivateRoutes";
import MainScreen from './containers/Home/MainScreen'
// import GoogleLogin from "./containers/googleLogin";

import Posts from "./components/Posts";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Photos from "./components/Photos";
import NavBar from "./components/NavBar";
import EditProfileImage from "./components/EditProfileImage";
import Followers from "./components/Followers";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UpgradePlan from "./components/UpgradePlan";
import Payment from "./components/Payment";
// Layout for Sidebar + Posts
const SidebarLayout = ({ component: Component, ...rest }) => {
  return (
    <div className="dashboard-wrapper" style={{ display: "flex" ,width:'100%'}} >
      {/* Sidebar always visible */}
      <div className="left-panel">
         <Sidebar />

      </div>
      {/* Child component to render */}
      <div className="right-panel"> {/* Adjust this based on your Sidebar width */}
      {/* <NavBar /> */}
        <Component {...rest} />
      </div>
    </div>
  );
};

export default function MainRouter() {
  return (
    <Router>
      <div>
        <Switch>

          {/* admin routes */}
          <Route exact path="/admin/login" component={AdminLogin} />
                  {/* Protected Routes */}
          <PrivateRoute exact path="/admin/users" component={UsersList} />
          <PrivateRoute exact path="/admin/dashboard" component={AdminDashboard} />


          {/* <Route path="/main" component={MainScreen} />  */}
          {/* <Route path="/users/google_signin" component={GoogleLogin} /> */}=======
          <Route path="/users/login" component={Login} />

          <Route exact path="/" component={App} />
          <Route exact path="/users/register" component={Register} />

          <Route path="/users/register/:key" component={ConfirmAddr} />
          <Route path="/users/forgot-password" component={ForgotPassword} />
          <Route path="/users/reset-password/:key" component={ResetPassword} />
          
          <Route path="/users/profile/:username" component={UserProfile} />
          <Route path="/chat/messages" component={Messages} />
          <Route path="/main/search" component={Search} />

          {/* Sidebar with Posts route */}
          <Route path="/users/posts" render={(props) => <SidebarLayout component={Posts} {...props} />} />
          <Route path="/users/about" render={(props) => <SidebarLayout component={About} {...props} />} />
          <Route path="/users/photos" render={(props) => <SidebarLayout component={Photos} {...props} />} />
          <Route path="/users/editprofileimage" render={(props) => <SidebarLayout component={EditProfileImage} {...props} />} />
          <Route path="/users/followers" render={(props) => <SidebarLayout component={Followers} {...props} />} />
          <Route path="/users/upgradeplan/:id" render={(props) => <SidebarLayout component={UpgradePlan} {...props} />} />
          <Route path="/users/buyplan/:id"  render={(props) => <SidebarLayout component={Payment} {...props} />}/>


          {/* Catch-all for 404 */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

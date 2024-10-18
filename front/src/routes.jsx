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
import { GoogleOAuthProvider } from "@react-oauth/google";


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
          <Route exact path="/" component={App} />
          <Route path="/users/login" component={Login} />
          <Route exact path="/users/register" component={Register} />
          <Route path="/users/register/:key" component={ConfirmAddr} />
          <Route path="/users/forgot-password" component={ForgotPassword} />
          <Route path="/users/reset-password/:key" component={ResetPassword} />
          <Route path="/users/profile/:username" component={UserProfile} />
          <Route path="/chat/messages" component={Messages} />
          <Route path="/main/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

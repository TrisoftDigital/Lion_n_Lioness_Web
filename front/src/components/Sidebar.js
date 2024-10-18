import React, { Component, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import AuthService from "../services/AuthService";
import { withRouter, NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";
import io from "socket.io-client";
import Axios from "axios";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import Notifications from "@material-ui/icons/Notifications";
import Menu from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon"; 
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import LikeNotif from "@material-ui/icons/ThumbUp";
import DislikeNotif from "@material-ui/icons/ThumbDown";
import HotNotif from "@material-ui/icons/Whatshot";
import HighlightOff from "@material-ui/icons/HighlightOff";
import Divider from "@material-ui/core/Divider";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NavBar from "./NavBar";
import { Link } from 'react-router-dom'
import {
  ExpansionPanel,        // Use ExpansionPanel instead of Accordion
  ExpansionPanelSummary,  // Use ExpansionPanelSummary instead of AccordionSummary
  ExpansionPanelDetails,  // Use ExpansionPanelDetails instead of AccordionDetails
  Select,
  MenuItem,
  Typography,
  Checkbox,
  ListItemText,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default function Sidebar(){
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Handle change for multi-selection
  const handleChange = (event) => {
    setSelectedOptions(event.target.value);
  };


 
         return(
         <div className="sidebar-wrapper left-panel-sidebar">
          {/* <div className="sidebar-header">
            <div className="sidebar-logo">
              <img src={logo} alt="" />
            </div>
            <div className="sidebar-icons">
              <PeopleIcon />
              <ExitToAppIcon />
              <NotificationsIcon />
            </div>
          </div> */}
          <NavBar />
            <div className="packages-wrapper">
              <a href="/users/upgradeplanplatinum">
              <div className="package-item platinum-item">
              <p className="label"> Lion & Lioness <span className="platinum">Platinum</span></p>
              <span>Level up every action you take on Lionnlioness</span>
              </div>
              </a>
              <a href="/users/upgradeplangold">
              <div className="package-item gold-item">
              <p className="label"> Lion & Lioness <span className="gold">Gold</span></p>
              <span>Level up every action you take on Lionnlioness</span>
              </div>
              </a> <a href="/users/upgradeplanplus">
              <div className="package-item plus-item">
              <p className="label"> Lion & Lioness <span className="plus">Plus</span></p>
              <span>Level up every action you take on Lionnlioness</span>
              </div>
              </a> 
              <a href="/users/upgradeonenightstand">
              <div className="package-item platinum-item">
              <p className="label"> Upgrade Your Love Life</p>
              <span>One Night Stand!</span>
              </div>
              </a>
            </div>
              <h3>Menu</h3>
              <ul className="sidebar-links">
                <li><a href="/users/posts">Posts <ArrowRightAltIcon  /> </a></li>
                <li><a href="/users/about">About   <ArrowRightAltIcon  /> </a></li>
                <li><a href="/users/followers">Followers   <ArrowRightAltIcon  /> </a></li>
                <li><a href="/users/photos">Photos   <ArrowRightAltIcon  /> </a></li>
                <li><a href="">Find The Hotel   <ArrowRightAltIcon  /> </a></li>
                <li><a href="/users/upgradeonenightstand">One Night Stand   <ArrowRightAltIcon  /> </a></li>
                <li><a href="/users/editprofileimage">Edit Profile Image<ArrowRightAltIcon  />    </a></li>
              </ul>

              <div class="verification-btn" bis_skin_checked="1"> <a href="https://lionnlioness-v2.devservertd.com/public/verify_gmail">Click to verify your email</a></div>
              <h3>Account Settings</h3>
              <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Expansion Panel with Multi-Select</Typography>

          {/* Multi-Select inside ExpansionPanel Summary */}
          <Select
            multiple
            value={selectedOptions}
            onChange={handleChange}
            renderValue={(selected) => selected.join(', ')}  // Display selected values as comma-separated string
            style={{ marginLeft: 'auto' }}  // Aligns to the right
          >
            {/* Multi-select options with checkboxes */}
            <MenuItem value={10}>
              <Checkbox checked={selectedOptions.indexOf(10) > -1} />
              <ListItemText primary="Option 1" />
            </MenuItem>
            <MenuItem value={20}>
              <Checkbox checked={selectedOptions.indexOf(20) > -1} />
              <ListItemText primary="Option 2" />
            </MenuItem>
            <MenuItem value={30}>
              <Checkbox checked={selectedOptions.indexOf(30) > -1} />
              <ListItemText primary="Option 3" />
            </MenuItem>
          </Select>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Typography>
            {/* Display selected options */}
            You selected: {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'None'}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

            </div>
             
         )
        
}








// const Auth = new AuthService();
// const CancelToken = Axios.CancelToken;
// // eslint-disable-next-line
// let cancel;

// class Sidebar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userID: "",
//       socket: "",
//       listNotif: [],
//       nbMessages: null,
//       nbNotifications: null,
//       right: false,
//       left: false
//     };
//     this._isMounted = false;
//     this.Auth = new AuthService();
//     this.handleLogout = this.handleLogout.bind(this);
//     this.Auth.getConfirm = this.Auth.getConfirm.bind(this);
//     this.Auth.loggedIn = this.Auth.loggedIn.bind(this);
//   }

//   async componentDidMount() {
//     this._isMounted = true;
//     if (!localStorage.getItem("Token")) {
//       return;
//     }
//     this._isMounted &&
//       (await this.setState({ userID: this.Auth.getConfirm()["id"] }));

//     this._isMounted && (await this.callMsgNotifApi());
//     this._isMounted && (await this.callMainNotifApi());

//     this._isMounted &&
//       (await this.setState({
//         socket: io({
//           transports: ["polling"],
//           requestTimeout: 50000,
//           upgrade: false,
//           "sync disconnect on unload": true,
//           query: {
//             userID: this.state.userID
//           }
//         })
//       }));

//     if (this.state.socket) {
//       this.state.socket.on("new message", data => {
//         if (data["userID_other"] === this.state.userID)
//           this._isMounted &&
//             this.setState({ nbMessages: this.state.nbMessages + 1 });
//       });

//       this.state.socket.on("readMessage", data => {
//         // eslint-disable-next-line
//         if (data == this.state.userID) this.callMsgNotifApi();
//       });

//       this.state.socket.on("newNotif", id => {
//         if (id === this.state.userID) this.callMainNotifApi();
//       });
//     }
//   }

//   callMsgNotifApi = async () => {
//     await Axios.get("/chat/notification/messages/" + this.state.userID, {
//       cancelToken: new CancelToken(function executor(c) {
//         cancel = c;
//       })
//     })
//       .then(res => {
//         this._isMounted &&
//           this.setState({
//             nbMessages: res.data["notification"][0]["COUNT (*)"]
//           });
//       })
//       .catch(error => {
//         //console.log(error);
//       });
//   };

//   callMainNotifApi = async () => {
//     var counter = 0;
//     await Axios.get("/users/notification/main/" + this.state.userID, {
//       cancelToken: new CancelToken(function executor(c) {
//         cancel = c;
//       })
//     })
//       .then(res => {
//         var tab = res.data.tab;
//         for (var i = 0; i < tab.length; i++)
//           // eslint-disable-next-line
//           if (tab[i]["isRead"] == 0) counter++;
//         this._isMounted &&
//           this.setState({
//             listNotif: tab,
//             nbNotifications: counter
//           });
//         //console.log(this.state.listNotif);
//       })
//       .catch(err => {
//         //console.log(err);
//       });
//   };

//   componentDidUpdate() {
//     if (
//       (!localStorage.getItem("Token") || !this.Auth.isTokenExpired) &&
//       this.state.socket !== ""
//     )
//       this.state.socket.close();
//   }
//   componentWillUnmount() {
//     if (this.state.socket !== "") this.state.socket.close();
//     this._isMounted = false;
//   }

//   render() {
//     const logout = this.handleLogout;
//     var listNotif = this.state.listNotif;
//     const userID = this.state.userID;

//     const useStyles = makeStyles(theme => ({
//       margin: {
//         margin: theme.spacing(2),
//         marginRight: theme.spacing(3)
//       },
//       list: {
//         width: 320
//       }
//     }));

//     const toggleDrawer = (side, open) => event => {
//       Axios.post("/users/read-notification/" + userID).then(res => {
//         this._isMounted &&
//           this.setState({ nbNotifications: null, [side]: open });
//       });

//       if (
//         event &&
//         event.type === "keydown" &&
//         (event.key === "Tab" || event.key === "Shift")
//       ) {
//         return;
//       }
//     };

//     const LoggedInLinks = () => {
//       const classes = useStyles();

//       const sideList = (side, listNotif) => (
//         <div
//           className={classes.list}
//           role="presentation"
//           onClick={toggleDrawer(side, false)}
//           onKeyDown={toggleDrawer(side, false)}
//         >
//           <h5 style={{ textAlign: "center", color: "#ffb6d3" }}>
//             Notifications
//           </h5>
//           <List>
//             {listNotif.length < 1 ? (
//               <ListItem>
//                 <ListItemIcon>
//                   <HighlightOff />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={"You do not have any notification yet."}
//                   style={{ wordBreak: "break-word", color: "black" }}
//                 />
//               </ListItem>
//             ) : (
//               ""
//             )}
//             {listNotif.map((text, index) => (
//               <NavLink
//                 to={"/users/profile/" + text.sender_username}
//                 key={index}
//               >
//                 <ListItem button>
//                   <ListItemIcon>
//                     {text.type === "visit" || text.type === "like_back" ? (
//                       <HotNotif className="notif-icons" />
//                     ) : text.type === "dislike" ? (
//                       <DislikeNotif className="notif-icons" />
//                     ) : (
//                       <LikeNotif className="notif-icons" />
//                     )}
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={text.sender_username + " " + text.data}
//                     style={{ wordBreak: "break-word", color: "black" }}
//                   />
//                 </ListItem>
//               </NavLink>
//             ))}
//           </List>
//         </div>
//       );

//       return (
//         <ul className="right hide-on-med-and-down">
//           <li>
//             <NavLink to={"/main/search/"}>
//               {<i className="material-icons">search</i>}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to={"/users/profile/" + Auth.getConfirm().username}>
//               {<i className="material-icons">person</i>}
//             </NavLink>
//           </li>
//           <li>
//             <Button
//               className="MuiButton-colorInherit"
//               to="#"
//               onClick={toggleDrawer("right", true)}
//               style={{ backgroundColor: "none", borderRadius: "0px" }}
//             >
//               <Badge
//                 className={classes.margin}
//                 badgeContent={this.state.nbNotifications}
//                 color="secondary"
//               >
//                 <Notifications />
//               </Badge>
//             </Button>
//             <SwipeableDrawer
//               anchor="right"
//               open={this.state.right}
//               onClose={toggleDrawer("right", false)}
//               onOpen={toggleDrawer("right", true)}
//             >
//               {sideList("right", listNotif)}
//             </SwipeableDrawer>
//           </li>
//           <li>
//             <NavLink to="/chat/messages">
//               <Badge
//                 className={classes.margin}
//                 badgeContent={this.state.nbMessages}
//                 color="secondary"
//               >
//                 <MailIcon />
//               </Badge>
//             </NavLink>
//           </li>
//           <li>
//             <button className="nav-buttons" onClick={logout}>
//               Log out
//             </button>
//           </li>
//         </ul>
//       );
//     };

//     // Generates the links in the navbar for a logged out user
//     function LoggedOutLinks() {
//       return (
//         <ul className="right hide-on-med-and-down">
//           <li>
//             <NavLink to="/users/register">Register</NavLink>
//           </li>
//           <li>
//             <NavLink to="/users/login">Log in</NavLink>
//           </li>
//         </ul>
//       );
//     }

//     const MobileLoggedInLinks = () => {
//       const toggleMenu = (menu, open) => event => {
//         if (
//           event &&
//           event.type === "keydown" &&
//           (event.key === "Tab" || event.key === "Shift")
//         ) {
//           return;
//         }

//         this._isMounted && this.setState({ [menu]: open });
//       };

//       const classes = useStyles();

//       const MobileMenuLogged = menu => (
//         <div
//           className={classes.list}
//           role="presentation"
//           onClick={toggleMenu(menu, false)}
//           onKeyDown={toggleMenu(menu, false)}
//         >
//           <h5 style={{ textAlign: "center", color: "#ffb6d3" }}>Menu</h5>
//           <List>
//             <ListItem>
//               <NavLink to={"/main/search/"} className="mobile-menu-links">
//                 <i className="material-icons link-icon mobile-menu-icons">
//                   search
//                 </i>
//                 <span className="mobile-menu-notif-text">Search</span>
//               </NavLink>
//             </ListItem>
//             <ListItem>
//               <NavLink
//                 className="mobile-menu-links"
//                 to={"/users/profile/" + this.Auth.getConfirm()["username"]}
//               >
//                 <i className="material-icons link-icon mobile-menu-icons">
//                   person
//                 </i>
//                 <span className="mobile-menu-notif-text">My profile</span>
//               </NavLink>
//             </ListItem>
//             <ListItem>
//               <Button
//                 className="MuiButton-colorInherit mobile-menu-notif"
//                 to="#"
//                 onClick={toggleDrawer("right", true)}
//                 style={{ backgroundColor: "none", borderRadius: "0px" }}
//               >
//                 <Badge
//                   className={classes.margin}
//                   badgeContent={this.state.nbNotifications}
//                   color="secondary"
//                 >
//                   <Notifications />
//                 </Badge>{" "}
//                 <span className="mobile-menu-notif-text">Notifications</span>
//               </Button>
//             </ListItem>
//           </List>
//           <Divider />
//           <List>
//             <ListItem>
//               <NavLink
//                 to="/chat/messages"
//                 className="mobile-menu-links mobile-menu-message"
//               >
//                 <Badge
//                   className={classes.margin}
//                   badgeContent={this.state.nbMessages}
//                   color="secondary"
//                 >
//                   <MailIcon />
//                 </Badge>
//                 <span className="mobile-menu-notif-text">Messages</span>
//               </NavLink>
//             </ListItem>
//           </List>
//           <Divider />
//           <List>
//             <ListItem>
//               <NavLink className="mobile-menu-links" onClick={logout} to="#">
//                 <span className="mobile-menu-notif-text">Log out</span>
//               </NavLink>
//             </ListItem>
//           </List>
//         </div>
//       );

//       return (
//         <div>
//           <Button
//             className="mobile-menu-btn"
//             onClick={toggleMenu("left", true)}
//           >
//             {/*  <i className="material-icons">menu</i> */}
//             <Badge
//               className={classes.margin}
//               badgeContent={this.state.nbNotifications + this.state.nbMessages}
//               color="secondary"
//             >
//               <Menu />
//             </Badge>
//           </Button>

//           <SwipeableDrawer
//             anchor="left"
//             open={this.state.left}
//             onClose={toggleMenu("left", false)}
//             onOpen={toggleMenu("left", true)}
//           >
//             {MobileMenuLogged("left")}
//           </SwipeableDrawer>
//         </div>
//       );
//     };

//     const MobileLoggedOutLinks = () => {
//       const toggleMenu = (menu, open) => event => {
//         if (
//           event &&
//           event.type === "keydown" &&
//           (event.key === "Tab" || event.key === "Shift")
//         ) {
//           return;
//         }

//         this._isMounted && this.setState({ [menu]: open });
//       };

//       const classes = useStyles();

//       const MobileMenuLoggedOut = menu => (
//         <div
//           className={classes.list}
//           role="presentation"
//           onClick={toggleMenu(menu, false)}
//           onKeyDown={toggleMenu(menu, false)}
//         >
//           <h5 style={{ textAlign: "center", color: "#ffb6d3" }}>Menu</h5>
//           <List>
//             <ListItem>
//               <NavLink className="mobile-menu-links" to="/users/login">
//                 <i className="material-icons link-icon mobile-menu-icons">
//                   account_box
//                 </i>
//                 <span className="mobile-menu-notif-text">Log in</span>
//               </NavLink>
//             </ListItem>
//             <ListItem>
//               <NavLink className="mobile-menu-links" to="/users/register">
//                 <i className="material-icons link-icon mobile-menu-icons">
//                   person_add
//                 </i>
//                 <span className="mobile-menu-notif-text">Register</span>
//               </NavLink>
//             </ListItem>
//           </List>
//         </div>
//       );

//       return (
//         <div>
//           <Button
//             className="mobile-menu-btn"
//             onClick={toggleMenu("left", true)}
//           >
//             <i className="material-icons">menu</i>
//           </Button>
//           <SwipeableDrawer
//             anchor="left"
//             open={this.state.left}
//             onClose={toggleMenu("left", false)}
//             onOpen={toggleMenu("left", true)}
//           >
//             {MobileMenuLoggedOut("left")}
//           </SwipeableDrawer>
//         </div>
//       );
//     };

//     // Generates the links in the navbar for a logged in user
//     function NavLinks() {
//       if (Auth.loggedIn())
//         return (
//           <div>
//             <LoggedInLinks />
//             <MobileLoggedInLinks />
//           </div>
//         );
//       else
//         return (
//           <div>
//             <LoggedOutLinks />
//             <MobileLoggedOutLinks />
//           </div>
//         );
//     }

//     document.addEventListener("DOMContentLoaded", function() {
//       var elems = document.querySelectorAll(".sidenav");
//       M.Sidenav.init(elems);
//     });

//     return (
//       <div>
//         <nav>
//           <div className="nav-wrapper">
//             <NavLink to="/" className="brand-logo">
//               <img className="header-logo" src={logo} alt="" />
//             </NavLink>
//             <NavLinks />
//           </div>
//         </nav>
//       </div>
//     );
//   }

//   // Log out the user clearing his Auth token
//   handleLogout() {
//     Auth.logout();
//     this.props.history.replace("/users/login");
//   }
// }

// export default withRouter(NavBar);

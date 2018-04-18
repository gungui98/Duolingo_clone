import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import UserProfile from "../views/UserProfile/UserProfile.jsx";
import TableList from "../views/TableList/TableList.jsx";
import Notfound from "../views/Notfound/Notfound.jsx";
import Typography from "../views/Typography/Typography.jsx";
import Icons from "../views/Icons/Icons.jsx";
import Maps from "../views/Maps/Maps.jsx";
import NotificationsPage from "../views/Notifications/Notifications.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName:'a',//: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component:Notfound //DashboardPage
  },
  {
    path: "/user",
    sidebarName:'a',//: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component:Notfound //UserProfile
  },
  {
    path: "/table",
    sidebarName:'a',//: "Table List",
    navbarName: "Table List",
    icon: ContentPaste,
    component:Notfound //TableList
  },
  {
    path: "/typography",
    sidebarName:'a',//: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Notfound
  },
  // {
  //   path: "/icons",
  //   sidebarName:'a',//: "Icons",
  //   navbarName: "Icons",
  //   icon: BubbleChart,
  //   component: Icons
  // },
  // {
  //   path: "/maps",
  //   sidebarName:'a',//: "Maps",
  //   navbarName: "Map",
  //   icon: LocationOn,
  //   component: Maps
  // },
  // {
  //   path: "/notifications",
  //   sidebarName:'a',//: "Notifications",
  //   navbarName: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage
  // },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;

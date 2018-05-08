import UserProfile from "../views/UserProfile/UserProfile.jsx";
import Demo from "../views/demo/demo.jsx";
import Notfound from "../views/Notfound/Notfound.jsx";
import Loading from "../views/Loading/loading.jsx";
import {Session} from 'meteor/session';
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
    navbarName: "Dashboard",
    icon: Dashboard,
    component:Demo //DashboardPage
  },
  {
    path: "/user",
    sidebarName:'a',//: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component:UserProfile //UserProfile
  },
  {
    path: "/dictionary",
    sidebarName:'a',//: "Table List",
    navbarName: "Dictionary",
    icon: ContentPaste,
    component:Notfound //TableList
  },
  {
    path: "/typography",
    sidebarName:'a',//: "Typography",
    navbarName: "Statistic",
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

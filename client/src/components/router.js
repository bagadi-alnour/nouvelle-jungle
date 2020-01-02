import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Home from "./home";
import Dashboard from "./dashboard";
import ArticleList from "./admin/articleList";
import Articles from "./articles";
import LilleNomade from "./lille-nomade";
import About from "./about";
import Media from "./media";
import ArticleAdd from "./admin/articleAdd";
import ContactList from "./admin/contactList";
import Contact from "./contact";
import EventsList from "./admin/eventsList";
import EventAdd from "./admin/eventAdd";
import Event from "./event";
import Login from "./login";
import Article from "./article";
import NotFound from "./notfound";
import ArticleUpdate from "./admin/articleUpdate";
const Router = () => (
  <Switch>
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <PrivateRoute exact path="/event-Add" component={EventAdd} />
    <PrivateRoute exact path="/contact/list" component={ContactList} />
    <PrivateRoute exact path="/article/add" component={ArticleAdd} />
    <PrivateRoute exact path="/articlesList" component={ArticleList} />
    <PrivateRoute exact path="/eventList" component={EventsList} />
    <Route exact path="/" component={Home} />
    <Route exact path="/lille-nomade" component={LilleNomade} />
    <Route exact path="/articles" component={Articles} />
    <Route exact path="/article/:id" component={Article} />
    <Route exact path="/article/update/:id" component={ArticleUpdate} />
    <Route exact path="/media" component={Media} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/event" component={Event} />
    <Route exact path="/login" component={Login} />
    <Route path="/*" component={NotFound} />
  </Switch>
);
export default Router;

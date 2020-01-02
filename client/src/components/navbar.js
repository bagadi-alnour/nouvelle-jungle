import React, { Component } from "react";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  HeaderRow
} from "react-mdl";
import { Link } from "react-router-dom";
import Router from "./router";
class NavBar extends Component {
  render() {
    return (
      <Layout fixedHeader>
        <Header className="bg-dark" title="Nouvelle Jungle" scroll>
          <HeaderRow>
            <div className="container  p-0">
              <Navigation className="">
                <Link className="h4 m-0 pl-0 pr-6" to="/about">
                  Nouvelle Jungle
                </Link>
                <Link className="font-weight-bold m-0 pl-0" to="/">
                  Accueil
                </Link>
                <Link className="font-weight-bold m-0 pl-0" to="/articles">
                  Articles
                </Link>
                <Link className="font-weight-bold m-0 pl-0" to="/lille-nomade">
                  Lille Nomade
                </Link>
                <Link className="font-weight-bold m-0 pl-0" to="/media">
                  Média
                </Link>
                <Link className="font-weight-bold m-0 pl-0" to="/event">
                  Événements
                </Link>
                <a
                  className="font-weight-bold m-0 pl-0"
                  href={
                    "https://www.helloasso.com/associations/nouvelle-jungle/formulaires/1/widget"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Faire un don
                </a>
                <Link className=" font-weight-bold m-0 pl-0" to="/contact">
                  Contact
                </Link>
                <Link className="font-weight-bold m-0 pl-0" to="/about">
                  à propos
                </Link>
              </Navigation>
            </div>
          </HeaderRow>
        </Header>
        <Drawer className="bg-dark text-white" title="Nouvelle Jungle">
          <Navigation>
            <Link className="font-weight-bold m-0 pl-0 text-center" to="/about">
              à propos
            </Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Router />
        </Content>
      </Layout>
    );
  }
}
export default NavBar;

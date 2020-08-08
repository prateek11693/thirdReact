import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import ArtistDetails from "./ArtistDetails";
import FormComponent from "./FormComponent";

const Routing = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/artist/:id" component={ArtistDetails} />
        <Route path="/forms" component={FormComponent} />
      </BrowserRouter>
    </Fragment>
  );
};
export default Routing;

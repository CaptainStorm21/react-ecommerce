import React from "react";
import Menu from "./Menu";

const Layout = ({
  title = "title",
  description = "description",
  className,
  children
}) => (
  <div>
    <Menu />
    <div className="jumbotron">
      <div className="container">
        <h2 className="display-2">{title}</h2>
        <p className="lead">{description}</p>
      </div>
    </div>      
    <div className={className}>{children}</div>
  </div>
);
export default Layout;

import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Search from "./Search";
import Docs from "./Docs";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Link to="/Home">Home </Link>
      <Link to="/About">About </Link>
      <Link to="/Contact">Contact </Link>
      <Link to="/Search">Search </Link>
      <Link to="/Docs">Docs </Link>
      <Outlet />
    </>
  );
}

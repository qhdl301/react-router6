import React from "react";
import { Outlet } from "react-router";
import Header from "./componets/Header";

function Root() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default Root;

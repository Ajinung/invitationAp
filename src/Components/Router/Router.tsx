import React from "react";
import { useRoutes } from "react-router-dom";
import FormData from "../FormData";
import Index from "../Invitation/Index";
import Landing from "../Landing/Landing";

const Router = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/invite",
      element: <Index />,
    },
  ]);

  return elements;
};

export default Router;

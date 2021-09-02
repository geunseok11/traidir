import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import homeToLoad from "../Modules/reducers/home";

const Home = (props) => {
  const dispatch = useDispatch();
  const home = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(homeToLoad());
  }, []);

  return (
    <div>
      <link to="/beerlist"> BEER LIST</link>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import axiosGet from "../utils/axiosGet";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosGet('/api/colors')
      .then((res) => {
        console.log(res);
        setColorList(res.data);
      })
      .catch((e) => {
        console.log(e);
      })
  }, [])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

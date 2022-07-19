import React, { useState } from "react";
import ItemsC from "../controller/ItemsC";
import Body from "./Body";
import '../controller/ItemsC';

function Home() {
  const [data, setData] = useState(null);

  return (
    <React.Fragment>
      <div className="flex items-center justify-center flex-col space-y-6 bg-emerald-500 p-2 mb-20">
        <div className="text-4xl text-white mt-6 mb-6 text-6xl games">SAND BOX</div>
      </div>
      <Body
        data={data}
        setData={setData}
      ></Body>
      <ItemsC
        data={data}
        setData={setData}
      ></ItemsC> 
    </React.Fragment>
  );
}

export default Home;
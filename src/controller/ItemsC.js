import axios from "axios";
import { useEffect } from "react";
import './ItemsC.css';

//fetching api
function ItemsC({ setData, data }) {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`
        );

        setData(
          response.data
            .filter((d) => d.title)
            .map((d, i) => {
              d.visible = true;
              d.id = i;
              return d;
            })
        );
      } catch (err) {
        setData(null);
      } 
    };
    getData();
  }, []);

  let relevantData = [];
  if (data) {
    relevantData = data.filter((d) => d.visible);
  }

  //code for getting data along with styles
  return (
    <div className="App">
      <h1 className="text-3xl py-12 games text-emerald-700  ">Games List</h1>
      <div className="grid grid-cols-3 text-start  justify-center games">
      
        {relevantData && relevantData.map((game) => {
            return <div>
              <div className="grid grid-cols-1 ml-12 mr-12 p-4 bg-emerald-500 rounded-lg my-2 justify-center shadow-lg shadow-emerald-600/50">
                <div className="grid-auto w-64"><span className="font-bold">Name: </span><div className="text-white">
                {game.title}</div></div>
                <div className="grid-auto w-64"><span className="font-bold">platform: </span><div className="text-white">
                {game.platform}</div></div>
                <div className="grid-auto w-64"><span className="font-bold">Score: </span><div className="text-white">
                {game.score} </div></div>
                <div className="grid-auto w-64"><span className="font-bold">Genre </span><div className="text-white">
                {game.genre}</div></div>
                <div className="grid-auto w-64"><span className="font-bold">Editor's Choice: </span> <div className="text-white">
                {game.editors_choice} </div></div>
                </div>
      

                <br /> 

            </div>
        }
        
        )}
      </div>
      
    </div>
  );
}

export default ItemsC;

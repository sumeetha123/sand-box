import axios from "axios";
import { useEffect } from "react";
import './ItemsC.css';


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


  return (
    <div className="App">
      <h1 className="text-xl py-12 games text-emerald-700 ">Games List</h1>
      <div className="flex flex-row flex-wrap text-start justify-center ">
      
        {relevantData && relevantData.map((game) => {
            return <div>
              <div className="flex flex-col my-2">
                <div className="flex-auto w-64"><span className="font-bold">Name: </span>
                {game.title}</div>
                <div className="flex-auto w-64"><span className="font-bold">platform: </span>
                {game.platform}</div>
                <div className="flex-auto w-64"><span className="font-bold">Score: </span>
                {game.score} </div>
                <div className="flex-auto w-64"><span className="font-bold">Genre </span>
                {game.genre} </div>
                <div className="flex-auto w-64"><span className="font-bold">Editor's Choice: </span>
                {game.editors_choice} </div>
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

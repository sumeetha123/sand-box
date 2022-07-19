import axios from "axios";
import { useEffect } from "react";


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
      <h1 className="text-2xl py-12 ">Games List</h1>
      <ul>
        {relevantData && relevantData.map((game) => {
            return <li className="games">
                <h3>{game.title}</h3>
                <p>{game.platform}</p>
                <p>{game.score}</p>
                <p>{game.genre}</p>
                <p>{game.editors_choice}</p>

                <br /> 

            </li>
        }
        
        )}
      </ul>
    </div>
  );
}

export default ItemsC;

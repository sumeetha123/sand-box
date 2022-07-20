import React, { useState } from "react";
function Body({ setData, data }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target }) => {
    const inputValue = target.value;
    setInputValue(inputValue);
  };
  const searchItems = function () {
    const relevantData = data.filter((game) => {
      return game.title.toLowerCase().includes(inputValue.toLowerCase());
    });

    const copyOfData = [];
    for (const game of data) {
      const gameCopy = Object.assign({}, game);
      gameCopy.visible = false;
      copyOfData.push(gameCopy);
    }

    for (const game of relevantData) {
      const relevantGame = copyOfData.find((d) => d.id == game.id);
      if (relevantGame) {
        relevantGame.visible = true;
      }
    }

    setData(copyOfData);
  };

  return (
    <div className="flex space-x-6 items-center justify-center">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search Games"
        value={inputValue}
        className="border-2 border-emerald-500 rounded  p-2 w-64"
      />
      <button
        onClick={searchItems}
        className="px-3 py-2 bg-emerald-600 rounded text-white"
      >
        Get Games
      </button>
    </div>
  );
}

export default Body;

import React, { useState } from 'react';

const Cocktail = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
      const jsonData = await response.json();
      setData(jsonData.drinks); // Corrected the property to 'drinks'
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="font-sans">
      <div className="flex justify-center gap-4 mt-6">
        <input
          type="text"
          placeholder="Enter Drink"
          value={search}
          onChange={handleInput}
          className="w-96 px-4 py-2 text-lg bg-gray-200 rounded-lg border-none focus:ring focus:outline-none"
        />
        <button
          onClick={myFun}
          className="w-24 bg-orange-500 text-white text-lg font-medium rounded-lg py-2 hover:bg-orange-600"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-6 justify-center mt-8">
        {data ? (
          data.map((drink) => (
            <div
              key={drink.idDrink} // Corrected key to use 'idDrink'
              className="w-72 h-auto text-center bg-white shadow-lg rounded-lg"
            >
              <img
                src={drink.strDrinkThumb} // Corrected to 'strDrinkThumb'
                alt={drink.strDrink} // Corrected to 'strDrink'
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="px-4 py-2">
                <h3 className="text-left font-semibold text-lg">{drink.strDrink}</h3>
                <p className="text-left text-sm text-gray-600">
                  Category: {drink.strCategory}
                </p>
                <p className="text-left text-sm text-gray-600">
                  Glass: {drink.strGlass}
                </p>
                <div className="mt-5">
                  <a
                    className="bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-orange-600"
                    href={drink.strVideo || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Recipe
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          search && <p className="text-center text-gray-600 mt-8">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Cocktail;

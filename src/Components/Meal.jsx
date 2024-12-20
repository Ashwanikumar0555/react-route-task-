import React, { useState } from 'react';

const Meal = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const jsonData = await response.json();
      setData(jsonData.meals);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="font-sans">
        <div  className="flex justify-center gap-4 mt-6  font-extrabold text-orange-600 hover:bg-gray-500 duration-200  ">Search For Dish   </div>
      <div className="flex justify-center gap-4 mt-6">
        <input
          type="text"
          placeholder="Enter Dish ..."
          value={search}
          onChange={handleInput}
          className="w-96 px-4 py-2 text-lg bg-gray-200 rounded-lg border-none focus:ring focus:outline-none"
        />
        <button
          onClick={myFun}
          className="w-24 bg-orange-500 text-white text-lg font-medium rounded-lg py-2 hover:bg-orange-600 "
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-6 justify-center mt-8">
        {data ? (
          data.map((meal) => (
            <div
              key={meal.idMeal}
              className="w-72 h-96 text-center bg-white shadow-lg rounded-lg"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="px-4 py-2">
                <h3 className="text-left font-semibold text-lg">{meal.strMeal}</h3>
                <p className="text-left text-sm text-gray-600">
                  Category : {meal.strCategory}
                </p>
                <p className="text-left text-sm text-gray-600">
                  Area : {meal.strArea}
                </p>
                <div className='mt-5'>
                <a className=" bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-orange-600" 
                href={meal.strYoutube}>
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

export default Meal;












// import React, { useState } from 'react';

// const Meal = () => {
//   const [data, setData] = useState(null);
//   const [search, setSearch] = useState('');

//   const handleInput = (event) => {
//     setSearch(event.target.value);
//   };

//   const myFun = async () => {
//     try {
//       const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
//       const jsonData = await response.json();
//       setData(jsonData.meals);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="container  flex justify-items-center gap-7 mt-22px">
//       <div className="searchBar flex justify-items-center gap-7 mt-22px ">
//         <input
//           type="text"
//           placeholder="Enter Dish ..."
//           value={search}
//           onChange={handleInput}
//         />
//         <button  onClick={myFun}>Search</button>
//       </div>
//       <div className="mealResults">
//         {data ? (
//           data.map((meal) => (
//             <div key={meal.idMeal} className="mealItem">
//               <h3>{meal.strMeal}</h3>
//               <img src={meal.strMealThumb} alt={meal.strMeal} />
//               <p>{meal.strInstructions.slice(0, 100)}...</p>
//             </div>
//           ))
//         ) : (
//           search && <p>No results found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Meal;
















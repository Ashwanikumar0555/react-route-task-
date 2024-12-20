

import React, { useState, useEffect } from 'react';

const Potter = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((res) => res.json())
      .then((data) => {
        
        const filteredData = data.filter((char) => char.image);
        setCharacters(filteredData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching characters:', err);
        setLoading(false);
      });
  }, []);

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/150'; 
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Harry Potter Characters
      </h1>
      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading...</p>
      ) : (
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {characters.slice(0, 40).map((char) => (
              <div
                key={char.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={char.image}
                  alt={char.name}
                  onError={handleImageError}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold text-gray-700">{char.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Potter;












// import React, { useState, useEffect } from 'react';

// const Potter = () => {
//   const [characters, setCharacters] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://hp-api.onrender.com/api/characters')
//       .then((res) => res.json())
//       .then((data) => {
//         // Filter out characters without valid images
//         const filteredData = data.filter((char) => char.image);
//         setCharacters(filteredData);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error fetching characters:', err);
//         setLoading(false);
//       });
//   }, []);

//   const handleImageError = (e) => {
//     e.target.src = 'https://via.placeholder.com/150'; // Fallback placeholder
//   };

//   return (
//     <div>
//       <h1 className="font-extrabold">Harry Potter Characters</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
//           {characters.slice(0, 40).map((char) => (
//             <li key={char.name} style={{ listStyle: 'none', textAlign: 'center' }}>
//               <img
//                 src={char.image}
//                 alt={char.name}
//                 onError={handleImageError} // Replace broken images dynamically
//                 style={{
//                   width: '150px',
//                   height: '200px',
//                   objectFit: 'cover',
//                   borderRadius: '8px',
//                   border: '1px solid #ddd',
//                 }}
//               />
//               <p>{char.name}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Potter;

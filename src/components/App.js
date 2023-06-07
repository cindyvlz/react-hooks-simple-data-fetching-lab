import React, { useEffect, useState } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    // Fetch the random dog image from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        // Update the dogImage state with the fetched image URL
        setDogImage(data.message);
      })
      .catch(error => {
        console.log('Error fetching dog image:', error);
      });
  }, []);

  return (
    <div>
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
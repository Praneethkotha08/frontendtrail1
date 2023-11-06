import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Shop() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null); // Add state for error

  useEffect(() => {
    axios.get('/carRoute/cars')
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error('Error fetching car data:', error);
        setError(error); // Set the error state
      });
  }, []);

  if (error) {
    return (
      <div>
        <p>An error occurred while fetching car data.</p>
      </div>
    );
  }

  return (
    <div>
      {cars.map((car) => (
        <div key={car._id} className="container-fluid d-flex">
          <div className="card mx-2" style={{ width: "500px" }}>
            <img className="card-img-top" src={car.img1} alt={car.carName} />
            <div className="card-body">
              <h4>{car.carName}</h4>
              <p>Price: {car.price}</p>
              <Link to={`/details/${car._id}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;

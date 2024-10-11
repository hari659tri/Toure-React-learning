import React from 'react';
import Card from './Card';

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      <div className="plan" style={{ display: 'flex', justifyContent:"center" }}>
        <h2>Plan With Love</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            // Add key prop here
            <Card 
              key={tour.id} 
              {...tour} 
              removeTour={removeTour} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tours;

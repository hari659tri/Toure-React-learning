import React, { useState } from 'react';

const Card = ({ id, image, info, price, name, removeTour }) => {
    const [readmore, setreadmore] = useState(false);
     
    // Safeguard for 'info' to prevent undefined errors
    const description =readmore?info:`${info ? info.substring(0, 200) : ''}...` ;
     
    function readmoreHandler() {
        setreadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image" alt={name} />

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {readmore ? info : description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? 'show less' : 'read more'}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    );
};

export default Card;

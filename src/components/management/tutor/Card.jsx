import React from 'react';

const Card = ({ result, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      {result.map((item) => {
        return [
          <div className="card cardTutor col-3">
            <img src={item.imagePath} width="70" height="70" alt="Tutor image" />
            <div className="p">
              <h3>{item.fullName}</h3>
              <p >
                {item.email}<br />
                {item.phoneNumber}
              </p>
            </div>

            <button type="button" className="btnView">View all</button>
          </div>
        ]
      })}

    </div>

  );
}

export default Card;
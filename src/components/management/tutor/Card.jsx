import React from 'react';
import "./tutor.scss";
import Modal from "./Modal";

const Card = ({ result, loading }) => {

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      {result.map((item) => {
        return [
          <div className="card cardTutor col-3">
            <div>
              <img src={item.imagePath} width="70" height="70" alt="Tutor image" style={{ marginBottom: 80 }} />
              <div className="header-right">
                <h5>{item.fullName}</h5>
                <p>
                  {item.email}<br />
                  {item.phoneNumber}
                </p>
              </div>
            </div>
            <button type="button" className="btnView" onClick={showDetail}>View all</button>
            
          </div>
        ]
      })}
    </div>
  );
}

const showDetail = () => {
  console.log("show modal");
  return (
    <Modal />
  );
}

export default Card;


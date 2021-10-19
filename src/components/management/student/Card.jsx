import React from 'react';

const Card = ({result, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
    
            {result.map((item) => {
                return [
                    <div className="card cardStudent col-5">
                        <div className="p">
                            <h3>{item.fullName}</h3>
                            <p >
                                {item.email}<br />
                                {item.phoneNumber}
                            </p>
                        </div>
                        <div>
    
                        </div>
    
                        <a href="#" className="link">View all</a>
                    </div>
                ]
            })}
    
        </div>
    
    );
}

export default Card;
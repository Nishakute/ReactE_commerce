import React from 'react';
import TravelList from './Travellist'



const Usertravel = () => {
const{ destination,loading,error,deletedestination,refreshDestination}=
TravelList(`https://api.example.com/products`);

if(loading) return<p>Loading...</p>
if(error) return<p>Data Not Found</p>

  return (
    <div>
       {destination.length > 0 ? (
        <div className="row">
          {destination.map((elmt, index) => (
            <div className="col-md-6 col-lg-3 my-2" key={index}>
              <div className="product-card">
                <img src={elmt.image} />
                <h2>{elmt.title}</h2>
                {/* <p className="card-text">{elmt.description}</p> */}
                <p className="price">${elmt.price}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => deletedestination(elmt.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) :
    <button className='btn btn-primary' onClick={refreshDestination}Refresh Destination></button>

}
    </div> 
  )
}

export default Usertravel;
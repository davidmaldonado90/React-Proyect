import React from 'react';

//loading spinner component
const Spinner = () => {
    
    return (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-grow ml-auto text-dark" style={{width: '5rem', height: '5rem'}} role="status" aria-hidden="true"></div>
        </div>
    );
}

export default Spinner;

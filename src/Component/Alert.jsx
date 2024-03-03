import React from 'react';
import '../assets/css/common.css';

function Alert(props) {
    const {showAlert, alertText} = props;

  return (
    <div className=' d-flex justify-content-center'>
        <div style={showAlert} className={`position-absolute w-25 container alert alert-success alert-dismissible Show `}>
            <strong className='text-dark'>{alertText}</strong>
        </div>
    </div>
  )
}

export default Alert
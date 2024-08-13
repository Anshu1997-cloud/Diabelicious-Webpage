import React from 'react';

const Text = () => {
  const textStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh', 
    backgroundColor: 'yellow', 
    margin: 0, 
    padding: 0, 
  };

  const headingStyle = {
    fontSize: '30px', 
    textAlign: 'center',

    '@media (max-width: 768px)': {
      fontSize: '7px',  
    }
  };

  return (
    <div style={textStyle}>
      <h3 style={headingStyle}> Diabelicious has a different menu every day. Throughout the week!</h3>
    </div>
  );
};

export default Text;
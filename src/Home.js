import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function Home() {
  const navigate = useNavigate(); // Access the navigation function

  const handleAddClick = () => {
    navigate('/add'); // Redirect to the Add page
  
  };
  const handleDataClick = () => {
    navigate('/data'); // Redirect to the Add page
  
  };

  return (
    <>
      <div className="button-container">
        <h2>Employee Management System</h2> 
        <form>
          <button onClick={handleAddClick}>Add</button>
          <button onClick={handleDataClick} >View/Update/Delete</button>
        
        </form>
      </div>
    </>
  );
}

export default Home;

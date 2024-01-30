import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Update() {
  const rName = useRef();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [slr, setSlr] = useState("");
  const [errors, setErrors] = useState({});
 const [ans, setAns] = useState("");

  const navigate = useNavigate();
	 const handleClick = (event) => {
    navigate("/");
  };
 
 
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleSlrChange = (event) => 
{
    setSlr(event.target.value);
  };

  const save = (event) =>
 {
   event.preventDefault();
let data = { id , name , slr };
let url = "http://localhost:9000/change";
axios.put(url,data)

.then ( res => {
	if (res.data.affectedRows == 1)	
	{
		setAns("Record Updated");
		setId("");
		setName("");
		setSlr("");
	}
})
.catch(err=> setAns("issue"+ err));

		
    const validationErrors = {};
    if (!name) {
      validationErrors.name = "Name is required";
    }
    if (!id) {
      validationErrors.id = "ID is required";
    }
    if (!slr) {
      validationErrors.slr = "Salary is required";
    }

    setErrors(validationErrors);

  
  };

  return (
    <div className="button-container">
      <center>
        <h1> Add Employee Details</h1>

        <form onSubmit={save}>
          <input type="text" placeholder="Enter your name" onChange={handleNameChange} value={name} ref={rName} />
          {errors.name && <span className="error">{errors.name}</span>}
          <br/><br/>

          <input type="number" placeholder="Enter employee ID" onChange={handleIdChange} value={id} />
          {errors.id && <span className="error">{errors.id}</span>}
          <br/><br/>

          <input type="number" step="0.01" placeholder="Enter your Salary" onChange={handleSlrChange} value={slr} />
          {errors.slr && <span className="error">{errors.slr}</span>}
          <br/><br/>

          <input type="submit" value="Save" />
	<br/><br/>
	<input type="submit" value="Back" onClick={handleClick} />
        </form>
	<h2> {ans}</h2>
      </center>
    </div>
  );
}

export default Update;

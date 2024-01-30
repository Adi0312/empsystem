import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Data() 
{

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [slr, setSlr] = useState("");
  const [ans, setAns] = useState("");
  const nav = useNavigate();

const handleClick = (event) => {
    nav("/"); }

const [data,setData] = useState([ ]);

	useEffect( () =>
{
		let url="http://localhost:9000/show";
		axios.get(url)
		.then(res => { setData (res.data); })
		.catch(err => alert("issue"+err));	
		}, []);

const updateEmp = (i, n , s ) => {
		nav("/Update", { state: { i, n, s}}); 
			
	}


const deltEmp = (id) => {
		let url="http://localhost:9000/remove";
		let d =  { data: {id}};
		axios.delete(url, d)
		.then(res => { 
			alert("record deleted");
			window.location.reload();	
	})
			.catch(err => alert("issue"+err)); 

	
};
  return (
    <>
    <center>
	<h1> Employee Data</h1>
	<br/>
	<table border="5" style={{"width" : "50%"}}>
		<tr>
			<th> ID</th>
			<th>Name</th>
			<th> Salary</th>
			<th> Delete</th>
			<th> Update</th>
		</tr>
		{
			data.map( (e) => (
			<tr>
			<th> {e.id}</th>
			<th>{e.name}</th>
			<th> {e.slr}</th>
			<th> <button
				onClick = { () => { if (window.confirm(' Are you sure to delete '))  deltEmp(e.id) } }>Delete</button></th>
			<th>
	<button onClick = { () => {  updateEmp(e.id, e.name, e.slr)  } }> Update </button></th>
		</tr>
			) )
		}
	</table>
	<br/>
        <button className="btn" onClick={handleClick}>Back</button>
     </center>
    </>
  );
}

export default Data;

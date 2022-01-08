import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table'
const Adduser = () => {
    const [adduser, setadduser] = useState([]);
    useEffect(() => {
      loaduser();
    }, []);
    const loaduser =async()=>{
        const result =await axios.get('http://localhost/react%20ecommerce/view.php')
    setadduser(result.data.phpresult);
    console.log(result.data);
    }
    return (
        <>
        <div className="container my-3 py-3">
       
        <Table striped bordered hover>
  <thead>
    <tr className='bg-warning'>
      <th>Id</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  {adduser.map((res)=>
  <tbody>
    <tr>
      <td>{res.id}</td>
      <td>{res.Firstname}</td>
      <td>{res.Lastname}</td>
      <td>{res.Email}</td>
    </tr>
  </tbody>
  )}
</Table>
            
      </div>
        </>
    )
}

export default Adduser;

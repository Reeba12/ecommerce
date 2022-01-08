import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@mui/icons-material/Delete';

const Mybasket = () => {
    const [Product, setProduct] = useState([]);
    useEffect(() => {
      NewProduct();
    }, []);
    const NewProduct =async()=>{
        const result =await axios.get('http://localhost/react%20ecommerce/productview.php')
    setProduct(result.data.productresult);
    console.log(result.data);
    }
    console.log(Product)
    const Delete =async () =>{
      const delData=await axios.get('http://localhost/react%20ecommerce/delete.php?id='+Product.id)
      console.log(delData.data);
    }
    return (
        <>
            <div className="container my-3 py-3">
       
       <Table striped bordered hover>
 <thead>
   <tr className='bg-warning'>
     <th>Id</th>
     <th>Name</th>
     <th>Quantity</th>
     <th>Price</th>
     <th>Total Price</th>
     <th>Action</th>
   </tr>
 </thead>
 {Product.map((response)=>
 <tbody>
   <tr>
     <td>{response.id}</td>
     <td>{response.productname}</td>
     <td>{response.quantity}</td>
     <td>{response.price}</td>
     <td>{response.totalprice}</td>
     <td className='text-center' onClick={Delete}><DeleteIcon /></td>
   </tr>
 </tbody>
 )}
</Table>
           
     </div>
        </>
    )
}

export default Mybasket

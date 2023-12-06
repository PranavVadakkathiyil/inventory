import React, { useEffect, useState } from 'react'
import './Home.css';
import axios from 'axios';
import update from '../../Img/update.svg';
import img from '../../Img/delete.svg';
import { Link } from 'react-router-dom';
import Adding from '../Adding/Adding';
import Nav from '../Nav/Nav';

function Home() {

  const [info, setinfo] = useState([])
  useEffect(()=>{

    axios.get('http://localhost:8081/Home') 
    .then(res =>  setinfo(res.data))         // console.log(res))
    .catch(err => console.log(err));
  },[])
  const handleDelete =async (id)=> {
    try{
      await axios.delete('http://localhost:8081/Home/'+id)
      window.location.reload()
    }catch(err){
      console.log(err);
    } 
  }
  return (
    <>
    <Nav/>
    <div className="table-container">
        <Link to='/Adding'><button id="Adding" className='add-button'>Add</button></Link>

        
        <table className='data-table'>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Category</th>
              <th>Item</th>
              <th>Count</th>
              <th>Delivery Date</th>
              <th>Delivery pin</th>
              <th>Ecommerce</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
              {
                info.map((data,i)=>(
                  <tr key={i}>
                    <td>{data.brand}</td>
                    <td>{data.category}</td>
                    <td>{data.item}</td>
                    <td>{data.count}</td>
                    <td>{data.date}</td>
                    <td>{data.deliverypin}</td>
                    <td>{data.ecommerce}</td>
                    <td>
                      <div className="btn">
                      <Link to={`/Update/${data.id}`}><button className='edit1'><img src={update} alt="update" width={30}/></button></Link>
                      
                      <button className='edit2' onClick={e => handleDelete(data.id)}><img src={img} alt="delete" width={30}/></button>
                      </div>
                     
                    </td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      
    </div> 
    </>

  )
  
}

export default Home
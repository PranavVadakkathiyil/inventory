import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Update.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Update() {
    const [brand, setbrand] = useState('')
    const [category, setcategory] = useState('')
    const [item, setitem] = useState('')
    const [count, setcount] = useState('')
    const [date, setdate] = useState('')
    const [deliverypin, setdeliverypin] = useState('')
    const [ecommerce, setecommerce] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();
    const handleSubmit = async (event) =>{
    event.preventDefault();
    axios.put('http://localhost:8081/Update/'+id,{brand,category,item,count,date,deliverypin,ecommerce})
    .then(res =>{
        console.log(res);
        navigate('/Home')
    })
    .catch(err => console.log(err));  
}
  return (
    <div className="adding-form">
                        <h2>Update Data</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="addform-group">
                                <label htmlFor="brand">Brand</label>
                                <input
                                    type="text"
                                    name='brand'
                                    placeholder="Brand"
                                    onChange={e => setbrand(e.target.value)}
                                    
                                />
                            </div>
                            <div className="addform-group">
                                <label htmlFor="category">Category</label>
                                <input
                                    type="text"
                                    name='category'
                                    placeholder="Category"
                                    onChange={e => setcategory(e.target.value)}
                                />
                            </div>
                            <div className="addform-group">
                                <label htmlFor="item">Item</label>
                                <input
                                    type="text"
                                    name='item'
                                    placeholder="Item"
                                    onChange={e => setitem(e.target.value)}
                                    
                                />
                            </div>
                            <div className="addform-group">
                                <label htmlFor="count">Count</label>
                                <input
                                    type="number"
                                    name='count'
                                    placeholder="Count"
                                    onChange={e => setcount(e.target.value)}
                                />
                            </div>
                            <div className="addform-group">
                                <label htmlFor="date">Date</label>
                                <input
                                    type="date"
                                    name='date'
                                    placeholder="Date"
                                    onChange={e => setdate(e.target.value)}
                                    
                                />
                            </div>
                            <div className="addform-group">
                                <label htmlFor="deliverypin">Delivery Pin</label>
                                <input
                                    type="tel"
                                    name='deliverypin'
                                    placeholder="Pincode"
                                    onChange={e => setdeliverypin(e.target.value)}
                                    
                                />
                            </div>
                            
                            <div className="addform-group">
                                <label htmlFor="ecommerce">Ecommerce</label>
                                <input
                                    type="text"
                                    name='ecommerce'
                                    placeholder="Ecommerce"
                                    onChange={e => setecommerce(e.target.value)}
                                    
                                />
                            </div>
                            <button type="submit" id="updatr">Update Data</button>
                            <Link to='/Home'><button id="Login">Go Back to Home</button></Link>
                        </form>
                    </div>
  )
}

export default Update
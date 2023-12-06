import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import img from '../../../Img/landing.svg'
import { BiLogoInstagram, BiLogoYoutube, BiLogoFacebookSquare } from 'react-icons/bi'
import { RiTwitterXFill } from 'react-icons/ri'


function Signup() {

const [values, setValues] = useState({
    username:'',
    email:'',
    password:''

})
const handleInput = (event) =>{
    setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
}  
const navigate = useNavigate();


const handleSubmit = async (event) =>{
    event.preventDefault();
    axios.post('http://localhost:8081/Signup',values)
    .then(res => {
        console.log(res)
        navigate('/Login')
    })
        
    .catch(err => console.log(err));  
}
    return (
        <div className="main">
            <div className="header">
                <div className="left">
                    <div className="logo">
                        AccuStock <span>Hub</span>
                    </div>
                </div>
                <div className="right">
                    Seamless Inventory Control for Smarter Business Operations
                </div>
            </div>
            <div className="content">
                <div className="left">
                    <img src={img} alt="img" />
                </div>
                <div className="right">
                    <div className="signup-form">
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username <span>(required)</span></label>
                                <input
                                    type="text"
                                    name='username'
                                    placeholder="Enter your username"
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email <span>(required)</span></label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Enter your email"
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password <span>(required)</span></label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="Enter your password"
                                    onChange={handleInput}
                                />
                            </div>
                            <button type="submit" id="Signup">Signup</button>
                            <Link to='/Login'><button id="Login">Already Have an account</button></Link>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="ftop">
                    <div className="fleft">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem pariatur inventore quae quas soluta, asperiores dolores dolorem! Nemo, odio a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio quia exercitationem nulla quod numquam, veniam facere reiciendis quam veritatis.
                    </div>
                    <div className="fright">


                        <ul>
                            <p>Follow</p>
                            <li><BiLogoInstagram /></li>
                            <li><BiLogoYoutube /></li>
                            <li><BiLogoFacebookSquare /></li>
                            <li><RiTwitterXFill /></li>
                        </ul>


                        <div className="flower"></div>
                    </div>

                </div>
                <div className="bottom">
                    <span>©</span>
                    <p>All rights belong to the owner.</p>
                </div>
            </div>
        </div>
    )
}

export default Signup
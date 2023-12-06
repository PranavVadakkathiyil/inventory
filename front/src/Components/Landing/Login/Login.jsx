import React from 'react'
import img from '../../../Img/landing.svg'
import { Link ,useNavigate} from 'react-router-dom'
import { BiLogoInstagram, BiLogoYoutube, BiLogoFacebookSquare } from 'react-icons/bi'
import { RiTwitterXFill } from 'react-icons/ri'
import { useState } from 'react'
import axios from 'axios'


function Login() 
{   
    
    
    const [values, setValues] = useState({
        username:'',
        email:''
        
    
    })
    const handleInput = (event) =>{
        setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
    }  
    const navigate = useNavigate();
    
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8081/Login',values)
        .then(res => {
            if(res.data.Login){
                
                navigate('/Home')
            }
            else
            {
                alert("No record found please Signup")
                navigate('/Signup')
                
                
            }
            console.log(res)
            
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
                        <h2>Login</h2>
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
                                <label htmlFor="password">Password <span>(required)</span></label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="Enter your password"
                                    onChange={handleInput}
                                />
                            </div>
                            <button type="submit" id="Login">Login</button>
                            <Link to='/Signup'><button type="button" id="Signup">Don't Have an account</button></Link>
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


export default Login
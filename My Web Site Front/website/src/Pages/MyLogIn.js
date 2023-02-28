import React, { useState, useContext } from 'react'
import AuthContext from '../Contex/AuthContext'
import axios from 'axios'
import Api from '../Api/Blog/BlogApi'


const MyLogIn = () => {

const { setAuth } = useContext(AuthContext)

const startFormData = Object.freeze({
username: "",
password: "",
})



const [formData, setFormData] = useState(startFormData)





const handleChange = (e) => {
    setFormData(
        {
        ...formData, 
        [e.target.name]: e.target.value
    })}

/* var params = new URLSearchParams();
    params.append('username', formData.username);
    params.append('password', formData.password);    

    console.log(params)
    console.log(formData.username)

const handleSubmit= (e) => {
    e.preventDefault()
    console.log(formData)
   

    Api2.post("token/", new URLSearchParams({
        username: 'moeff', 
        password: 'kashimashinryu',} ))

    .then((res) => {
    
    
    localStorage.setItem("access_token", res.body.data.access);
    localStorage.setItem("refresh_token", res.data.refresh);
    Api2.defaults.headers["Authorization"] = "JWT " + localStorage.getItem("access_token"); 
    console.log("wokrs")})
    } */

const params = new URLSearchParams()
params.append('username', formData.username)
params.append('password', formData.password)


const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const handleSubmit= async (e) => {
    e.preventDefault()
try {
const res = await axios.post("http://127.0.0.1:8000/api/token/", params, config)


const accToken = res?.data?.access
const refreshToken = res?.data?.refresh

console.log(accToken)
console.log(refreshToken)}
 /*  .then((res) => {
    localStorage.setItem("access_token", res.data.access);
    localStorage.setItem("refresh_token", res.data.refresh);
    Api.defaults.headers["Authorization"] = "JWT " + localStorage.getItem("access_token"); 
    console.log(localStorage.getItem("access_token"))
  }) */
  catch(err) {
    // Do somthing
  }


}


const formUserName = (
    <form>
    <div className='username'>
      <input
        required
        type="text"
        name='username'
        id = "username"
        onChange={handleChange}
        />
    </div>
    </form>
  )

const formPass = (
    <form>
    <div className='Pass'>
      <input
        required
        type="password"
        name='password'
        id = "password"
        onChange={handleChange}
        />
    </div>
    </form>
  )

  return (
    <div>

        {formUserName}
        {formPass}
        <button onClick={handleSubmit}> Submit </button>
    </div>
  )
}

export default MyLogIn
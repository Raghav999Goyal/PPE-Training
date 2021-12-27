import React, {useState} from 'react'

import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

function Sauna() {

    let history = useHistory();
    const [user, setUser] = useState({
      pId:1,
      roomNo:"",
      name:"",
      phoneNo:"",
      service:""
  
    });
  
    const {  
    
    roomNo,
    name,
    phoneNo,
    service
    } = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      console.log(user);
      alert("Your request has been recieved !!")
      await axios.post("http://localhost:8998/passenger/", user);
      history.push("/");
    
    }
    return (

        <div className="row" style={{}}>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">


            <br/>
            <h1 style={{textAlign:"center"}}> Book a Service !!</h1><br/>
            <form onSubmit={(e)=>{onSubmit(e)}}>


                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e)=>{onInputChange(e)}}
                    
                    placeholder="Enter your name here" />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNo">Phone No.</label>
                    <input type="phoneNo" className="form-control" id="phoneNo" name="phoneNo" value={phoneNo} onChange={(e)=>{onInputChange(e)}} placeholder="Enter your phone no here " />
                </div>
                <div className="form-group">
                    <label htmlFor="roomNo">Room No.</label>
                    <input type="roomNo" className="form-control" id="roomNo" name="roomNo" value={roomNo} onChange={(e)=>{onInputChange(e)}}
                    placeholder="Enter your Room No. here" />
                </div>

                
                <div className="form-group">                
                <label htmlFor="service">Select the service !!</label>
                <select className="form-control" id="Service" name="service" value={service} onChange={(e)=>{onInputChange(e)}}
                
                name="service">
                        <option value="Sauna">Sauna</option>
                        <option value="Laundry">Laundry</option>
                        <option value="Clean Up">Clean Up</option>
                        <option value="Massage">Massage</option>
                        <option value="Flowers">Flowers</option>
                    </select>
                    </div>

                <button type="submit" className="btn btn-primary" >Book It !!</button>




            </form>
        </div>

        <div className="col-sm-4"></div>

        </div>
        )
   
}



export default Sauna;

import React,{useEffect,useState} from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Sauna from './Sauna'
import axios from 'axios';


function Service() {
  const [service,setService]=useState([]);
useEffect(() => {
  loadRooms();
}, []);

np
const loadRooms = async () => {
  const result = await axios.get("http://localhost:8094/Service/");
  setService(result.data);  
};

console.log(service);
  return (
    <div>
      <div class="row" style={{ paddingLeft: 100, paddingTop: 50 }}>
      {
        service.map((s)=>{
          return (
          <div class="col-sm-4" style={{ paddingBottom: 50 }}>
          <div className="card" style={{ width: 280 }}>
            <img className="card-img-top" src={s.images} alt="Card image cap" height="200"></img>
            <div className="card-body">
              <h5 className="card-title">{s.name}</h5>
              <p className="card-text">{s.description}</p>
              <a href={`/service/${s.id}`} className="btn btn-primary">Rs. {s.charges}/-</a>
            </div>
          </div>
        </div>);
        })
      }
       


        <div class="col-sm-4" style={{}}>
          <div className="card" style={{ width: 280 }}>
            <img className="card-img-top" src="/images/add.png" alt="Click below button to book services" height="200"></img>
            <div className="card-body">
              <h5 className="card-title">Click To Book</h5>
              <p className="card-text">Click the below button to order any of the above services, in just 30 seconds !!</p>
              <a href="/Book" className="btn btn-primary">Click to Book !!</a>
            </div>
          </div>


        </div>







 
 </div>
    </div>
  )
}

export default Service

import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const SingleService = () => {

    const {id}=useParams()

    const [service,setService]=useState([]);
useEffect(() => {
  loadRooms();
}, []);

const loadRooms = async () => {
  const result = await axios.get(`http://localhost:8094/Service/${id}`);
  setService(result.data);
};


    return (
        <div>

            service:{service.name}
            <br/>
            <img src={service.images}></img>
            
            

            
        </div>
    )
}

export default SingleService

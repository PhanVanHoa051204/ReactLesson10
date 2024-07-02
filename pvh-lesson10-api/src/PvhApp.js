
import { useEffect, useState } from 'react';
import './App.css';
import PvhListUsers from './components/PvhListUsers';
import axios from './api/pvhApi'
function PvhApp(){

  const [pvhListUsers,setPvhListUsers] = useState([]);

const pvhGetAllUsers = async()=>{
  const pvhResponse = await axios.get("pvhUsers");
  console.log("Api Data:", pvhResponse.data);
  setPvhListUsers(pvhResponse.data)
}

useEffect(()=>{
  pvhGetAllUsers();
  console.log("State Data: ",pvhListUsers);
},[])


  return (
    <div className="contaier border my-3">
      <h1>Làm việc với mốc Api</h1>
      <hr/>
     <PvhListUsers renderPvhListUsers={pvhListUsers} />
    </div>
  );
}

export default PvhApp;

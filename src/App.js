import './App.css';
import React, { useState,useEffect } from 'react';
import axios from 'axios';

function App() {

  
  const [Data , setData] = useState({})

  const fetchdata = async ()=>{
     await axios.post('https://demo2211087.mockable.io/mock')
    .then(response =>{
      var parsedData = response.data
      setData(parsedData)
    })
  }
  
  useEffect( ()=>{
    fetchdata();
    // eslint-disable-next-line
  },[])
  return (
    <>
    <h1>Welcome To The Notary App</h1>
    <div className="App App-header">
            <table className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {Data.companies && Data.companies.map((element)=>{
                 return(
                  <tr>
                      <td >{element.name}</td>
                      <td >{element.email}</td>
                      <td >{element.status}</td>
                </tr>
                 )
               })}   

        </tbody>
      </table>

    </div>
    </>
  );
}

export default App;

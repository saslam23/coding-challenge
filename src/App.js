import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [cityData, setCityData] = useState([]);


  useEffect( () => {
    const getData = async() =>{
      const {data} = await axios.get('https://api.openbrewerydb.org/breweries?by_city=milwaukee');
      setCityData(data);
      console.log(cityData);
    }

    getData();
  
  
    return () => {
    }
  }, [])



  return (
    <>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">brewery_type</th>
            <th scope="col">street</th>
            <th scope="col">phone</th>
            <th scope="col">website url</th>
          </tr>
        </thead>
        {cityData.map((attr) =>{
          return(
            <tbody>
            <tr>
              <th scope="row">2</th>
              <td>{attr.name}</td>
              <td>{attr.brewery_type}</td>
              <td>{attr.street}</td>
              <td>{attr.phone}</td>
              <td>{attr.website_url}</td>
            </tr>
          </tbody>
          )
        })}
      </table>
      )
    </>
  );
}

export default App;

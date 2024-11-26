import './App.css';
import React, {useEffect, useState} from 'react';
import { apiClient as dataSource } from './dataSource';
import Card from './Card';
function App() {
    const [countries, setCountries] = useState([]);

    //use axios datasource imported to do an asynchronous api call
    const loadCountries = async () => {
      let response = await dataSource.get('\all');

      //update the state of hte application with the 
      setCountries(response.data);
      console.log('response', response.data);
    };
    // useEffect is a React hook
    // The callback registered will be called after the component is rendered
    // This is where API calls belong.
    // The second parameter [] is a control parameter. It tells React to call
    // the registered callback whenever a member of the array is modified
    // Without this parameter the callback method will be called without end.
    useEffect(()  => {
      loadCountries();
    }, []);
    let countryJSX = countries.map((country) => {
      return (<Card country={ country } key={ country.name.official }></Card>);
    });
    return <div className='container'>{countryJSX}</div>;
}

export default App;

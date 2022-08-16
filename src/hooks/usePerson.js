import { useState }from 'react'

export const usePerson = () => {
    const [dataPeople, setDataPeople] = useState([])
   const getAllPeople = () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://swapi.dev/api/people", requestOptions)
        .then(response => response.json())
        .then(result => setDataPeople(result.results))
        .catch(error => console.log('error', error));


   }
  return {
    getAllPeople,
    dataPeople
  };
};

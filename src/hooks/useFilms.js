import { useState }from 'react'

export const useFilms = () => {
    const [dataFilms, setDataFilms] = useState([])
 

   const detailsFilms = async(url) => {
   try { var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
     await fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => setDataFilms([result]))
        .catch(error => console.log('error', error));
    } catch(error) {
      console.log(error);
    }

   };
  return {
    detailsFilms,
    dataFilms

  };
};
import {useState, useEffect} from 'react';

const useFetchAPI = (page: number | string | undefined) => {

    const [info, setInfo] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.unsplash.com/photos/?page=${page}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error("Fetch error");
            }
            return res.json();
          })
    
          .then((data) => {
            setInfo((prevGallery): any => [...prevGallery, ...data]);
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => {
            setIsLoading(false);
          });

      return () => {
        
      }
    }, [])
    
  return [info, error, isLoading];

}

export default useFetchAPI
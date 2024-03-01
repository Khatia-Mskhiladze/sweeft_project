import React, { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import Gallery from "../components/Gallery";

const Fetching = () => {
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Fetch_error");
      })
      .then((data) => {
        setGallery(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div>
        <h1>Something is wrong</h1>
      </div>
    );
  }
  
  return (
    <div>
       {isLoading && <FadeLoader/>}

       {gallery?.map((item: any) => (
         <Gallery data={item} key={item.id}/>
       ))}
    </div>
  );
};

export default Fetching;

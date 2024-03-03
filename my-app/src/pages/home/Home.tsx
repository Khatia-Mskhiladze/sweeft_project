import React, {useState, useEffect} from "react";
import Fetching from "../../api/fetching/Fetching";
import Header from "../../components/header/Header";
import SearchTerm from "../../components/search/SearchTerm";
import Styles from "../home/Home.module.css"
import useFetchAPI from "../../hooks/useFetchAPI";


const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [filteredGallery, setFilteredGallery] = useState([])

  const [gallery, error, isLoading] = useFetchAPI(page);

    useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (error) {
    return (
      <div>
        <h1>Something is wrong</h1>
      </div>
    );
  }

  return (
    <div className={Styles.homepage}>
      <Header />
      <SearchTerm gallery={gallery} setFiltered={setFilteredGallery}/>
      <Fetching filteredGallery={filteredGallery.length > 0 ? filteredGallery : gallery} isLoading={isLoading}/>
    </div>
  );
};

export default Home;

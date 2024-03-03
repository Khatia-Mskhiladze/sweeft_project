import { FadeLoader } from "react-spinners";
import Gallery from "../../components/gallery/Gallery";
import Styles from "../fetching/Fetching.module.css";

const Fetching = ({filteredGallery, isLoading} : any) => {

  return (
    <div className={Styles.mainDiv}>
      {isLoading && <FadeLoader />}

      {filteredGallery.map((item: any, index: number) => (
        <Gallery data={item} key={index} />
      ))}
    </div>
  );
};

export default Fetching;

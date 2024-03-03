import React from "react";
import Styles from "../gallery/Gallery.module.css";


const Gallery = ({ data }: any) => {
  return (
    <div className={Styles.oneCard}>
      <img
        className={Styles.photos}
        src={data.urls.small}
        alt={data.description}
      ></img>
      <p>{data.description || data.alt_description}</p>
    </div>
  );
};

export default Gallery;

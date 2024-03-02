import { useRef } from "react";
import Styles from "../search/SearchTerm.module.css";

const SearchTerm = (props: any) => {
  const searchTermRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();

    const filtered = props.gallery.filter((item: any) => {
      const description = item.description
        ? item.description.toLowerCase()
        : "";
      const altDescription = item.alt_description
        ? item.alt_description.toLowerCase()
        : "";

      return (
        description.includes(inputValue) || altDescription.includes(inputValue)
      );
    });

    return props.setFiltered(filtered);
  };

  return (
    <div className={Styles.inputValue}>
      <input
        ref={searchTermRef}
        type="text"
        placeholder="Search"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchTerm;

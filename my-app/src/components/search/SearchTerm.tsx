import Styles from "../search/SearchTerm.module.css";
import { useHistoryContext } from "../../context/histories/historyContextProvider";
import { searchTermHandler } from "../../context/actions/actionCreators";

const SearchTerm = (props: any) => {
  const { state, dispatch }: any = useHistoryContext();
  console.log(state, "state");

  let typingTimeout: any;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(typingTimeout);

    typingTimeout = setTimeout(() => {
      const inputValue = e.target.value.toLowerCase();
      console.log(inputValue);

      const filtered = props.gallery.filter((item: any) => {
        const description = item.description
          ? item.description.toLowerCase()
          : "";
        const altDescription = item.alt_description
          ? item.alt_description.toLowerCase()
          : "";
        return (
          description.includes(inputValue) ||
          altDescription.includes(inputValue)
        );
      });

      props.setFiltered(filtered);
      filtered.length > 0 && dispatch(searchTermHandler(filtered));
    }, 2000);
  };

  return (
    <div className={Styles.inputValue}>
      <input type="text" placeholder="Search" onChange={handleInputChange} />
    </div>
  );
};

export default SearchTerm;

import React from "react";
import Header from "../../components/header/Header";
import Styles from "../history/History.module.css";
import { useHistoryContext } from "../../context/histories/historyContextProvider";

const History = () => {
  
  const searchTerms = JSON.parse(localStorage.getItem("searchTerms") || "[]");

  const { state }: any = useHistoryContext();

  console.log(state);

 
  return (
    <div className={Styles.historyPage}>
      <Header />
      <br />
      <h2>Search History</h2>
      <ul>
        {searchTerms.map((term: any, index: any) => (
          <li key={index}>{term}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;

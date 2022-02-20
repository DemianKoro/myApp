import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import "./Search.scss";

const Search = () => {
  return (
    <>
      <Link to="/myApp/DbPage">
        <BiSearch className="img" />
      </Link>
    </>
  );
};

export default Search;

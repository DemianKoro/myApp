import React from "react";
// import { BiSearch } from "react-icons/bi";
import { VscNewFile} from "react-icons/vsc";

import { Link } from 'react-router-dom';
import "./Search.scss";

const Search = () => {
  return (
    <>
      <Link title="Agregar nuevo Producto" to="/myApp/DbPage">
        <VscNewFile className="img" />
      </Link>
    </>
  );
};

export default Search;

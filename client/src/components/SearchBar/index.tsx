import React, { useState } from "react";
import { StyledSearchBar } from "./StyledSearchBar";
import { SEARCH_PRODUCTS } from "../../graphql/queries";
import { useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { ResultSearchBarInput } from "./ResultSearchbarInput";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();
  const [activeAutoComplete, setActiveAutoComplete] = useState(false);
  const [searchProduct, { called, loading, data }] = useLazyQuery(
    SEARCH_PRODUCTS
  );

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setActiveAutoComplete(false);
    if (searchValue) {
      history.push(`/search?query=${searchValue}`);
    }
  };

  const handleClick = (e) => {
    const idProduct = e.target.id;
    setActiveAutoComplete(false);

    if (idProduct) {
      history.push(`/product/${idProduct}`);
      setSearchValue("");
    }
  };

  const handleKeyPress = (e) => {
    setActiveAutoComplete(false);
    if (e.which === 13) {
      // Enter code = 13;
      history.push(`/search?query=${searchValue}`);
    }
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchValue(query);
    query && setActiveAutoComplete(true);
    searchProduct({
      variables: {
        name: query ? query : " ",
      },
    });
  };

  return (
    <StyledSearchBar>
      <form autoComplete="off" onSubmit={handleSubmit} className="formSearch">
        <input
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={searchValue}
          placeholder="Zapatilla Nike Airmax..."
          className="searchinput"
        ></input>
        <button type="submit" className="botonSearch">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div className="contentResult">
      {activeAutoComplete && data ? (
        <ResultSearchBarInput data={data} handleClick={handleClick} />
      ) : null}
      </div>
    </StyledSearchBar>
  );
}

import React from "react";

const SearchBox = ({search,reference}) => {
  return (
    <div className="search-box">
      <input type="text" name="search-text" className="search-box__input" id="search-box__input" ref={reference} />
      <button className="search-box__button" onClick={search}>
        <svg className="search-box__button--ico">
          <use xlinkHref="img/icons.svg#icon-search" />
        </svg>
        <span className="search-box__button--text">Search</span>
      </button>
    </div>
  );
};

export default SearchBox;

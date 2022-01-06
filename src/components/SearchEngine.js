import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// importing api url

import { http } from "../remote";

const SearchEngine = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});


  const controllSearch = async (event) => {
    if (event.key !== 'Enter') return

    if (search === "") {
      setSearchResults([]);
      setSearchInfo({})
      return
    }

    const resp = await http.get(`/w/api.php?origin=*&action=query&list=search&srsearch=${search}&format=json`)

    // console.log(resp);

    if (!resp.status === 200) {
      throw Error(resp.statusText);
    }
    setSearchResults(resp.data.query.search);
    setSearchInfo(resp.data.query.searchinfo);
  }


  return (
    <div className="search-app">
      <header>
        <h1>Search Engine</h1>
        {/* <form className="search-box" > */}
        <div className="search-box" >
          <input
            type="search"
            placeholder="Search Anything....."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyPress={controllSearch}
          />
        </div>
        {/* </form> */}
        {(searchInfo.totalhits) ? <h4>Search Results: {searchInfo.totalhits}</h4> : ""}
      </header>
      <div className="search-results">
        {searchResults.map((result, index) => {
          console.log(result);
          const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
          return (
            <div className="result" key={index}>
              <h3>{result.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
              {/* <a href={url}
                rel="nofollow"
                target="_blank"
              >
                wikipedia
              </a> */}
                      <Link to={`/show_content/${result.title}`}  >Select item</Link>
            </div>
          )
        })}

      </div>
    </div>
  );
};

export default SearchEngine;

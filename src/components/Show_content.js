import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { http } from "../remote";
import { addFav, removeFav } from "../actions/index";
import { useDispatch } from "react-redux";

// how to use css modules
import styles from "./Show_content.module.css";

const Show_content = () => {
  const { title } = useParams();
  const [data, setData] = useState({});

  const fetchContent = useCallback(async () => {
    const resp = await http.get(`/api/rest_v1/page/summary/${title}`);
    console.log(resp);
    console.log(resp.data);
    setData(resp.data);
  }, [setData]);

  useEffect(async () => {
    await fetchContent();
  }, [setData]);

  // const url = `https://en.wikipedia.org/?curid=${data.pageid}`;

  const dispatch = useDispatch();
  return (
    <div class="data-container">
      {/* <Link to='/'>goback</Link> */}
      <h1 className={styles.className}>Your selected result </h1>
      <h2>{data.title}</h2>
      <p>{data.extract}</p>

      <div className="favorite_btn">
        <a
          className="add_fav"
          title="Favorite"
          onClick={() => {
            dispatch(addFav(title));
            alert(
              `${title} Added to Favorite Section. Go to home page to get the favorite items !!`
            );
          }}
        >
          <span>Add Fav 💗</span>
        </a>
        <a
          className="remove_fav"
          title="Unfavorite"
          onClick={() => {
            dispatch(removeFav());
            alert(`${title} removed from favorite list!!`);
          }}
        >
          <span>Removed Fav 🤍</span>
        </a>
      </div>

      {/* <Link to="/show_content" >Add Favorite</Link> */}
    </div>
  );
};

export default Show_content;

import "./list.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchItem from "../../searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <>
      <section className='about top'>
        <div className='container'>
          <div className="listContainer">
            <div className="listWrapper">
              <div className="listResult">
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default List;
import React from "react";
import FilterBar from "../FilterBar/FilterBar";
import SearchProperty from "../SearchProperty/SearchProperty";

const Home = () => {
  return (
    <div>
      <SearchProperty></SearchProperty>
      <FilterBar></FilterBar>
    </div>
  );
};

export default Home;

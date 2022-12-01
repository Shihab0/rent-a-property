import React from "react";
import DisplayProperty from "../DisplayProperty/DisplayProperty";
import FilterBar from "../FilterBar/FilterBar";
import SearchProperty from "../SearchProperty/SearchProperty";

const Home = () => {
  return (
    <div>
      <SearchProperty></SearchProperty>
      <FilterBar></FilterBar>
      <DisplayProperty></DisplayProperty>
    </div>
  );
};

export default Home;

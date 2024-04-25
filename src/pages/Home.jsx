import { useState } from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Sorting from "../components/Sorting";
import SearchBar from "../components/SearchBar";
import Menu from "../components/Menu";

export default function Home() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <div className="main-row">
        <div className="main-left">
          <Menu />
          <Categories category={category} setCategory={setCategory} />
        </div>
        <div className="main-right">
          <SearchBar search={search} setSearch={setSearch} />
          <Sorting sort={sort} setSort={setSort} />
        </div>
      </div>
      <Products category={category} sort={sort} search={search} />
    </div>
  );
}

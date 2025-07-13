import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [params, setParams] = useSearchParams();

  const [search, setSearch] = useState("");

  function changeSearch(e) {
    setSearch(e.target.value);
  }

  function changeParams() {
    setParams({ value: search });
    setSearch("");
  }
  return (
    <>
      <div>Home</div>
      <input value={search} onChange={changeSearch} type="text" />
      <button onClick={changeParams}>검색검색</button>
    </>
  );
};

export default Home;

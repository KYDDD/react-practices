"use client";

import { useState } from "react";
//클라이언트 컴포넌트로써 설정되도록 해줘야함
export default function Searchbar() {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input type="text" value={search} onChange={onChangeSearch} />
      <button>검색</button>
    </div>
  );
}

import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from "./searchable-layout.module.css";

export default function SearchableLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    //현재 search가 없거나 q의 값이 search와 동일할때는 리턴을 해서 페이지 이동이 되지 않도록 함
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        <input onKeyDown={onKeyDown} value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요 ..." />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}

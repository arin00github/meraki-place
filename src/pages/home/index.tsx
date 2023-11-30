import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getArticleSearch } from "../../services/api/articleApi";

const HomePage = () => {
  const [searchWord, setSearchWord] = useState("");

  const { data, isError, isLoading } = useQuery({
    queryKey: ["search-article"],
    queryFn: () => getArticleSearch(),
    refetchOnWindowFocus: false,
  });

  console.log("data", data);

  if (isLoading) {
    return <div>loading...</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  return (
    <div>
      <div>HOME Page</div>
      <div>
        <form action="">
          <div>
            <label htmlFor="search-word"></label>
            <input
              type="text"
              id="search-word"
              value={searchWord}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;

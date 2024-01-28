import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchText.trim() !== "") {
          const response = await axios.get(
            "https://api.themoviedb.org/3/search/movie",
            {
              params: {
                api_key: "11cedbb1d6d79381b452e2fdec102159",
                query: searchText,
              },
            }
          );
          if (response.status !== 200) {
            throw new Error("Could not fetch");
          }
          setData(response.data.results);
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    const debounceFunc = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(debounceFunc);
  }, [searchText]);

  return (
    <div>
      <div >
        <input
          type="search"
          placeholder="Search something..."
          className="w-64 border px-5 py-3 text-[#999999] bg-[#0F0F0F] rounded-xl border-[#1F1F1F]"
          onChange={handleSearch}
          value={searchText}
        />
      </div>
      <main>
        {data && data.length > 0 ? (
          <div className="container mx-auto grid grid-cols-5 gap gap-10 ">
            {data.map((movie) => (
              <div key={movie.id} className="max-w-[250px]  justify-center mb-24 flex flex-wrap mx-2 my-4 overflow-hidden border gap-7 text-[#999999] bg-[#1A1A1A]  border-[#262626] p-5 rounded-lg shadow-lg">
                <h3>Movie Name:</h3>
                {movie.original_title}
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path} || https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path} `}
                  alt=""
                />
              </div>
            ))}
          </div>
        ) : (
          <p></p>
        )}
      </main>
    </div>
  );
};

export default Search;

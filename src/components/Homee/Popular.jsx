import React, { useEffect, useState } from "react";
import axios from "axios";
import left from './img/left.svg';
import right from './img/right.svg';

const Popular = () => {
  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular", {
          params: {
            api_key: "11cedb",
          },
        });

        if (response.status !== 200) throw new Error("Could not fetch");

        console.log(response.data.results);
        setData(response.data.results);
        setDisplayedData(response.data.results.slice(startIndex, startIndex + 4));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [startIndex]);

  const handleLoadMore = () => {
    setStartIndex((prevIndex) => prevIndex + 4);
  };

  const handleReturnToFirstSlice = () => {
    setStartIndex(0);
  };

  return (
    <div>
        <div className="container flex-wrap mx-auto flex justify-between items-center mb-12">
        <div>
            <h3 className="text-[#FFF] text-4xl">Popular Top 10 In Genres</h3>
        </div>
        <div>
             {startIndex > -4 && (
        <button
          className="bg-[#1F1F1F] hover:bg-[#1A1A1A] mr-4 text-white font-bold py-2 px-4 rounded"
          onClick={handleReturnToFirstSlice}
        >
       <img src={left} alt="" />
        </button>
      )}
      {data.length > startIndex + 4 && (
        <button
          className="bg-[#1F1F1F] hover:bg-[#1A1A1A] text-white font-bold py-2 px-4 rounded"
          onClick={handleLoadMore}
        >
           <img src={right} alt="" />
        </button>
      )}
        </div>
        </div>
      <div className="flex flex-wrap justify-center ">
        {displayedData.map((movie) => (
          <div key={movie.id} className="max-w-sm mx-2 my-4 overflow-hidden border gap-7 bg-[#1A1A1A]  border-[#262626] p-7 rounded-lg shadow-lg">
            <img
              className="w-[265px] h-[281px] bg-cover "
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
               alt={movie.original_title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-[#999999] text-lg mb-2">{movie.original_title}</div>
              <p className="text-[#999999] text-base">Release Date: {movie.release_date}</p>
              <p className="text-[#999999] text-base">Vote Average: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Popular;

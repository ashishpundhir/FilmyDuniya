import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReactStars from "react-stars";
import { moviesRef } from "../firebase/firebase";
import { getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";


const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef);
      console.log(_data);
      _data.forEach((doc) => {
        setData((prev) => [...prev, {...(doc.data()), id: doc.id}]);
      });
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-between p-3 md:p-1 mt-3">
      {loading ? (
        <div className="flex items-center justify-center w-full h-screen">
          {" "}
          <ThreeDots height={40} color="white" />{" "}
        </div>
      ) : (
        data.map((e, i) => {
          return (
           <Link to={`/detail/${e.id}`}>
            <div
              key={e.i}
              className="card shadow-lg  hover:-translate-y-2 transition-all duration-500 mt-5 p-2 md:p-1 max-md:w-70 "
            >
              <img
                className="max-md:h-60 max-md:w-50 lg:h-80 mb-2 lg:w-60 p-1  "
                src={e.image}
                alt="kuch naih"
              />
              <h1>
                {" "}
                <span className="text-yellow-600 font-bold">Name:</span>
                {e.name}
              </h1>
              <h1 className="max-md:w-30">
                <span className="text-yellow-600 mr-2 md:mr-0 font-bold flex items-center">
                  <span className="mr-3">Rating:</span>{" "}
                  <div className="font-[10]">
                    <ReactStars size={20} half={true} value={5} edit={false} />
                  </div>
                </span>
              </h1>
              <h1>
                <span className="text-yellow-600 font-bold">Year:</span>
                {e.year}
              </h1>
            </div></Link>
          );
        })
      )}
    </div>
  );
};

export default Cards;

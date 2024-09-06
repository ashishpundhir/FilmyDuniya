import React,{useState} from "react";
import ReactStars from "react-stars";

const Reviews = () => {
    const[rating, setRating] = useState(0);
  return (
    <>
      <div  className="w-full mt-3  text-white ">
      <ReactStars className='flex items-center justify-center mb-2 border-t-2 border-yellow-600 font-[10]' size={30} half={true} value={rating} onChange={(rate)=>setRating(rate)} />
       <input className="border-none w-full header text-xl p-2" placeholder="Type your reviews here" type="text" />
       <button className="w-full border-none p-2 mt-1  bg-yellow-600">Share</button>

      </div>
    </>
  );
};

export default Reviews;

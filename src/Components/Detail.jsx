import { getDoc } from 'firebase/firestore';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import {doc} from 'firebase/firestore';
import { db } from '../firebase/firebase';
import {Watch} from 'react-loader-spinner';
import Reviews from './Reviews';


const Detail = () => {
 const {id} = useParams();
 const [data,setData] = useState({
    titile: "",
    year: "",
    discription: "",
    image: ""
 });
 const [loading, setLoading] = useState(false);

 useEffect(()=>{
     async function getData() {
        setLoading(true);
        const _doc =doc(db, "movies", id);
        const _data =await getDoc(_doc);
        setData(_data.data());
        setLoading(false);
     }
     getData();

 },[])


  return (
    <div className='p-4 mt-4 flex flex-col  md:flex-row items-center md:items-start w-full justify-center'>
        {loading ? <div className="h-96 flex justify-center items-center w-full"><Watch color= "white"/></div> :
     <>
          <img className='block md:sticky top-24 w-70 h-96'src={data.image} alt="" /> 
        <div className='md:ml-4 md:w-1/2 w-full'>
            <h1 className='text-4xl font-bold text-amber-400'>{data.name}<span className='text-sm ml-3'>{data.year}</span> </h1>
            <ReactStars className='font-[10]' size={20} half={true} value={4.5} edit={false} />
            <p className='text-normal mt-3'>
                {data.discription}
              
            </p>
            <Reviews/>

        </div>
        </>}
    </div>
  )
}

export default Detail
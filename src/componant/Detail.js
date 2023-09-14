import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Review from "./Review";

const Detail = () => {
    const { id } = useParams();
    const [data, setData] = useState({
        name: "",
        year: "",
        link: "",
        description: "",
        rating: 0,
        rated: 0
    });

    const [loader, setLoader] = useState(false);


    useEffect(() => {
        async function getData() {
            setLoader(true);
            const _doc = doc(db, "movie", id)
            const _data = await getDoc(_doc);
            setData(_data.data());
            setLoader(false);
        }
        getData();
    }, [id])

    return (
        <div className="w-full mt-8 flex justify-center ">
            {
                loader ? <div className="h-96 w-full flex justify-center items-center"> <TailSpin height={35} color="white"/> </div>:
     <>
      <img
        className=" p-4 h-96"
        src={data.link}
        alt=""
      />
      <div className=" ml-4 w-1/2">
        <h1 className="text-3xl font-bold text-gray-400">
         {data.title} <span className=" text-xl">{data.year}</span>
        </h1>

        <h1 className="flex items-center  ">
          rating :
          <ReactStars
            // className="ml-2"
            size={20}
            half={true}
            value={data.rating/data.rated}
            edit={false}
          />
        </h1>
        <p>
          {data.description}
        </p>
        <Review id={id} preRating={data.rating} userRated={data.rated}/>
      </div>
     
      </>
       }
       
    </div>
    );
};

export default Detail;

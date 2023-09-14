import React ,{ useEffect, useState }from "react";
import ReactStars from "react-stars";
import './Cards.css';
import { TailSpin } from "react-loader-spinner";
import { getDocs } from "firebase/firestore";
import { movieref } from "../firebase/firebase";
import { Link } from "react-router-dom";

const Cards = () => {
    const [data, setdata] = useState([])
    const [loader, setLoader] = useState(false);

    useEffect(() => {
         async function getData(){
          setLoader(true);
         
          const _data = await getDocs(movieref);
          _data.forEach((doc) => {
            setdata((pre) => [...pre, {...(doc.data()), id: doc.id }])
          });
          console.log(_data);

          setLoader(false);
         }
        getData();
    
    },[])
    console.log(data);
    return (
        <div className=" flex flex-wrap justify-between m-4 p-3 ">
            { loader ? <div className="w-full flex items-center justify-center  h-96"> <TailSpin height={60} color="white"/> </div>:
                data.map((element, index) => {
                    return(
            <Link to={`/detail/${element.id}`} key={index}><div  className="card shadow-xl hover:-translate-y-2 p-2 border border-gray-500 mt-4 transition-all duration-500">
                <img className="h-50 w-full md:h-80"
                    src={element.link}
                    alt=""
                />
                <h1>name: {element.title} </h1>
                <h1 className="flex items-center ">rating: 
                <ReactStars 
                size={20}
                half={true}
                value={element.rating/element.rated}
                edit={false}
                />
                </h1>
                <h1>year: {element.year}</h1>
            </div></Link>
            )
            })
            }
        </div>
    );
};

export default Cards;

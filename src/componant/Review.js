import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { reviewref, db } from '../firebase/firebase'
import { addDoc, doc, updateDoc, query, where, getDocs } from 'firebase/firestore'
import { TailSpin, ThreeDots } from 'react-loader-spinner'
import swal from 'sweetalert'


const Review = ({ id, preRating, userRated }) => {

  const [loading, setLoding] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewLoading, setReviewLoding] = useState(false);
  const [thought, setThought] = useState('');
  const [data, setData] = useState([]);

  const sendReview = async () => {
    setLoding(true);
    try {
      await addDoc(reviewref, {
        movieid: id,
        rating: rating,
        name: "sandeep haldar",
        thought: thought,
        timestamp: new Date().getDate()
      })
      const ref = doc(db, "movie", id)
      await updateDoc(ref, {
        rating: preRating + rating,
        rated: userRated + 1
      })
      setRating(0);
      setThought("");
      swal({
        title: "review send successfully",
        icon: "success",
        buttons: false,
        timer: 3000
      })
    } catch (error) {
      swal({
        title: error,
        icon: "error",
        buttons: false,
        timer: 3000
      })
    }
    setLoding(false);
  }
  useEffect(() => {
    async function getData() {
      setReviewLoding(true);
      let quer = query(reviewref, where('movieid', '==', id));
      const querysnap = await getDocs(quer);
      console.log(querysnap);

      querysnap.forEach((doc) => {

        setData((pre) => [...pre, doc.data()]);
      });

      setReviewLoding(false);
    }
    getData();
  }, [id])

  return (
    <div className='mt-4 py-1 border-t-2 border-gray-600 w-full'>
      <ReactStars
        className="ml-2"
        size={35}
        half={true}
        value={rating}
        onChange={(rate) => setRating(rate)}
      />
      <input
        value={thought}
        onChange={(event) => setThought(event.target.value)}
        placeholder='Share your thought'
        className='w-full p-2 outline-none card'
      />

      <button onClick={sendReview} className=' w-full p-2 bg-green-600 '>
        {loading ? <TailSpin height={25} color='white' wrapperClass='flex justify-center' /> : 'Share'}
      </button>

      {
        reviewLoading ?
          <div className='flex justify-center mt-4'><ThreeDots height={25} color='white' /></div>
          :
          <div className='mt-4'>
            {
              data.map((element, index) => {
                return (
                  <div key={index} className=" mt-2 p-2 bg-gray-900 shadow-xl">
                    <p className='font-bold text-[#4055ef]'>{element.name}</p>
                    <p className='text-[#949191]'>{element.thought}</p>
                    <ReactStars
                      size={15}
                      half={true}
                      value={element.rating}
                      edit={false}
                    />
                    <p>{new Date(element.timestamp).toLocaleString()}</p>
                  </div>
                )
              })
            }
          </div>
      }
    </div>

  )
}

export default Review

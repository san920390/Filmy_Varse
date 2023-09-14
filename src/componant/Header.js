import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Appstate } from '../App';



const Header = () => {
  const useAppState = useContext(Appstate);
  return (
    <div className=" sticky top-0 bg-black">
      <div className=" text-3xl text-red-500 font-bold p-3 border-b-2 border-gray-500 flex justify-between">
        <Link to={"/"}><spam>Filmy <spam className="text-4xl text-white ">Varse</spam></spam></Link>
        <h1 className='text-lg text-white'>
          { useAppState.login?
            <Link to="/additem"> <Button > <AddIcon className='m-1' color='inherit' /> <spam className='text-white'>Add New</spam> </Button></Link>
            :
            <Link to="/login"> <Button><spam className='bg-green-600 p-2 text-white'> LogIn</spam> </Button></Link>
          }
        </h1>

      </div>
    </div>
  )
}

export default Header

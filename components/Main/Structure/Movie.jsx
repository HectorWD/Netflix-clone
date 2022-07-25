import React, { useState } from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'

import {UserAuth} from '../../../context/AuthContext'
import { db } from '../../../assets/firebase'
import { arrayUnion,doc,updateDoc } from 'firebase/firestore'


const Movie = ({item,id}) => {
    const {user}= UserAuth();
    const [saved, setSaved] = useState();
    const [like, setLike] = useState(false)

    const movieID= doc(db,'users',`${user?.email}`)

    const saveShow=async()=>{
        if(user?.email){
            setLike(!like)
            setSaved(true)
            await updateDoc(movieID,{
                savedShows:arrayUnion({
                    id:item.id,
                    title: item.title,
                    img: item.backdrop_path
                })
            })
        }else{
            alert('Please log in to save a movie')
        }
    }
    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={id}>
            <img className='block w-full h-auto' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full text-white duration-100 ease-in opacity-0 hover:opacity-100 hover:bg-black/80'>
                <p className='flex items-center justify-center h-full text-xs font-bold whitespace-normal sm:text-sm'>{item?.title} </p>
                <p onClick={saveShow}>
                    {like ? <FaHeart className='absolute text-red-400 top-4 left-4'/>
                        : <FaRegHeart className='absolute text-red-400 top-4 left-4'/>}
                </p>
            </div>
        </div>
    )
}

export default Movie
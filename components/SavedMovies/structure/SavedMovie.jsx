import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const SavedMovie = ({item,deleteShow}) => {
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img className='block w-full h-auto' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full text-white duration-100 ease-in opacity-0 hover:opacity-100 hover:bg-black/80'>
                <p className='flex items-center justify-center h-full text-xs font-bold whitespace-normal sm:text-sm'>
                  {item?.title} 
                </p>
                <p 
                className='absolute duration-100 ease-in top-4 right-4 hover:scale-110 hover:text-red-500'
                onClick={()=>deleteShow(item.id)}
                >
                  <AiOutlineClose/> 
                </p>
            </div>
        </div>
  )
}

export default SavedMovie
import React, { useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import SavedMovie from './structure/SavedMovie'

import { UserAuth } from '../../context/AuthContext'
import { db } from '../../assets/firebase'
import { updateDoc, onSnapshot, doc } from 'firebase/firestore'


const SavedShows = () => {
    const { user } = UserAuth();
    const [movies, setMovies] = useState([])
    const movieRef= doc(db,'users',`${user?.email}`);
    const sliderLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const sliderRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    const deleteShow=async(passedID)=>{
        try {
            const result= movies.filter((item)=> item.id !== passedID)
            await updateDoc(movieRef,{
                savedShows:result,
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows)
        })
    }, [])



    return (
        <div>
            <h2 className='p-4 font-bold text-white md:text-xl'>
                My shows
            </h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    className='absolute z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block'
                    size={40}
                    onClick={sliderLeft}
                />
                <div id={'slider'} className='relative left-0 w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth'>
                    {movies.map((item, id) => (
                        <SavedMovie item={item} key={id} deleteShow={deleteShow}/>
                    ))}
                </div>
                <MdChevronRight
                    className='absolute right-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block'
                    size={40}
                    onClick={sliderRight}
                />
            </div>
        </div>
    )
}

export default SavedShows
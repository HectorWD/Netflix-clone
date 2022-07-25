import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Structure/Movie'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const RowMovies = ({ title, fetchURL,rowId }) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    const sliderLeft=()=>{
        let slider= document.getElementById('slider'+rowId);
        slider.scrollLeft=  slider.scrollLeft -500;
    }
    const sliderRight=()=>{
        let slider= document.getElementById('slider'+rowId);
        slider.scrollLeft=  slider.scrollLeft +500;
    }

    return (
        <div key={rowId}>
            <h2 className='p-4 font-bold text-white md:text-xl'>
                {title}
            </h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                className='absolute z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block' 
                size={40}
                onClick={sliderLeft}
                />
                <div id={'slider'+rowId} className='relative left-0 w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth'>
                    {movies.map((item, id) => (
                        <Movie item={item} id={id} key={item.id} />
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

export default RowMovies
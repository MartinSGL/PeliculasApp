import React,{useEffect, useState} from 'react'
import { MovieFull } from '../interfaces/movieInterfaces'
import movieDB from '../api/movieDB';
import { Cast, CreditResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading:boolean
    movieFull?:MovieFull
    cast:Cast[]
}

export const useMovieDetails = (movieId:number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading:true,
        movieFull:undefined,
        cast:[]
    })

    const getMovieDetails = async () =>{
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise = movieDB.get<CreditResponse>(`/${movieId}/credits`)
        
        const [movieDetailsRes,castPromiseRes] = await Promise.all([movieDetailsPromise,castPromise])

        setState({
            isLoading:false,
            movieFull:movieDetailsRes.data,
            cast:castPromiseRes.data.cast
        })
    }

    useEffect(()=>{
        getMovieDetails()
    })

    return{
        ...state
    }
}


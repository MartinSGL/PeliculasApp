import axios from "axios"

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'9a2f064325afd92966052843fba32ec6',
        language:'es-ES',
    }
})

export default movieDB
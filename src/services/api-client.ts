import axios from "axios"


export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "b3afec41263645cb951e28a3c344fa6c"
    }
})
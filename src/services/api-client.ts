import axios from "axios"


export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "50fdfa86df3e42c0a47bd2e0f11400d0"
    }
})
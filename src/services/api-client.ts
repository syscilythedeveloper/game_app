import axios from "axios"
import config from "./config"

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: config.api_key
    }
})
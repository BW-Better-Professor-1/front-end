import axios from "axios";

export default () => axios.create({
    headers: {
        Authorization: localStorage.getItem("token"),
    },
    baseURL: "" // todo: fill in real baseURL from backend
})
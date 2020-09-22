import axios from "axios";

export default () => axios.create({
    headers: {
        Authorization: localStorage.getItem("token"),
    },
    baseURL: "https://bw-better-professor-backend.herokuapp.com/api/"
})
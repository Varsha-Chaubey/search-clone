import axios from "axios";



export const baseUrl = `https://en.wikipedia.org`;

export const http = axios.create({
    baseURL: baseUrl
})


http.interceptors.response.use(
    (res) => {
        return res;
    },
    async (error) => {
        const { response } = error;

        if (response.status === 400) {
            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);

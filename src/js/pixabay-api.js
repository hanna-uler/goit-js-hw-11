import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from 'axios';
import renderGallery from "./render-functions";


export default function getPics(queryWords) {
    axios.defaults.baseURL = "https://pixabay.com";
    axios.get("/api/", {
        params: {
            key: "31908643-2178b12526c513c1beb381d6b",
            q: queryWords,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        }
    })
    .then(response => {
        if (response.data.hits.length === 0) {
            return iziToast.error({
                theme: "dark",
                message: "Sorry, there are no images matching your search query. Please try again!",
                backgroundColor: "#EF4040",
                closeOnClick: true,
                position: "topRight",
                timeout: 3000,
            })
        } else {
                const loaderEl = document.querySelector(".loader");
                loaderEl.classList.add("visually-hidden");
                return renderGallery(response.data.hits);
            }
            })
        .catch(error => console.log(error));
};

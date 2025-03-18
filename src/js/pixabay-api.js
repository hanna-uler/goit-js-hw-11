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
                return renderGallery(response.data.hits);
            }
            })
        .catch(error => console.log(error));
};

//     Pixabay resource:
//     Example
// Retrieving photos of "yellow flowers". The search term q needs to be URL encoded:

// https://pixabay.com/api/?key=31908643-2178b12526c513c1beb381d6b&q=yellow+flowers&image_type=photo
// Response for this request:

// {
// "total": 4692,
// "totalHits": 500,
// "hits": [
//     {
//         "id": 195893,
//         "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/",
//         "type": "photo",
//         "tags": "blossom, bloom, flower",
//         "previewURL": "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg"
//         "previewWidth": 150,
//         "previewHeight": 84,
//         "webformatURL": "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
//         "webformatWidth": 640,
//         "webformatHeight": 360,
//         "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
//         "fullHDURL": "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
//         "imageURL": "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
//         "imageWidth": 4000,
//         "imageHeight": 2250,
//         "imageSize": 4731420,
//         "views": 7671,
//         "downloads": 6439,
//         "likes": 5,
//         "comments": 2,
//         "user_id": 48777,
//         "user": "Josch13",
//         "userImageURL": "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
//     },
//     {
//         "id": 73424,
//         ...
//     },
//     ...
// ]
// }
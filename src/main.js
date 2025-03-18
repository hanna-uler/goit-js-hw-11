import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getPics from "./js/pixabay-api";


const formEl = document.querySelector(".form");
const loaderEl = document.querySelector(".loader")
const galleryEl = document.querySelector(".gallery");
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.searchText.value === "") {
        return iziToast.error({
            theme: 'dark',
            message: "Please, fill out the search field.",
            backgroundColor: '#EF4040',
            closeOnClick: true,
            position: 'topRight',
            timeout: 3000,
        })
    } else {
        loaderEl.classList.remove("visually-hidden");
        galleryEl.innerHTML = "";
        const queryWords = event.currentTarget.searchText.value.trim("");
        getPics(queryWords);
        event.currentTarget.searchText.value = "";
    }
    
};
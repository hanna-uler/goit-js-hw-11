import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getPics from "./js/pixabay-api";


const formEl = document.querySelector(".form");
const loaderEl = document.querySelector(".loader")
formEl.addEventListener("submit", onSubmit);

// const loaderEl = document.querySelector(".loaderJS")
// const loaderEl = document.createElement("div");
// loaderEl.classList.add("loader");

function onSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.searchText.value === "") {
        return iziToast.error({
            theme: 'dark',
            message: `Please, fill out this field.`,
            backgroundColor: '#EF4040',
            closeOnClick: true,
            position: 'topRight',
            timeout: 3000,
        })
    } else {
        loaderEl.classList.remove("visually-hidden");
        // formEl.append(loaderEl);
        // loaderOn();
        const queryWords = event.currentTarget.searchText.value.trim("");
        getPics(queryWords);
        loaderEl.classList.add("visually-hidden")
        event.currentTarget.searchText.value = "";
        // setTimeout(() => { loaderEl.classList.add("visually-hidden") }, 3000);
        // loaderEl.remove();
        // loaderOff();
        // setTimeout(() => {
        // loaderEl.remove()
    // }, 3000);
    }
    
};

// function loaderOn() {
//         formEl.append(loaderEl);
// }

// function loaderOff() {
//     setTimeout(() => {
//         loaderEl.remove()
//     }, 3000);

// }

// function loaderOn() {
//     loader.style.display = "none"; 
// }

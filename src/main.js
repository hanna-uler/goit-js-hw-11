import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getPics from "./js/pixabay-api";

// import function1Name from "./js/pixabay-api";
// import function2Name from "./js/render-functions";


const formEl = document.querySelector(".form");
formEl.addEventListener("submit", onSubmit);

// restoreInput();

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
        const queryWords = event.currentTarget.searchText.value;
        return getPics(queryWords);
    }
    
};


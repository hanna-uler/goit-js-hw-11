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
    let picsArray = [];
    // console.log(event.currentTarget.searchText.value);
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
        const picsArray = getPics(queryWords);
    }
    if (picsArray.length === 0) {
      return iziToast.error({
            theme: "dark",
            message: "Sorry, there are no images matching your search query. Please try again!",
            backgroundColor: "#EF4040",
            closeOnClick: true,
            position: "topRight",
            timeout: 3000,
        })  
    }
};

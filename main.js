// let acc = document.querySelectorAll("accordion");
// let i;
// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("active");

//         let panel = this.nextElementSibling;

//         if (panel.style.display === "block") {
//             panel.style.display = "none";

//         } else {
//             panel.style.display = "block";
//             acc[0].style.display = "none";

//             panel.addEventListener("click", function () {
//                 this.classList.toggle("active2");

//                 if (panel.style.display === "block") {
//                     panel.style.display = "none";
//                     acc[0].style.display = "block";
//                 }
//             })
//             console.log(acc[0])
//             console.log(panel);
//         }
//     })
// }i

'use strict';

let photo = document.querySelector(".myPhoto").firstElementChild;
//console.log(photo)

let elements = document.querySelector(".myCv");
//console.log(elements)

photo.addEventListener("mouseover", () => {
    if(window.innerWidth >= 1100){
        setTimeout(() => {
            photo.style.width = "18vh";
        }, 100);
        setTimeout(() => {
            photo.style.width = "9vh";
            elements.style.gridTemplateRows = "1fr 2fr";
        }, 2000);
    }
    else if(window.innerWidth >= 748 && window.innerWidth < 1100){
        
        setTimeout(() => {
            photo.style.width = "10vh";
        }, 100);
        setTimeout(() => {
            photo.style.width = "8vh";
            elements.style.gridTemplateRows = "0.5fr 1fr 1fr 1fr";
        }, 1000);
    }
    else{
        setTimeout(() => {
            photo.style.width = "12vh";
        }, 100);
        setTimeout(() => {
            photo.style.width = "10vh";
            elements.style.gridTemplateRows = "1fr 2fr";
        }, 3000);
    }
})




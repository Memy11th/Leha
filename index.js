
let btn = document.getElementById("btnn") ; 
let header = document.getElementById("header") ;
let scrollbtn = document.getElementById("Top") ;
 let footer = document.querySelector('.black');







window.onscroll =  function () {
 if (scrollY >= 270) {
   scrollbtn.style.display = "block";
 }else {
    scrollbtn.style.display = "none";
 }
};
scrollbtn.onclick = function () {
scroll ({
    top :0,
    behavior : "smooth"
    
});

}

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})







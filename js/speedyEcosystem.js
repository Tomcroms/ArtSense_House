const dragContainer = document.getElementById("dragContainer");
let isDown = false;
let startX;
let startY;
let scrollLeft; 
let scrollTop;


document.addEventListener("DOMContentLoaded", () => {
    dragContainer.scrollTop = dragContainer.offsetHeight/2;
    dragContainer.scrollLeft = dragContainer.offsetWidth/2; 
})

dragContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - dragContainer.offsetLeft;
    startY = e.pageY - dragContainer.offsetTop;
    scrollLeft = dragContainer.scrollLeft;
    scrollTop = dragContainer.scrollTop;
})

dragContainer.addEventListener("mouseleave", () => {
    isDown = false;
})

dragContainer.addEventListener("mouseup", () => {
    isDown = false;
})

dragContainer.addEventListener("mousemove", (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - dragContainer.offsetLeft;
    const y = e.pageY - dragContainer.offsetTop;
    const walkX = x - startX;
    const walkY = y -startY;
    dragContainer.scrollLeft = scrollLeft - walkX; 
    dragContainer.scrollTop = scrollTop - walkY; 
})
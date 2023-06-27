const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

// if someone clicks on bar or hamburger menu then an event will happen i.e it should open so add an eventListner
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

//  for adding the image slider in shop-product html file
// note: write the id or class name in '' single brackets only NOT in "" double brackets
var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');
smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
}


// for image slider

const slider =document.querySelector(".sm-slide");

const dragging = (e) =>{
    slider.scrollLeft = e.pageX;
}

slider.addEventListener('mousemove',dragging);

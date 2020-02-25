var caroussel = document.querySelector('.carousel');

var prev = document.querySelector('.prev')
var next = document.querySelector('.next')

prev.addEventListener("click", function (){
    rotate(60);
})

next.addEventListener("click", function (){
    rotate(-60)
})

function rotate(direction){
    position += direction;
    carousel.style.transform = "rotate(" + position + "deg)"
}

console.log(carousel);
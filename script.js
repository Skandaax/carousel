var position = 0;
var rotation = true;
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
    carousel.style.transform = "rotateY(" + position + "deg)"
}

function auto() {
    setTimeout(function () {
        if(rotation){
           rotate(-60); 
        }
        auto
    }, 3000);
}

auto();

console.log(prev);
console.log(next);

carousel.addEventListener("mousseover", function (){
rotation = false
})

carousel.addEventListener("mousseover", function (){
    rotation = true
})
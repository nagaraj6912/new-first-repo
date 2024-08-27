const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var date=new Date();
document.querySelector(".date").innerHTML=date
function circlemousefollow() {
    window.addEventListener("mousemove", function (dets) {
        x = document.querySelector("#minicircle")
        x.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}

function firstpageAnime() {
    var tl = gsap.timeline();

    tl.from("#nav", {
            y: '-10',
            opacity: 0,
            duration: 3,
            ease: Expo.easeInOut
        })
        .to(".prod", {
            y: "-10%",
            opacity: 0.6,
            ease: Expo.easeInOut,
            delay: -2,
            duration: 2,
            stagger: .2
        })
        .to(".proud", {
            y: "-10%",
            ease: Expo.easeInOut,
            delay: -1,
            duration: 2,
            stagger: .2,
        })
        .to(".bod", {
            y: "-10%",
            ease: Expo.easeInOut,
            delay: -2,
            duration: 2,
            stagger: .2,
        })

}
x=document.getElementById("minicircle")

var elem = document.querySelectorAll(".elem")
elem.forEach(function (val) {
    
    val.addEventListener("mouseenter",function(){
        val.childNodes[1].style.opacity=1
        x.style.padding="10px"
    })
    val.addEventListener("mousemove", function (dets) {
        val.childNodes[1].style.left = dets.x + "px"
        val.childNodes[1].style.top = dets+ "px"

    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[1].style.opacity=0
        x.style.padding=0
    })

});

circlemousefollow();
firstpageAnime();
document.querySelector(".cont-p").addEventListener(
    "mouseenter", function() {
        document.querySelector(".cont-txt").style.
        transform = "perspective(1000px) rotateX(-50deg)";
    }
)

document.querySelector(".cont-p").addEventListener(
    "mouseleave", function() {
        document.querySelector(".cont-txt").style.
        transform = "perspective(1000px) rotateX(0deg)";
    }
)



// alternate way to do this hover effect by JAVA-Script

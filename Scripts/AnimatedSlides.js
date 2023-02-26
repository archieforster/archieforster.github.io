let slideIndex = 0
let slides = document.getElementsByClassName("about-me-slides-images")

function ShowFirstSlide(){
    // Sets first slide to be displayed
    slides[0].style.display = "block"
}

function ShowNextSlide(){
    // Calculate next slide index using Modulo
    nextSlideIndex = (slideIndex + 1) % slides.length

    // Remove previous slide and display next one
    slides[slideIndex].style.display = "none"
    slides[nextSlideIndex].style.display = "block"

    // Set current slide index to new index
    slideIndex = nextSlideIndex
}

function ShowPreviousSlide(){
    // Calculate next slide index using Modulo
    prevSlideIndex = (slideIndex - 1) % slides.length

    // Remove previous slide and display next one
    slides[slideIndex].style.display = "none"
    slides[prevSlideIndex].style.display = "block"

    // Set current slide index to new index
    slideIndex = prevSlideIndex
}
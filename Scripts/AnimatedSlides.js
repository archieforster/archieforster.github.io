let slideIndex = 0
let slides = document.getElementsByClassName("about-me-slides-images")

function ShowFirstSlide(){
    console.log("Displaying first slide")
    // Hides all slides
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    // Sets first slide to be displayed
    slides[0].style.display = "block"
}

function ShowNextSlide(){
    console.log("Displaying next slide")
    // Calculate next slide index using Modulo
    nextSlideIndex = (slideIndex + 1) % slides.length

    // Remove previous slide and display next one
    slides[slideIndex].style.display = "none"
    slides[nextSlideIndex].style.display = "block"

    // Set current slide index to new index
    slideIndex = nextSlideIndex
}

function ShowPreviousSlide(){
    console.log("Displaying previous slide")
    // Calculate next slide index using Modulo
    prevSlideIndex = (slideIndex - 1) % slides.length

    // Remove previous slide and display next one
    slides[slideIndex].style.display = "none"
    slides[prevSlideIndex].style.display = "block"

    // Set current slide index to new index
    slideIndex = prevSlideIndex
}
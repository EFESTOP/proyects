const chosen = document.querySelectorAll(".principal")
const quest = document.querySelectorAll(".quest")
const iconArrow = document.querySelectorAll(".icon_arrow")


/*const arrowRotate = iconArrow.forEach(e => {
    e.addEventListener("click", (event) => {
        const arrow = event.target
        arrow.classList.toggle("arrow_active")
    })
}) */

chosen.forEach(element => {
    element.addEventListener("click", (event) => {
        removeActiveClass()
        const item = event.target
        item.classList.add("active")
        
        /* arrow = item.lastElementChild
        function starArrow() {
            arrow.classList.add("arrow_active")
        }
        starArrow() */
        
    })
})


const removeActiveClass = () => {
    chosen.forEach((oneChosen) => {
        oneChosen.classList.remove("active")
        // oneChosen.lastElementChild.classList.toggle("arrow_active")
    })

}


const image = document.querySelectorAll("woman-img-mobile")
const breakPoint = 370
function changeImage() {
    if (window.innerWidth > breakPoint) {
        image.src = "images/illustration-woman-online-desktop.svg"
    } else {
        image.src = "images/illustration-woman-online-mobile.svg"
    }
    window.onload = changeImage;
    window.addEventListener("resize", changeImage)
}




let nav = document.getElementById('nav')
let scroll_max = document.body.scrollHeight - window.innerHeight

window.addEventListener("scroll", () => {
    let current_scroll = Math.floor(window.scrollY / scroll_max * 100)

    console.log(current_scroll);
    if (current_scroll >= 10) {
        nav.style.opacity = "50%"
    } else {
        nav.style.opacity = "100%"
    }

})
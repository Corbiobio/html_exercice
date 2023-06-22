let square = document.getElementById("square")
let scrollspy_container = document.getElementById("scrollspy_container")
let scroll_max = scrollspy_container.scrollHeight - scrollspy_container.clientHeight


scrollspy_container.addEventListener("scroll", (e) => {

    square.style.opacity = Math.ceil(scrollspy_container.scrollTop / scroll_max * 100) + "%"

    // console.log(scrollspy_container.scrollHeight);
    // console.log(scrollspy_container.scrollTop);
    // console.log(Math.ceil(scrollspy_container.scrollTop / scroll_max * 100));
})
let nav = document.getElementById('nav')

let section1 = document.getElementById('sect1')
let section2 = document.getElementById('sect2')
let section3 = document.getElementById('sect3')
let section4 = document.getElementById('sect4')
let section5 = document.getElementById('sect5')

let li = document.querySelector("ul").children

let scroll_max = document.body.scrollHeight - window.innerHeight

window.addEventListener("scroll", () => {
    let current_scroll = Math.floor(window.scrollY / scroll_max * 100)

    let sect1_data = section1.getBoundingClientRect()
    let sect2_data = section2.getBoundingClientRect()
    let sect3_data = section3.getBoundingClientRect()
    let sect4_data = section4.getBoundingClientRect()
    let sect5_data = section5.getBoundingClientRect()

    if (current_scroll >= 1) {
        nav.style.opacity = "50%"
    } else {
        nav.style.opacity = "100%"
    }
    function active_li(active, li) {
        li[active - 1].style.backgroundColor = "red"
    }
    function remove_li(li) {
        for (let i = 0; i < li.length; i++) {
            li[i].style.backgroundColor = ""
        }
    }

    if (sect1_data.y + sect1_data.height >= 1) {
        // console.log("1");
        remove_li(li)
        active_li(1, li)
    } else if (sect2_data.y + sect2_data.height >= 1) {
        // console.log("2");
        remove_li(li)
        active_li(2, li)
    } else if (sect3_data.y + sect3_data.height >= 1) {
        // console.log("3");
        remove_li(li)
        active_li(3, li)
    } else if (sect4_data.y + sect4_data.height >= 1) {
        // console.log("4");
        remove_li(li)
        active_li(4, li)
    } else if (sect5_data.y + sect5_data.height >= 1) {
        // console.log("5");
        remove_li(li)
        active_li(5, li)
        nav.style.position = "sticky"
    } else {
        // console.log("nothing");
        nav.style.position = "static"
    }
})
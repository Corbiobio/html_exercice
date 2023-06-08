const article_container = document.getElementById("article_container")
const all = document.getElementById("all")
const livre = document.getElementById("livre")
const chat = document.getElementById("chat")
const table = document.getElementById("table")

const article_child = article_container.children


// for (let i = 0; i < article_child.length; i++) {
//     console.log(article_child[i].classList);
// }

all.addEventListener("click", () => {
    for (let i = 0; i < article_child.length; i++) {
        article_child[i].style.display = "flex"
    }
})

livre.addEventListener("click", () => {
    for (let i = 0; i < article_child.length; i++) {
        console.log(article_child[i].classList);
        if (article_child[i].classList.value !== "livre") {
            article_child[i].style.display = "none"
        } else {
            article_child[i].style.display = "flex"
        }
    }
})
chat.addEventListener("click", () => {
    for (let i = 0; i < article_child.length; i++) {
        console.log(article_child[i].classList);
        if (article_child[i].classList.value !== "chat") {
            article_child[i].style.display = "none"
        } else {
            article_child[i].style.display = "flex"
        }
    }
})
table.addEventListener("click", () => {
    for (let i = 0; i < article_child.length; i++) {
        console.log(article_child[i].classList);
        if (article_child[i].classList.value !== "table") {
            article_child[i].style.display = "none"
        } else {
            article_child[i].style.display = "flex"
        }
    }
})
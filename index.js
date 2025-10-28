// const p = document.querySelectorAll("p")
const btn = document.querySelector("button")
// btn.onclick = function () {
//     btn.style.backgroundColor = "red"
//     btn.style.color = "black"
//     btn.textContent = "rahmat!"
// }

const colors = ["red", "blue", "green", "yellow", "purple"]
const div = document.querySelectorAll("div")
btn.onclick = function(){
    div.forEach((div) => {
        let randoms = Math.floor(Math.random() * colors.length)
        div.style.backgroundColor = colors[randoms]
    });
}
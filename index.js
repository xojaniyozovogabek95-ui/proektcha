const p = document.querySelectorAll("p")[0]
const btn = document.querySelectorAll("button")[0]
btn.onclick = function () {
    btn.style.backgroundColor = "red"
    btn.style.color = "black"
    btn.textContent = "rahmat!"
}
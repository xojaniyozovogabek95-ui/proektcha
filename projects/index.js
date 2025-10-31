// const p = document.getElementsByClassName("p")[0]
// const img = document.getElementById("kichik")
const btn = document.querySelector("button")
const divs = document.querySelectorAll("div")
let colors = ["red", "blue", "black", "green", "aqua"]

btn.onclick = function () {
    divs.forEach(div => {
        let random = Math.floor(Math.random() * colors.length)
        div.style.backgroundColor = colors[random]
    });
}











// btn.onclick = function () {
//     img.classList.toggle("katta")
// }



// let holat = false
// btn.onclick = function () {
//     if (holat === false) {
//         p.classList.add("ozgardi")
//         p.textContent = "ozgardi"
//         img.setAttribute("src", "https://picsum.photos/200/300")
//         holat = true
//     } else {
//         p.classList.remove("ozgardi")
//         p.textContent = "Avvalgi holat"
//         img.setAttribute("src", "../images/photo_2025-09-01_17-53-52.jpg")
//         holat = false
//     }

// }//../images/ChatGPT Image 2 оkт. 2025 г., 21_02_14.png
//
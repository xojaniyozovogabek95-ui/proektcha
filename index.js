// const p = document.querySelectorAll("p")
const btn = document.querySelector("button")
// btn.onclick = function () {
//     btn.style.backgroundColor = "red"
//     btn.style.color = "black"
//     btn.textContent = "rahmat!"
// }

// const colors = ["red", "blue", "green", "yellow", "purple"]
// const div = document.querySelectorAll("div")
// btn.onclick = function(){
//     div.forEach((div) => {
//         let randoms = Math.floor(Math.random() * colors.length)
//         div.style.backgroundColor = colors[randoms]
//     });
// }



const ul = document.querySelector("ul")
const input = document.querySelector("input")
btn.onclick = function() {
    let value = input.value
    if(value === "")return
    const li = document.createElement("li")
    li.textContent = value
    const delbtn = document.createElement("button")
    delbtn.textContent = "ochirish"
delbtn.onclick = function(){
    ul.removeChild(li)
}
li.appendChild(delbtn)
ul.appendChild(li)
input.value = ""
}
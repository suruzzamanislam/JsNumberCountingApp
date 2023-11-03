// selection

let result = document.querySelector(".result")
let add = document.querySelector(".add")
let lower = document.querySelector(".lower")

let adding = 0;
let lowering = 1;

add.addEventListener("click", () => {
    adding++
    result.innerHTML = adding
})

lower.addEventListener("click", () => {
    adding--
    result.innerHTML = adding
})
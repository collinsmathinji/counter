let countEl = document.getElementById("count-el")
let passEl=document.getElementById("pass-el")
let count = 0

function increment() {
    count = count + 1
    countEl.textContent= count
}
function Saved() {
    fully = count + "~"
    passEl.textContent+=fully
    countEl.textContent=0
    count=0
}

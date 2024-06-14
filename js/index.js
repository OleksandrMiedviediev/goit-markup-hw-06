const modal = document.getElementById('modalId');
const btn = document.getElementById('btnId')
const close = document.getElementById('closeId')

btnId.onclick = function () {
    modal.classList.toggle("is-open")
}
closeId.onclick = function () {
    modal.classList.remove("is-open")
}
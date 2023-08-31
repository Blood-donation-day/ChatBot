const $cookbutton = document.querySelector(`#cook`)
$cookbutton.addEventListener(`click`, e => {
    e.preventDefault();
    SrctoCook()
})

function SrctoCook() {
    document.getElementsByClassName(`iframe`).src = "chat test.html";

}
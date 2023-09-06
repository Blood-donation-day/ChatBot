const $headbutton = document.querySelector(`h1`)
const $cookbutton = document.querySelector(`span#cook`)
const $recentbutton = document.querySelector(`span#recent`)
const $bookmarkbutton = document.querySelector(`span#bookmark`)
const page1 = document.querySelector(`iframe`)

$cookbutton.addEventListener(`click`, e => {
    e.preventDefault();
    SrctoCook()
})

$headbutton.addEventListener(`click`, e => {
    e.preventDefault();
    SrctoCook()
})

$recentbutton.addEventListener(`click`, e => {
    
    SrctoRecent()
})


$bookmarkbutton.addEventListener(`click`, e => {
    e.preventDefault();
    SrctoBookmark()
})


function SrctoCook() {
    page1.setAttribute(`src`, `chat.html`)

}

function SrctoRecent() {
    page1.setAttribute(`src`, `recent.html`)
}

function SrctoBookmark() {
    page1.setAttribute(`src`, `bookmark.html`)
}